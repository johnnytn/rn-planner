import { View } from "components/Themed";
import { Button, SafeAreaView, ScrollView } from "react-native";

import FormInputView from "components/FormInput";
import NewProjectController from "./controller";
import NewProjectCategoriesView from "../localComponents/NewProjectCategories";

const NewProjectScreen = () => {
  const {
    control,
    errors,
    categories,
    handleSubmit,
    onSubmit,
    addCategory,
    removeCategory,
    addSubCategory,
    removeSubCategory,
  } = NewProjectController();

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="py-5">
          <FormInputView
            field="name"
            name="Nome"
            placeholder="Dê um nome para o seu projeto"
            control={control}
            errors={errors}
          />

          <FormInputView
            field="description"
            name="Descrição"
            placeholder="Adicione uma descrição para seu projeto (opcional)"
            control={control}
            errors={errors}
            numberOfLines={4}
          />

          <NewProjectCategoriesView
            categories={categories}
            control={control}
            errors={errors}
            removeCategory={removeCategory}
            addCategory={addCategory}
            addSubCategory={addSubCategory}
            removeSubCategory={removeSubCategory}
          />

          <View className="p-2 ">
            <Button
              title="Salvar"
              onPress={handleSubmit(onSubmit)}
              color="purple"
            />
            {/* <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.text}>Salvar</Text>
          </Pressable> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewProjectScreen;
