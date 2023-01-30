import { ProjectModel } from "commons/types/project.types";
import { initialValues, NewProjectFormModel } from "../newProject/utils";

export const getInitialValues = (
  project: ProjectModel | undefined
): NewProjectFormModel => {
  if (!project) return initialValues;
  return {
    name: project.name,
    description: project.description,
    categories: project.categories,
  };
};
