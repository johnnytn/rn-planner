import { View } from "components/Themed";
import { PAGES } from "commons/types";
// import ExpenseListView from "./Expenses"
import { RootTabScreenProps } from "commons/types/navigation.types";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import FormInputView from "components/FormInput";
import {
  initialValues,
  NewProjectFormModel,
  projectFormValidationSchema,
} from "./utils";
import { useEffect } from "react";
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

  /*  useEffect(() => {
    register("name");
    register("description");
  }, [register]); */

  return {
    register,
    handleSubmit,
    onSubmit,
    watch,
    errors,
    control,
  };
};

export default NewProjectController;
