import { View } from "components/Themed";
import { KeyboardTypeOptions, Text, TextInput } from "react-native";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface FormInputProps {
  control: Control<any>;
  errors: Partial<FieldErrorsImpl>;
  numberOfLines?: number;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  field: string;
  name: string;
}

const FormInputInlineView = ({
  control,
  field,
  name,
  errors,
  placeholder,
  numberOfLines = 1,
  keyboardType = "default",
}: FormInputProps) => {
  return (
    <View className="flex flex-row m-2">
      <View className="w-1/3">
        <Text className="block text-gray-500 font-bold md:text-right mb-1">
          {name}:
        </Text>
      </View>
      <View className="w-2/3">
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="bg-gray-200 appearance-none
              border-2 border-gray-200 rounded
              py-2 px-4 text-gray-700 leading-tight
              focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder={placeholder || `${value}`}
              /* TODO: check how to show the value without using placeholder */
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              multiline={numberOfLines > 1}
              numberOfLines={numberOfLines}
              keyboardType={keyboardType}
            />
          )}
          name={field}
        />

        <ErrorMessage
          errors={errors}
          name={field}
          as={<Text className="text-red-600 p-1" />}
        />
      </View>
    </View>
  );
};

export default FormInputInlineView;
