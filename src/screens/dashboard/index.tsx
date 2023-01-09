import { useNavigation } from "@react-navigation/native"
import ProjectsView from "../dashboard/projects"
import React from "react"
import { useLayoutEffect } from "react"
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import {
  Bars3Icon,
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/outline"

// import { SparklesIcon as SparklesIconMini } from "react-native-heroicons/mini";

const DashboardScreen = () => {
  /* const styles = StyleSheet.create({
    container: {
      marginTop: 5,
    },
    tinyLogo: {
      width: 100,
      height: 100,
    },
    logo: {
      width: 66,
      height: 58,
    },
  }) */

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  // TODO: add internacionalization

  return (
    <SafeAreaView>
      <View className="bg-white pt-10">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          {/* TODO: local file way */}
          {/* <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={require("assets/images/favicon.png")}
        /> */}

          <View className="bg-cyan-600 p-[2px] rounded-full  ">
            <View className="bg-gray-300 p-2 rounded-full  ">
              <UserIcon size={25} color="#1b8977" />
            </View>
          </View>
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-sx">Oie!</Text>

            <Text className="font-bold text-lg">
              Como vai você?
              {/* TODO: center */}
              <ChevronDownIcon size={15} color="#1b8977" />
            </Text>
          </View>
          <Bars3Icon size={35} color="#000000" />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        /* horizontal */
        showsVerticalScrollIndicator={false}
      >
        {/*btn  Create a new project? */}
        <ProjectsView />
      </ScrollView>
    </SafeAreaView>
  )
}

export default DashboardScreen
