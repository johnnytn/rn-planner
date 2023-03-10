import { ProjectModel } from "commons/types/project.types";
import { formatDate } from "commons/utils/formatter";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { ArrowRightIcon, StarIcon } from "react-native-heroicons/outline";

interface ProjectCardViewProps {
  project: ProjectModel;
  // onDelete: (id: string) => void;
  onClick: (project: ProjectModel) => void;
}
// TODO: move to utils
// {"newDate": {"nanoseconds": 925000000, "seconds": 1675089250}}
/* const formatDate = (newDate: Date | undefined) => {
  if (!newDate) return "";
  console.log({ newDate });
  //ADD FORMATTER
  return new Date(newDate).toDateString(); // newDate.toDateString();
};
 */
const ProjectCardView = ({ project, onClick }: ProjectCardViewProps) => {
  /* change for view? */
  return (
    <View className="p-1">
      {/* <RectButton
        onLongPress={() => Alert.alert("tese")}
        onPress={() => Alert.alert("pressed?")}
      > */}
      <TouchableOpacity
        className="bg-white mr-3 shadow rounded-md"
        onPress={() => onClick(project)}
      >
        <View className="px-3 pb-4">
          <Text className="font-bold text-lg pt-2 px-2">{project.name}!</Text>

          <View className="flex-row space-x-2 px-2 justify-between">
            <View className="flex-row space-x-2 px-2">
              <Text className="text-gray-500 text-sm">Ultima atualização</Text>
              <Text className="text-gray-700 text-sm">
                {`${formatDate(project.updatedAt)}`}
              </Text>
            </View>
            <View className="">
              <ArrowRightIcon color="green" size={20} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProjectCardView;
