import { View } from "components/Themed";
import { Text, TextInput } from "react-native";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

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
  numberOfLines = 0,
}: FormInputProps) => {
  return (
    <View className="md:flex md:items-center m-2">
      <View className="md:w-1/3">
        <Text className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
          {name}
        </Text>
      </View>
      <View className="md:w-2/3">
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
              multiline={numberOfLines > 0}
              numberOfLines={numberOfLines}
            />
          )}
          name={field}
        />

        <ErrorMessage
          errors={errors}
          name={field}
          as={<Text className="text-red-600" />}
        />
      </View>
    </View>
  );
};

export default FormInputView;
