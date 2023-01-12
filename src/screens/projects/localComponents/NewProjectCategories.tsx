import { ICategory } from "commons/types/project.types";
import ButtonOpacityView from "components/ButtonOpacity";
import Divider from "components/Divider";
import FormInputWithButtonView from "components/FormInputWithButton";
import { Control, FieldErrorsImpl } from "react-hook-form";
import { View, Text, TouchableOpacity } from "react-native";
import { PlusCircleIcon } from "react-native-heroicons/outline";
import NewSubCategoriesView from "./NewSubCategories";

interface NewProjectCategoriesProp {
  categories: ICategory[];
  control: Control<any>;
  errors: Partial<FieldErrorsImpl>;
  addCategory: () => void;
  removeCategory: (index: number) => void;
  addSubCategory: (catIndex: number /* , category: ICategory */) => void;
  removeSubCategory: (
    catIndex: number,
    //category: ICategory,
    subcatIndex: number
  ) => void;
}

const NewProjectCategoriesView = ({
  addCategory,
  removeCategory,
  addSubCategory,
  removeSubCategory,
  categories,
  control,
  errors,
}: NewProjectCategoriesProp) => {
  return (
    <View className="p-2">
      <View>
        {categories.map((category, index) => {
          return (
            <View>
              <View>
                <View className="md:w-1/3">
                  <Text className="block text-gray-500 font-bold">
                    Nova Categoria
                  </Text>
                </View>
                <FormInputWithButtonView
                  key={index}
                  field={`categories.${index}.name`}
                  name="Nome"
                  placeholder="Qual vai ser a categoria?"
                  control={control}
                  errors={errors}
                  showAction={index > 0}
                  action={() => removeCategory(index)}
                />

                <NewSubCategoriesView
                  category={category}
                  categoryIndex={index}
                  control={control}
                  errors={errors}
                  removeSubCategory={removeSubCategory}
                  addSubCategory={addSubCategory}
                />
              </View>
              {/* <View className="h-0.5 w-full mb-2 bg-purple-600"></View> */}
              <Divider bgColor="bg-gray-400" heightSize="0.5" />
            </View>
          );
        })}
      </View>
      <View className="w-1/2">
        <ButtonOpacityView
          text="Nova categoria"
          action={addCategory}
          icon={<PlusCircleIcon color="white" size={20} />}
        />
      </View>
    </View>
  );
};

export default NewProjectCategoriesView;
