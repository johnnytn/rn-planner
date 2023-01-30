import { useNavigation } from "@react-navigation/native";
import { ChulaNarakText, MonoText, TitilliumText } from "components/StyledText";

import { Text, View } from "react-native";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Bars3Icon,
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/outline";

// TODO: add localization
const HeaderView = ({ children }: any) => {
  const navigation = useNavigation();

  return (
    <View className="bg-primary pt-7">
      <View className="flex-row pb-3 items-center mx-4 space-x-5">
        <ArrowLeftIcon
          size={25}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <View className="flex-1">
          {children}
          {/* <ChulaNarakText className="text-gray-300 text-base">
            Oie!
          </ChulaNarakText>

          <TitilliumText className="text-lg text-slate-100">
            Como vai você?
          </TitilliumText> */}
        </View>
      </View>
    </View>
  );
};

export default HeaderView;
