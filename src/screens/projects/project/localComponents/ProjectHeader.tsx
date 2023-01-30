import { useNavigation } from "@react-navigation/native";
import { ChulaNarakText, TitilliumText } from "components/StyledText";

import { Text, View } from "react-native";
import {
  ArrowLeftIcon,
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
    <View className="bg-primary pt-7">
      <View className="flex-row items-center mx-4 space-x-6">
        <ArrowLeftIcon
          size={25}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <View className="flex-1 ">
          <TitilliumText className="text-lg text-white">{name}</TitilliumText>
          <ChulaNarakText className="text-slate-100">
            {description}
            {/* <ChevronDownIcon size={15} color="#1b8977" /> */}
          </ChulaNarakText>
        </View>
        {/* todo: add edit + delete */}
        <PencilIcon size={25} color="orange" onPress={onClickUpdate} />
        {/* <Bars3Icon size={35} color="#000000" /> */}
      </View>
    </View>
  );
};

export default ProjectHeaderView;
