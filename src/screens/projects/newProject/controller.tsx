import { View } from "components/Themed";
import { PAGES } from "commons/types";
// import ExpenseListView from "./Expenses"
import { RootTabScreenProps } from "commons/types/navigation.types";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";

import { useFieldArray, useForm } from "react-hook-form";
import FormInputView from "components/FormInput";
import {
  defaultCategory,
  defaultSubCategory,
  initialValues,
  NewProjectFormModel,
  projectFormValidationSchema,
} from "./utils";
import { useEffect } from "react";
import { ICategory } from "commons/types/project.types";
// TODO: add controller

const NewProjectController = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(projectFormValidationSchema),
  });

  const onSubmit = (data: NewProjectFormModel) => {
    console.log({ data });
    console.log("----------------");
  };

  const {
    fields: categories,
    append,
    update,
    remove,
  } = useFieldArray({
    name: "categories",
    control,
  });

  const addCategory = () => {
    append(defaultCategory);
  };

  const removeCategory = (index: number) => {
    remove(index);
  };

  const addSubCategory = (catIndex: number, category: ICategory) => {
    console.log("------------------add");
    console.log({ catIndex });
    console.log({ category });
    console.log("------------------");
    const updatedCategory = {
      ...category,
      subcategories: [...category.subcategories, defaultSubCategory],
    };
    update(catIndex, updatedCategory);
  };

  const removeSubCategory = (
    catIndex: number,
    category: ICategory,
    subcatIndex: number
  ) => {
    console.log("------------------remove");
    console.log({ catIndex });
    console.log({ category });
    console.log("------------------");

    const updatedCategory = {
      ...category,
      subcategories: category.subcategories.filter(
        (sub, index) => index !== subcatIndex
      ),
    };
    update(catIndex, updatedCategory);
  };

  useEffect(() => {
    /* register("name");
    register("description"); */
    console.log("--------------------getValues");
    console.log(getValues());
    console.log("--------------------getValues");
  }, [register]);

  useEffect(() => {
    // this callback will run once on initial render and
    // then again whenever `fields` is updated
    console.log("categories----", categories);
    console.log(categories);
    console.log("categories----");
  }, [categories]);

  return {
    addCategory,
    removeCategory,
    addSubCategory,
    removeSubCategory,
    handleSubmit,
    onSubmit,
    register,
    watch,
    errors,
    control,
    categories,
  };
};

export default NewProjectController;
