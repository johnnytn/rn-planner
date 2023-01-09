import { IProject } from "commons/types/project.types"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { ArrowRightIcon, StarIcon } from "react-native-heroicons/outline"

interface ProjectCardViewProps {
  project: IProject
}

const formatDate = (newDate: Date | undefined) => {
  if (!newDate) return ""
  return newDate.toDateString()
}

const ProjectCardView = ({ project }: ProjectCardViewProps) => {
  /* change for view? */
  return (
    <View className="p-1">
      <TouchableOpacity className="bg-white mr-3 shadow rounded-md">
        {/* <TouchableOpacity className="relative mr-2"> */}
        {/* </TouchableOpacity> */}
        <View className="px-3 pb-4">
          <Text className="font-bold text-lg pt-2 px-2">{project.name}!</Text>

          <View className="flex-row space-x-2 px-2">
            <View className="flex-row space-x-2 px-2">
              <Text className="text-gray-500 text-sm">Ultima atualização</Text>
              <Text className="text-gray-700 text-sm">
                1 {`${formatDate(project.updatedAt)}`}
              </Text>
            </View>
            <View className="flex-row justify-end">
              <ArrowRightIcon color="green" size={20} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ProjectCardView
