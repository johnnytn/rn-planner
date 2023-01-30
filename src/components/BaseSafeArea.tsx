import { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface BaseeSafeAreaProps extends PropsWithChildren {
  className?: string;
}

export const BaseSafeAreaView = (props: BaseeSafeAreaProps) => {
  const { children, className, ...rest } = props;
  return (
    <SafeAreaView {...rest} className={`h-full bg-gray-800 ${className}`}>
      {children}
    </SafeAreaView>
  );
};
