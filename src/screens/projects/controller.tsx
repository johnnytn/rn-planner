import { useCallback, useMemo, useState } from "react";

import useToast from "hooks/useToast";
import ProjectService, { useProjects } from "services/project.service";
import { useNavigation } from "@react-navigation/native";
import { ProjectModel } from "commons/types/project.types";
import { PAGES } from "commons/types";
import { useConfiguration } from "contexts/configuration";

const ProjectsController = () => {
  const { setActiveProject } = useConfiguration();
  const navigation = useNavigation();
  const toastController = useToast();
  const query = useProjects();

  const [isSending, setIsSending] = useState(false);

  const projects = useMemo(() => {
    // query.data?.forEach((d) => console.log(d));
    return query.data as ProjectModel[];
  }, [query]);

  const handleRefresh = useCallback(() => {
    if (query) {
      query.refetch();
    }
  }, []);

  const handleOnDelete = async (id: string) => {
    try {
      setIsSending(true);
      await ProjectService.delete(id);
      toastController.open("Projeto removido com sucesso");
      setIsSending(true);
      handleRefresh();
    } catch (error) {
      // console.log(error);
      toastController.open("Erro ao remover projeto");
      throw error;
    } finally {
      setIsSending(false);
    }
  };
  const handleOnClickProject = async (project: ProjectModel) => {
    // todo: set active pproject id
    /* console.log("clicked ?", id);
    console.log({ id }); */
    setActiveProject(project);
    // navigation.navigate(PAGES.PROJECT, { id });
    navigation.navigate(PAGES.PROJECT_INFO);
  };

  return {
    handleOnDelete,
    handleOnClickProject,
    handleRefresh,
    isLoading: query.isLoading,
    isSending,
    // query,
    projects,
    navigation,
  };
};

export default ProjectsController;
