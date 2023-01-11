import { REQUIRED_FIELD } from "commons/constants/form.message.constants";
import { z } from "zod";

export const initialValues = {
  name: "",
  description: "",
};

export interface NewProjectFormModel {
  name: string;
  description: string;
  [key: string]: unknown;
}

export const projectFormValidationSchema = z.object({
  name: z.string().min(1, { message: REQUIRED_FIELD }),
  // name: z.string({ required_error: REQUIRED_FIELD }),
  description: z.string(),
});
