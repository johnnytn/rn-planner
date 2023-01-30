import { View } from "components/Themed";
import { Button, SafeAreaView, ScrollView } from "react-native";

import FormInputView from "components/FormInput";
import NewProjectController from "./controller";
import NewProjectCategoriesView from "../localComponents/NewProjectCategories";
import ButtonOpacityView from "components/ButtonOpacity";
import Divider from "components/Divider";
import { BaseSafeAreaView } from "components/BaseSafeArea";

const NewProjectScreen = () => {
  const {
    control,
    errors,
    categories,
    isSending,
    handleSubmit,
    onSubmit,
    addCategory,
    removeCategory,
    addSubCategory,
    removeSubCategory,
  } = NewProjectController();

  return (
    <BaseSafeAreaView className="pb-10 px-1">
      <ScrollView className="bg-transparent">
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

        <Divider heightSize="1" />

        <NewProjectCategoriesView
          categories={categories}
          control={control}
          errors={errors}
          removeCategory={removeCategory}
          addCategory={addCategory}
          addSubCategory={addSubCategory}
          removeSubCategory={removeSubCategory}
        />
      </ScrollView>
      <View className="px-2 bg-transparent">
        <ButtonOpacityView
          bgColor="bg-purple-600"
          text="Salvar"
          isLoading={isSending}
          action={handleSubmit(onSubmit)}
        />
      </View>
    </BaseSafeAreaView>
  );
};

export default NewProjectScreen;
