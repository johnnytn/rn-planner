import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { PlusCircleIcon } from "react-native-heroicons/outline";

interface ButtonOpacityProps {
  action: () => void;
  text: string;
  icon?: JSX.Element;
  bgColor?: string;
  isLoading?: boolean;
}

const ButtonOpacityView = ({
  action,
  text,
  icon,
  bgColor: color = "bg-green-700",
  isLoading,
}: ButtonOpacityProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={action}
      className={`ml-2 mt-3 p-2 items-center justify-center ${color} rounded-full shadow`}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View className={`flex flex-row space-x-3 `}>
          <Text className="text-white font-semibold text-base">{text}</Text>
          {icon}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ButtonOpacityView;
