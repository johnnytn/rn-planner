import {
  Button,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";

import { PAGES } from "commons/types";
import ProjectListView from "./localComponents/ProjectList";

import HomeHeaderView from "./localComponents/HomeHeader";

import ProjectsController from "./controller";

// TODO: add localization
const ProjectsScreen = () => {
  const {
    isLoading,
    projects,
    isSending,
    navigation,
    handleOnClickProject,
    handleRefresh,
  } = ProjectsController();

  return (
    <SafeAreaView>
      {/* <HomeHeaderView /> */}

      {isLoading ? null : (
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
          /* horizontal */
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
          }
        >
          <View className="py-2">
            <Button
              title="Create a new project"
              onPress={() => navigation.navigate(PAGES.NEW_PROJECT)}
            />
          </View>
          {/*btn  Create a new project? */}
          <ProjectListView projects={projects} onClick={handleOnClickProject} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default ProjectsScreen;
