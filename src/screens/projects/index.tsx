import { Button, SafeAreaView, ScrollView, View } from "react-native";

import { PAGES } from "commons/types";
import ProjectListView from "./localComponents/ProjectList";

import ProjectHeaderView from "./localComponents/ProjectHeader";

import ProjectCardController from "./controller";

// TODO: add localization
const ProjectsScreen = () => {
  const { isLoading, projects, isSending, navigation, handleOnDelete } =
    ProjectCardController();

  return (
    <SafeAreaView>
      <ProjectHeaderView />

      {isLoading ? null : (
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
          /* horizontal */
          showsVerticalScrollIndicator={false}
        >
          <View className="py-2">
            <Button
              title="Create a new project"
              onPress={() => navigation.navigate(PAGES.NEW_PROJECT)}
            />
          </View>
          {/*btn  Create a new project? */}
          <ProjectListView projects={projects} onDelete={handleOnDelete} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default ProjectsScreen;
