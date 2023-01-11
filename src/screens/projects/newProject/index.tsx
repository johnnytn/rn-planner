import { View } from "components/Themed";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

import FormInputView from "components/FormInput";
import NewProjectController from "./controller";
import { Controller } from "react-hook-form";
// TODO: add controller

const NewProjectScreen = () => {
  const { control, handleSubmit, onSubmit, errors } = NewProjectController();

  return (
    <SafeAreaView>
      <View>
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
    </SafeAreaView>
  );
};

export default NewProjectScreen;
