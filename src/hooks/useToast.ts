import { ToastAndroid, useColorScheme as _useColorScheme } from "react-native";

// TODO: test react-native-toast-message
export default function useToast() {
  const open = async (
    message: string,
    duration: number = ToastAndroid.LONG,
    position: number = ToastAndroid.BOTTOM
  ) => {
    ToastAndroid.showWithGravityAndOffset(message, duration, position, 25, 50);
  };

  return {
    open,
  };
}
