import { ProjectModel } from "commons/types/project.types";

interface DynamicObject {
  [key: string]: {
    [key: string]: any;
  };
}

export const getInitialValues = (activeProject: ProjectModel | undefined) => {
  const values: DynamicObject = {};
  if (!activeProject) return {};
  activeProject?.categories.forEach((category) => {
    category.subcategories.forEach((subcategories) => {
      /* console.log(`----------------------------------`);
      console.log(`${category.name}.${subcategories.name}`);
      console.log(); */
      if (
        !values[category.name] ||
        !values[category.name][subcategories.name]
      ) {
        values[category.name] = { [subcategories.name]: "0" };
      } else {
        values[category.name][subcategories.name] = "0";
      }
    });
  });
  // console.log({ values });
  return values;
};
