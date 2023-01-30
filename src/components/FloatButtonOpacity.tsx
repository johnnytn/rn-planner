import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { PlusCircleIcon } from "react-native-heroicons/outline";

interface FloatButtonOpacityProps {
  action: () => void;
  icon: JSX.Element;
  bgColor?: string;
  isLoading?: boolean;
}

const FloatButtonOpacityView = ({
  action,
  icon,
  bgColor: color = "bg-green-700",
  isLoading,
}: FloatButtonOpacityProps) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      activeOpacity={0.6}
      onPress={action}
      className={`fixed z-90 bottom-2 -right-3/4 ${color} w-20 h-20
          rounded-full drop-shadow-lg flex justify-center items-center`}
    >
      <View className="">{icon}</View>
    </TouchableOpacity>
  );
};

export default FloatButtonOpacityView;
