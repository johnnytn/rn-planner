import { View } from "react-native";

interface DividerProps {
  bgColor?: string;
  heightSize?: string;
}

const Divider = ({
  bgColor = "bg-purple-600",
  heightSize = "0.5",
}: DividerProps) => (
  <View className={`h-${heightSize} w-full mb-2 ${bgColor}`}></View>
);

export default Divider;
