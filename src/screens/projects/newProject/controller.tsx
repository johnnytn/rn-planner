import { zodResolver } from "@hookform/resolvers/zod";

import { useFieldArray, useForm } from "react-hook-form";

import {
  defaultCategory,
  defaultSubCategory,
  initialValues,
  NewProjectFormModel,
  projectFormValidationSchema,
} from "./utils";
import { CategoryModel } from "commons/types/project.types";
import ProjectService from "services/project.service";
import useToast from "hooks/useToast";
import { PAGES } from "commons/types";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
// TODO: add controller

const NewProjectController = () => {
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
    defaultValues: initialValues,
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
      const { categories, name, description } = getValues();
      const payload = {
        categories,
        name,
        description,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setIsSending(true);
      await ProjectService.create(payload);
      toastController.open("Projeto criado com sucesso");
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

export default NewProjectController;
