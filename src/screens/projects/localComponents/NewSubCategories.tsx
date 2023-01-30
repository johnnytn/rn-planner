import { CategoryModel } from "commons/types/project.types";
import FormInputWithButtonView from "components/FormInputWithButton";
import { ChulaNarakText, TitilliumText } from "components/StyledText";
import { Text, View } from "components/Themed";
import React from "react";
import { Control, FieldErrorsImpl } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import { PlusCircleIcon } from "react-native-heroicons/outline";

interface NewSubCategoriesProps {
  category: CategoryModel;
  categoryIndex: number;
  control: Control<any>;
  errors: Partial<FieldErrorsImpl>;
  addSubCategory: (catIndex: number) => void;
  removeSubCategory: (
    catIndex: number,
    // category: ICategory,
    subcatIndex: number
  ) => void;
}

const NewSubCategoriesView = (props: NewSubCategoriesProps) => {
  const {
    category,
    categoryIndex,
    control,
    errors,
    removeSubCategory,
    addSubCategory,
  } = props;
  return (
    <View className="pl-5 pr-3 pb-2 bg-gray-800">
      <View className="md:w-1/3 bg-gray-800">
        <ChulaNarakText className="text-white text-lg">
          Nova subcategoria
        </ChulaNarakText>
      </View>
      {category?.subcategories?.map((sub, i) => {
        return (
          <View className="flex-row bg-gray-800" key={i}>
            <FormInputWithButtonView
              field={`categories.${categoryIndex}.subcategories.${i}.name`}
              name="Nome"
              placeholder="Qual vai ser a subcategoria?"
              control={control}
              errors={errors}
              showAction={i > 0}
              action={() => removeSubCategory(categoryIndex, i)}
            />
          </View>
        );
      })}
      <View className="px-2 pb-2 bg-gray-800">
        {/* justify-between */}
        <TouchableOpacity
          onPress={() => addSubCategory(categoryIndex)}
          className="flex flex-row space-x-2 mt-2"
        >
          <TitilliumText className="text-green-700 text-base">
            Adicionar
          </TitilliumText>
          <PlusCircleIcon color="green" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewSubCategoriesView;
