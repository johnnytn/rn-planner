import { View } from "components/Themed";
import { Text, TextInput } from "react-native";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ChulaNarakText } from "./StyledText";

interface FormInputProps {
  control: Control<any>;
  errors: Partial<FieldErrorsImpl>;
  numberOfLines?: number;
  placeholder: string;
  field: string;
  name: string;
}

const FormInputView = ({
  control,
  field,
  name,
  errors,
  placeholder,
  numberOfLines = 1,
}: FormInputProps) => {
  return (
    <View className="md:flex md:items-center m-2 bg-gray-800">
      <View className="md:w-1/3 bg-transparent">
        <ChulaNarakText className="text-white text-lg mb-1">
          {name}
        </ChulaNarakText>
      </View>
      <View className="md:w-2/3 bg-transparent">
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="bg-gray-200 appearance-none
              border-2 border-gray-200 rounded
              py-2 px-4 text-gray-700 leading-tight
              focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder={placeholder}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              multiline={numberOfLines > 1}
              numberOfLines={numberOfLines}
            />
          )}
          name={field}
        />

        <ErrorMessage
          errors={errors}
          name={field}
          as={<Text className="text-red-500 p-1" />}
        />
      </View>
    </View>
  );
};

export default FormInputView;
