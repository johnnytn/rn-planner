import { useCallback, useEffect, useMemo, useState } from "react";

import useToast from "hooks/useToast";
import ProjectService from "services/project.service";
import { useNavigation } from "@react-navigation/native";
import {
  MonthlyDataCategories,
  ProjectModel,
  ProjectMonthlyDataModel,
} from "commons/types/project.types";
import { PAGES } from "commons/types";
import { useConfiguration } from "contexts/configuration";
import { useForm } from "react-hook-form";

import { getProjectDataId } from "commons/utils/formatter";

const ProjectController = () => {
  const navigation = useNavigation();
  const toastController = useToast();
  const { activeProject } = useConfiguration();

  const [project] = useState<ProjectModel | undefined>(activeProject);
  const [projectData, setProjectData] = useState<ProjectMonthlyDataModel>();
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const projectDataId = getProjectDataId(
    activeProject?._id,
    currentMonth,
    currentYear
  );

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const projectWatcher = watch();

  // TODO: add custom types
  const projectTotal = useMemo(() => {
    const categoriesValues = Object.values(projectWatcher);
    return categoriesValues.reduce((prev, subcategory) => {
      const subValues = Object.values(subcategory);
      return (
        subValues.reduce((prev: any, sub: any) => prev + Number(sub), 0) + prev
      );
    }, 0);
  }, [projectWatcher]);

  const fetchProjectData = useCallback(async () => {
    if (activeProject) {
      const data = await ProjectService.getMonthlyData(projectDataId);
      if (data) {
        //  TODO: check number values for inputs
        data.categories.forEach((category) => {
          category.subcategories.forEach((subcategories) => {
            setValue(
              `${category.name}.${subcategories.name}`,
              `${subcategories.value}`
            );
          });
        });

        setProjectData(data);
        setIsLoading(false);
      } else {
        setProjectData({
          categories: activeProject.categories as MonthlyDataCategories[],
          currentMonth,
          currentYear,
          projectId: activeProject?._id,
        });
        setIsLoading(false);
      }
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
        _id: projectDataId,
        projectId: activeProject._id,
        currentMonth: projectData.currentMonth,
        currentYear: projectData.currentYear,
        categories: mappedData,
      };
      // console.error(error)
      /* TODO: check updatedAt      }; */
      setIsSending(true);
      await ProjectService.saveMonthlyData(payload);
      toastController.open("Projeto atualizado com sucesso");
      setTimeout(() => {
        navigation.navigate(PAGES.PROJECTS);
      }, 500);
    } catch (error) {
      console.error(error);
      toastController.open("Erro ao criar projeto");
      throw error;
    } finally {
      setIsSending(false);
    }
  };

  const handleRemove = () => {
    // TODO: ADD
  };

  const onClickUpdate = () => {
    navigation.navigate(PAGES.UPDATE_PROJECT);
  };

  useEffect(() => {
    if (isLoading && activeProject) {
      fetchProjectData();
    }
  }, [isLoading, activeProject]);

  /* useEffect(() => {
    if (isLoading && projectData) {
      projectData.categories.forEach((category) => {
        category.subcategories.forEach((subcategories) => {
          setValue(
            `${category.name}.${subcategories.name}`,
            subcategories.value
          );
        });
      });
    }
  }, [projectData]); */

  return {
    handleSubmit,
    handleRemove,
    onClickUpdate,
    onSubmit,
    isLoading,
    isSending,
    projectTotal,
    project,
    navigation,
    errors,
    control,
  };
};

export default ProjectController;
