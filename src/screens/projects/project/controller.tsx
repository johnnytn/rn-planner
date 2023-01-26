import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import useToast from "hooks/useToast";
import ProjectService from "services/project.service";
import { useNavigation } from "@react-navigation/native";
import {
  MonthlyDataCategories,
  ProjectDataFormModel,
  ProjectModel,
  ProjectMonthlyDataModel,
} from "commons/types/project.types";
import { PAGES } from "commons/types";
import { useConfiguration } from "contexts/configuration";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getProjectDataId } from "commons/utils/formatter";

const ProjectController = () => {
  const navigation = useNavigation();
  const toastController = useToast();
  const { activeProject, setActiveProject } = useConfiguration();

  const [project, setProject] = useState<ProjectModel | undefined>(
    activeProject
  );
  const [projectData, setProjectData] = useState<ProjectMonthlyDataModel>();
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const {
    // register,
    control,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
    setValue,
  } = useForm(/* {
    defaultValues: initialValues,
    resolver: zodResolver(projectFormValidationSchema),
  } */);

  const fetchProjectData = useCallback(async () => {
    if (activeProject) {
      // todo: fetch values
      const currentMonth = new Date().getMonth();
      const id = getProjectDataId(activeProject?.id, currentMonth);
      const data = await ProjectService.getMonthlyData(id);
      if (data) {
        console.log({ data });

        data.categories.forEach((category) => {
          category.subcategories.forEach((subcategories) => {
            // field={`${category.name}.${sub.name}`}
            /* console.log("--------------------here?");
            console.log(
              `${category.name}.${subcategories.name}`,
              subcategories.value
            ); */
            setValue(
              `${category.name}.${subcategories.name}`,
              subcategories.value
            );
          });
        });

        setProjectData(data);
      } else {
        setProjectData({
          categories: activeProject.categories as MonthlyDataCategories[],
          currentMonth,
          projectId: activeProject?.id,
        });
      }
      setIsLoading(false);
    }
  }, [activeProject]);

  const onSubmit = async (data: any /* ProjectDataFormModel */) => {
    try {
      if (!activeProject || !projectData) return;
      // const { categories, name, description } = getValues();
      const dataArr = Object.entries(data);
      console.log({ data });
      const mappedData = dataArr.map((d) => {
        const subCatArr = Object.entries(d[1] as any);
        return {
          name: d[0],
          subcategories: subCatArr.map((sub: any) => {
            return {
              name: sub[0],
              value: sub[1] | 0,
            };
          }),
        };
      });

      const payload = {
        projectId: activeProject.id,
        currentMonth: projectData.currentMonth,
        categories: mappedData,
      };
      console.log("-------------------");

      /* TODO: check updatedAt      }; */
      setIsSending(true);
      await ProjectService.saveMonthlyData(payload);
      toastController.open("Projeto atualizado com sucesso");
      setTimeout(() => {
        navigation.navigate(PAGES.PROJECTS);
      }, 500);
    } catch (error) {
      // console.log(error);
      toastController.open("Erro ao criar projeto");
      throw error;
    } finally {
      setIsSending(false);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    if (isLoading && activeProject) {
      fetchProjectData();
    }
  }, [isLoading, activeProject]);

  return {
    handleSubmit,
    onSubmit,
    isLoading,
    isSending,
    project,
    navigation,
    errors,
    control,
  };
};

export default ProjectController;
