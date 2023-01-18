import { REQUIRED_FIELD } from "commons/constants/form.message.constants";
import {
  CategoryModel,
  ProjectModel,
  SubCategoryModel,
} from "commons/types/project.types";
import { z } from "zod";

export interface NewProjectFormModel extends Omit<ProjectModel, "id"> {}

export const defaultSubCategory: SubCategoryModel = {
  name: "",
};

export const defaultCategory: CategoryModel = {
  name: "",
  subcategories: [defaultSubCategory],
};

export const initialValues: NewProjectFormModel = {
  name: "",
  description: "",
  categories: [defaultCategory],
};

// TODO: check array validation
export const projectFormValidationSchema = z.object({
  name: z.string().min(1, { message: REQUIRED_FIELD }),
  // name: z.string({ required_error: REQUIRED_FIELD }),
  description: z.string().optional(),
  categories: z
    .array(z.object({ name: z.string().min(1, { message: REQUIRED_FIELD }) }))
    .nonempty(),
});
