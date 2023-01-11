import { ICategory } from "commons/types/project.types";
import FormInputView from "components/FormInput";
import FormInputWithButtonView from "components/FormInputWithButton";
import { Control, FieldErrorsImpl } from "react-hook-form";
import { Button, View, Text } from "react-native";

interface NewProjectCategoriesProp {
  categories: ICategory[];
  control: Control<any>;
  errors: Partial<FieldErrorsImpl>;
  addCategory: () => void;
  removeCategory: (index: number) => void;
  addSubCategory: (catIndex: number, category: ICategory) => void;
  removeSubCategory: (
    catIndex: number,
    category: ICategory,
    subcatIndex: number
  ) => void;
  /* field: string;
  name: string; */
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
  {
    /* add category */
  }
  {
    /* add sub category */
  }
  return (
    <View className="p-2">
      <View>
        {categories.map((category, index) => {
          return (
            <View className="flex-row items-center align-top">
              <View>
                <FormInputWithButtonView
                  key={index}
                  field={`categories.${index}.name`}
                  name="Nome"
                  placeholder="Adicione o nome da categoria"
                  control={control}
                  errors={errors}
                  showAction={index > 0}
                  action={() => removeCategory(index)}
                />
                {/* <Button title="x" onPress={() => removeCategory(index)} /> */}

                <View className="px-3 pb-2">
                  {category?.subcategories?.map((sub, i) => {
                    return (
                      <View className="flex-row">
                        <FormInputWithButtonView
                          key={i}
                          field={`categories.${index}.${i}.name`}
                          name="Nome"
                          placeholder="Adicione o nome da subcategoria"
                          control={control}
                          errors={errors}
                          showAction={i > 0}
                          action={() => removeSubCategory(index, category, i)}
                        />
                      </View>
                    );
                  })}
                  <View className="px-2 pb-2 divide-x-2">
                    <Button
                      title="add subcat"
                      color="green"
                      onPress={() => addSubCategory(index, category)}
                    />
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>

      <Button title="add cat" color="green" onPress={addCategory} />
    </View>
  );
};

export default NewProjectCategoriesView;
