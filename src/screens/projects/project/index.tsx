import { homeStyles } from "./styles";
import { PAGES } from "commons/types";
// import ExpenseListView from "./Expenses"
import { RootTabScreenProps } from "commons/types/navigation.types";
import ProjectController from "./controller";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProjectHeaderView from "./localComponents/ProjectHeader";
import ProjectCategoryView from "./localComponents/ProjectCategory";
import ButtonOpacityView from "components/ButtonOpacity";

const ProjectScreen = (props: RootTabScreenProps<PAGES.PROJECT_INFO>) => {
  const { handleSubmit, onSubmit, project, errors, control, isSending } =
    ProjectController();

  if (!project) {
    return <Text className="text-red-500">Project not found</Text>;
  }

  return (
    <SafeAreaView>
      <ProjectHeaderView
        name={project?.name}
        description={project?.description}
      />
      <View className="px-3 py-2">
        {/* <Text className="text-red-500">{project?.name}</Text> */}
        {/*  <View className="py-2  ">
          <Text className="text-gray-500">{project?.description}</Text>
        </View> */}
        <View className="px-3 py-2">
          {project?.categories.map((cat, index) => {
            return (
              <ProjectCategoryView
                key={index}
                category={cat}
                errors={errors}
                control={control}
              />
            );
          })}
        </View>
        {/* <Text className="text-red-500">{project?.categories[1].name}- end ?</Text> */}
        {/* <EditScreenInfo path="/screens/home/index.tsx" />  */}
        <ButtonOpacityView
          bgColor="bg-purple-600"
          text="Salvar"
          isLoading={isSending}
          action={handleSubmit(onSubmit)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProjectScreen;
