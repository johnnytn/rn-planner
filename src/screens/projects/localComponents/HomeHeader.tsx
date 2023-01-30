import { useNavigation } from "@react-navigation/native";
import { ChulaNarakText, MonoText, TitilliumText } from "components/StyledText";

import { Text, View } from "react-native";
import {
  Bars3Icon,
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/outline";

// TODO: add localization
const HomeHeaderView = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-primary pt-7">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        {/* TODO: local file way */}
        {/* <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={require("assets/images/favicon.png")}
        /> */}

        <View className="bg-purple-500 p-[2px] rounded-full  ">
          <View className="bg-gray-100 p-2 rounded-full  ">
            <UserIcon size={25} color="purple" />
          </View>
        </View>
        <View className="flex-1">
          <ChulaNarakText className="text-gray-300 text-base">
            Oie!
          </ChulaNarakText>

          <TitilliumText className="text-lg text-slate-100">
            Como vai você?
            {/* TODO: center */}
            {/* <ChevronDownIcon size={15} color="#1b8977" /> */}
          </TitilliumText>
        </View>
        <Bars3Icon size={35} color="white" />
      </View>
    </View>
  );
};

export default HomeHeaderView;
