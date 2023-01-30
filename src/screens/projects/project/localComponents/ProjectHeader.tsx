import { useNavigation } from "@react-navigation/native";

import { Text, View } from "react-native";
import {
  Bars3Icon,
  ChevronDownIcon,
  PencilIcon,
  UserIcon,
} from "react-native-heroicons/outline";

interface ProjectHeaderProps {
  name: string;
  description: string | undefined;
  onClickUpdate: () => void;
}

const ProjectHeaderView = ({
  name,
  description,
  onClickUpdate,
}: ProjectHeaderProps) => {
  const navigation = useNavigation();

  return (
    <View className="bg-white pt-10">
      <View className="flex-row items-center mx-4 space-x-2">
        {/* TODO: local file way */}
        {/* <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={require("assets/images/favicon.png")}
        /> */}

        {/* <View className="bg-cyan-600 p-[2px] rounded-full  ">
          <View className="bg-gray-300 p-2 rounded-full  ">
            <UserIcon size={25} color="#1b8977" />
          </View>
        </View> */}
        <View className="flex-1">
          <Text className="font-bold text-lg">
            {name}
            {/* <ChevronDownIcon size={15} color="#1b8977" /> */}
          </Text>
          <Text className="text-gray-600">
            {description}
            {/* <ChevronDownIcon size={15} color="#1b8977" /> */}
          </Text>
        </View>
        {/* todo: add edit + delete */}
        <PencilIcon size={25} color="purple" onPress={onClickUpdate} />
        {/* <Bars3Icon size={35} color="#000000" /> */}
      </View>
    </View>
  );
};

export default ProjectHeaderView;
