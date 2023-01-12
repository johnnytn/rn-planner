import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface ButtonOpacityProps {
  action: () => void;
  text: string;
  icon?: JSX.Element;
  bgColor?: string;
}

const ButtonOpacityView = ({
  action,
  text,
  icon,
  bgColor: color = "bg-green-700",
}: ButtonOpacityProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={action}
      className={`flex flex-row space-x-3 ml-2 mt-3 p-2 items-center justify-center ${color} rounded-full shadow`}
    >
      <Text className="text-white font-semibold text-base">{text}</Text>
      {icon}
    </TouchableOpacity>
  );
};

export default ButtonOpacityView;
