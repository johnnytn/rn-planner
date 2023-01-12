import { zodResolver } from "@hookform/resolvers/zod";

import { useFieldArray, useForm } from "react-hook-form";

import {
  defaultCategory,
  defaultSubCategory,
  initialValues,
  NewProjectFormModel,
  projectFormValidationSchema,
} from "./utils";
import { ICategory } from "commons/types/project.types";
// TODO: add controller

const NewProjectController = () => {
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

  const onSubmit = (data: NewProjectFormModel) => {
    const { categories, name, description } = getValues();

    /*  console.log("{ formData }");
    console.log({ name });
    console.log({ description }); */
    console.log("--------------------");
    for (const category of categories) {
      console.log({ category });
      console.log(category.name);
      // console.log(category.subcategories[0]);
      for (const subcategory of category.subcategories) {
        console.log({ subcategory });
        console.log("--------------------category");
      }
      console.log("--------------------category");
    }
    // console.log(formData["subcategories"]);
    //
    /* {"categories": [{"0": [Object], "name": "Casa", "subcategories": [Array]}], "description": "", "name": "Hjj"} */
    // console.log(getValues());
    /* console.log("--------------------parameters");
    // TTODO: here
    console.log({ parameters });
    console.log(parameters[0]);
    console.log(parameters[0]["subcategories"]);
    console.log("----------------parameters"); */
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

  /* useEffect(() => {
    // this callback will run once on initial render and
    // then again whenever `fields` is updated
    console.log("categories----", categories);
    console.log(categories);
    console.log("categories----");
  }, [categories]); */

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
  };
};

export default NewProjectController;
