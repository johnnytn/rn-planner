import { useNavigation } from "@react-navigation/native";

import React from "react";
import { useLayoutEffect } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  Bars3Icon,
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { PAGES } from "commons/types";
import ProjectListView from "./localComponents/ProjectList";

const ProjectsScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
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
        <Button
          title="Create a new project"
          onPress={() => navigation.navigate(PAGES.NEW_PROJECT)}
        />
        {/*btn  Create a new project? */}
        <ProjectListView />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProjectsScreen;
