import ProjectController from "./controller";
import { ScrollView, View } from "react-native";

import ProjectHeaderView from "./localComponents/ProjectHeader";
import ProjectCategoryView from "./localComponents/ProjectCategory";

import { CheckIcon } from "react-native-heroicons/outline";
import FloatButtonOpacityView from "components/FloatButtonOpacity";
import { BaseSafeAreaView } from "components/BaseSafeArea";
import { ChulaNarakText } from "components/StyledText";
import BlankProjectScreen from "components/BlankScreen";

const ProjectScreen = () => {
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

  if (!project) {
    return <BlankProjectScreen text="Project not found" />;
  }

  if (isLoading) {
    return <BlankProjectScreen text="  Loading ...." />;
  }
  /* TODO: ADD formatter */
  return (
    <BaseSafeAreaView>
      <ProjectHeaderView
        name={project?.name}
        description={project?.description}
        onClickUpdate={onClickUpdate}
      />

      <ScrollView>
        <View className="p-3 flex-row space-x-2 bg-white shadow">
          <ChulaNarakText className="text-lg">Total:</ChulaNarakText>
          <ChulaNarakText className="text-lg text-red-600">
            {projectTotal}
          </ChulaNarakText>
        </View>
        {/*  */}
        <View className="px-3 py-2">
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
        bgColor="bg-orange-400"
        isLoading={isSending}
        action={handleSubmit(onSubmit)}
        icon={<CheckIcon size={30} color="white" />}
      />
    </BaseSafeAreaView>
  );
};

export default ProjectScreen;
