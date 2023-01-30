import { View } from "components/Themed";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { MinusCircleIcon } from "react-native-heroicons/outline";

interface FormInputWithButtonProps {
  control: Control<any>;
  errors: Partial<FieldErrorsImpl>;
  numberOfLines?: number;
  placeholder: string;
  field: string;
  name: string;
  showAction?: boolean;
  action?: () => void;
}

const FormInputWithButtonView = ({
  action,
  control,
  field,
  name,
  errors,
  placeholder,
  numberOfLines = 1,
  showAction = true,
}: FormInputWithButtonProps) => {
  return (
    <View className="bg-gray-800 my-2">
      <View className=" bg-transparent">
        <View className="flex-row justify-center bg-transparent">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="w-80 bg-gray-200 appearance-none
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

          <TouchableOpacity
            onPress={action}
            disabled={!showAction}
            className="ml-2 mt-3 h-5 w-5"
          >
            <MinusCircleIcon color={showAction ? "red" : "gray"} size={20} />
          </TouchableOpacity>
        </View>

        <ErrorMessage
          errors={errors}
          name={field}
          as={<Text className="text-red-500 p-2" />}
        />
      </View>
    </View>
  );
};

export default FormInputWithButtonView;
