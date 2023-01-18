import { useNavigation } from "@react-navigation/native";

import React, { useEffect } from "react";
import { useLayoutEffect } from "react";
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native";
import {
  Bars3Icon,
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { PAGES } from "commons/types";
import ProjectListView from "./localComponents/ProjectList";
import ProjectService from "services/project.service";
import useToast from "hooks/useToast";

const ProjectsScreen = () => {
  const navigation = useNavigation();
  const toastController = useToast();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  // TODO: add internacionalization

  const openAlert = async () => {
    toastController.open("All Your Base Are Belong To Us");
  };

  const showToastWithGravityAndOffset = () => {
    toastController.open("A wild toast appeared!");
  };

  const fetchProjects = async () => {
    const data = await ProjectService.getMany();
    console.log(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

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
        <View className="py-2">
          <View className="py-1">
            <Button title="show" color="green" onPress={openAlert} />
          </View>
          <View className="p-1">
            <Button
              title="show 2"
              color="green"
              onPress={showToastWithGravityAndOffset}
            />
          </View>
          <Button
            title="Create a new project"
            onPress={() => navigation.navigate(PAGES.NEW_PROJECT)}
          />
        </View>
        {/*btn  Create a new project? */}
        <ProjectListView />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProjectsScreen;
