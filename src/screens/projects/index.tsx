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
import ButtonOpacityView from "components/ButtonOpacity";
import { BaseSafeAreaView } from "components/BaseSafeArea";

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
    <BaseSafeAreaView>
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
            <ButtonOpacityView
              action={() => navigation.navigate(PAGES.NEW_PROJECT)}
              text="Novo projeto"
              bgColor="bg-orange-400"
            />
            {/* <Button
              title="Novo projeto"
              onPress={() => navigation.navigate(PAGES.NEW_PROJECT)}
              color="orange"
            /> */}
          </View>
          {/*btn  Create a new project? */}
          <ProjectListView projects={projects} onClick={handleOnClickProject} />
        </ScrollView>
      )}
    </BaseSafeAreaView>
  );
};

export default ProjectsScreen;
