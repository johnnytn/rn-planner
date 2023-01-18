import { ProjectModel } from "commons/types/project.types";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { ArrowRightIcon, StarIcon } from "react-native-heroicons/outline";

interface ProjectCardViewProps {
  project: ProjectModel;
  onDelete: (id: string) => void;
}
// TODO: move to utils
const formatDate = (newDate: Date | undefined) => {
  if (!newDate) return "";
  console.log({ newDate });
  return newDate.toDateString();
};

const ProjectCardView = ({ project, onDelete }: ProjectCardViewProps) => {
  /* change for view? */
  return (
    <View className="p-1">
      {/* <RectButton
        onLongPress={() => Alert.alert("tese")}
        onPress={() => Alert.alert("pressed?")}
      > */}
      <TouchableOpacity
        className="bg-white mr-3 shadow rounded-md"
        onPress={() => onDelete(project.id)}
      >
        <View className="px-3 pb-4">
          <Text className="font-bold text-lg pt-2 px-2">{project.name}!</Text>

          <View className="flex-row space-x-2 px-2 justify-between">
            <View className="flex-row space-x-2 px-2">
              <Text className="text-gray-500 text-sm">Ultima atualização</Text>
              <Text className="text-gray-700 text-sm">
                {`${project.updatedAt}`}
                {`${formatDate(project.updatedAt)}`}
              </Text>
            </View>
            <View className="">
              <ArrowRightIcon color="green" size={20} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {/* </RectButton> */}
    </View>
  );
};

export default ProjectCardView;
