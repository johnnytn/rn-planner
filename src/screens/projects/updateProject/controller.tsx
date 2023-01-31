import { zodResolver } from "@hookform/resolvers/zod";

import { useFieldArray, useForm } from "react-hook-form";

import { getInitialValues } from "./utils";
// import { CategoryModel } from "commons/types/project.types";
import ProjectService from "services/project.service";
import useToast from "hooks/useToast";
import { PAGES } from "commons/types";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useConfiguration } from "contexts/configuration";
import {
  defaultCategory,
  defaultSubCategory,
  NewProjectFormModel,
  projectFormValidationSchema,
} from "../newProject/utils";
// TODO: add controller

const UpdateProjectController = () => {
  const { activeProject } = useConfiguration();
  const navigation = useNavigation();
  const toastController = useToast();
  const [isSending, setIsSending] = useState(false);

  const {
    // register,
    control,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: getInitialValues(activeProject),
    resolver: zodResolver(projectFormValidationSchema),
  });

  const {
    fields: categories,
    append,
    update,
    remove,
  } = useFieldArray({
    name: "categories",
    control,
  });

  //  TODO: try it out
  const categoriesWatcher = watch("categories", categories);

  const onSubmit = async (data: NewProjectFormModel) => {
    try {
      if (!activeProject) return toastController.open("Cade o id do projeto?");
      const { categories, name, description } = getValues();
      const payload = {
        categories,
        name,
        description,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      // console.log(activeProject.id);
      setIsSending(true);
      await ProjectService.update(activeProject._id, payload);
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

  const addCategory = () => {
    append(defaultCategory);
  };

  const removeCategory = (index: number) => {
    remove(index);
  };

  const addSubCategory = (catIndex: number /* , category: ICategory */) => {
    const category = categoriesWatcher[catIndex];
    console.log("add category-----------------------", category);
    console.log({ categoriesWatcher });
    const updatedCategory = {
      ...category,
      subcategories: [...category.subcategories, defaultSubCategory],
    };
    update(catIndex, updatedCategory);
  };

  /* TODO: check remove between rows */
  const removeSubCategory = (catIndex: number, subcatIndex: number) => {
    const category = categoriesWatcher[catIndex];
    console.log(
      category.subcategories.filter((sub, index) => index !== subcatIndex)
    );
    const updatedCategory = {
      ...category,
      subcategories: category.subcategories.filter(
        (sub, index) => index !== subcatIndex
      ),
    };
    update(catIndex, updatedCategory);
  };

  return {
    addCategory,
    removeCategory,
    addSubCategory,
    removeSubCategory,
    handleSubmit,
    onSubmit,
    // register,
    watch,
    errors,
    control,
    categories,
    isSending,
  };
};

export default UpdateProjectController;
