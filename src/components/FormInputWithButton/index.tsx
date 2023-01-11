import { View } from "components/Themed";
import { Button, Pressable, Text, TextInput } from "react-native";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { MinusCircleIcon } from "react-native-heroicons/outline";

interface FormInputProps {
  control: Control<any>;
  errors: Partial<FieldErrorsImpl>;
  numberOfLines?: number;
  placeholder: string;
  field: string;
  name: string;
  //key: number;
  showAction?: boolean;
  action: () => void;
}

const FormInputWithButtonView = ({
  action,
  // key,
  control,
  field,
  name,
  errors,
  placeholder,
  numberOfLines = 1,
  showAction = true,
}: FormInputProps) => {
  return (
    <View className="md:flex md:items-center m-2">
      <View className="md:w-1/3">
        <Text className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
          {name}
        </Text>
      </View>
      <View className="md:w-2/3 flex-row">
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

        {/* <Button title="x" onPress={action} /> */}

        <Pressable
          onPress={action}
          disabled={!showAction}
          className="ml-2 mt-3 h-5 w-5"
        >
          <MinusCircleIcon color={showAction ? "red" : "gray"} size={20} />
        </Pressable>

        {/* <Button
          icon={<MinusIcon color="green" size={20} />}
          title="Button with icon component"
          onPress={action}
        /> */}
        <ErrorMessage
          errors={errors}
          name={field}
          as={<Text className="text-red-600" />}
        />
      </View>
    </View>
  );
};

export default FormInputWithButtonView;
