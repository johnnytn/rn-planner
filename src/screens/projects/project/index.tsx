import { homeStyles } from "./styles";
import { PAGES } from "commons/types";
// import ExpenseListView from "./Expenses"
import ProjectController from "./controller";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProjectHeaderView from "./localComponents/ProjectHeader";
import ProjectCategoryView from "./localComponents/ProjectCategory";
import ButtonOpacityView from "components/ButtonOpacity";
import { CheckBadgeIcon, CheckIcon } from "react-native-heroicons/outline";
import FloatButtonOpacityView from "components/FloatButtonOpacity";

const ProjectScreen = (/* props: RootTabScreenProps<PAGES.PROJECT_INFO> */) => {
  const {
    handleSubmit,
    onSubmit,
    onClickUpdate,
    project,
    errors,
    control,
    isSending,
    isLoading,
    projectTotal,
  } = ProjectController();

  // TODO create blank screen
  if (!project) {
    return (
      <SafeAreaView>
        <View className="p5">
          <Text className="text-red-500">Project not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (project && isLoading) {
    return (
      <SafeAreaView>
        <View className="p5">
          <Text className="text-red-500">Loading ....</Text>
        </View>
      </SafeAreaView>
    );
  }
  /* TODO: ADD formatter */
  return (
    <SafeAreaView>
      <ProjectHeaderView
        name={project?.name}
        description={project?.description}
        onClickUpdate={onClickUpdate}
      />

      <ScrollView>
        <View className="p-3 flex-row space-x-2 bg-slate-300">
          <Text className=" font-bold">Total:</Text>
          <Text className="font-semibold text-red-600">{projectTotal}</Text>
        </View>
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
          {/* <ButtonOpacityView
          bgColor="bg-purple-600"
          text="Salvar"
          isLoading={isSending}
          action={handleSubmit(onSubmit)}
        /> */}
        </View>
      </ScrollView>
      <FloatButtonOpacityView
        bgColor="bg-green-600"
        isLoading={isSending}
        action={handleSubmit(onSubmit)}
        icon={<CheckIcon size={30} color="white" />}
      />
    </SafeAreaView>
  );
};

export default ProjectScreen;
