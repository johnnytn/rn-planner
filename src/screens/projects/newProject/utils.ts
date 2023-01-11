import { REQUIRED_FIELD } from "commons/constants/form.message.constants";
import { ICategory, IProject, ISubCategory } from "commons/types/project.types";
import { z } from "zod";

export interface NewProjectFormModel extends Omit<IProject, "id"> {}

export const defaultSubCategory: ISubCategory = {
  name: "",
};

export const defaultCategory: ICategory = {
  name: "",
  subcategories: [defaultSubCategory],
};

export const initialValues: NewProjectFormModel = {
  name: "",
  description: "",
  categories: [defaultCategory],
};

export const projectFormValidationSchema = z.object({
  name: z.string().min(1, { message: REQUIRED_FIELD }),
  // name: z.string({ required_error: REQUIRED_FIELD }),
  description: z.string(),
});
