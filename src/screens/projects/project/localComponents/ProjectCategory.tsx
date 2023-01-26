import { CategoryModel } from "commons/types/project.types";
import FormInputInlineView from "components/FormInputInline";

import { Control, FieldErrorsImpl } from "react-hook-form";
import { Text, View } from "react-native";

interface ProjectCategoryProps {
  category: CategoryModel;
  control: Control<any>;
  errors: Partial<FieldErrorsImpl>;
}

const ProjectCategoryView = ({
  category,
  control,
  errors,
}: ProjectCategoryProps) => {
  return (
    <View className="py-2">
      <View className="p-4 bg-white border-solid rounded-md shadow-sm">
        <Text className="font-bold">{category.name}</Text>
        {category.subcategories.map((sub, index) => {
          return (
            <View key={index} className="pt-1 pl-2 flex flex-row space-x-2">
              {/* TODO: add money mask */}
              <FormInputInlineView
                field={`${category.name}.${sub.name}`}
                name={sub.name}
                /* placeholder="0" */
                control={control}
                errors={errors}
                keyboardType="numeric"
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ProjectCategoryView;
