import ButtonOpacityView from "components/ButtonOpacity";
import { CheckBadgeIcon, CheckIcon } from "react-native-heroicons/outline";
import FloatButtonOpacityView from "components/FloatButtonOpacity";
import { BaseSafeAreaView } from "components/BaseSafeArea";
import { TitilliumText } from "components/StyledText";
import { View } from "react-native";

const BlankProjectScreen = ({ text }: { text: string }) => {
  return (
    <BaseSafeAreaView>
      <View className="px-20 pt-52 items-center">
        <TitilliumText className="text-white text-lg">{text}</TitilliumText>
      </View>
    </BaseSafeAreaView>
  );
};

export default BlankProjectScreen;
