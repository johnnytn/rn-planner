import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import useToast from "hooks/useToast";
import ProjectService from "services/project.service";
import { useNavigation } from "@react-navigation/native";
import { ProjectModel } from "commons/types/project.types";
import { PAGES } from "commons/types";
import { useConfiguration } from "contexts/configuration";

const ProjectsController = () => {
  const navigation = useNavigation();
  const toastController = useToast();
  const { setActiveProject } = useConfiguration();

  const [projects, setProjects] = useState<ProjectModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const fetchProjects = useCallback(async () => {
    const data = await ProjectService.getMany();
    setIsLoading(false);
    setProjects(data);
  }, []);

  const handleRefresh = React.useCallback(() => {
    console.log("refreshing??");
    setIsLoading(true);
    fetchProjects();
  }, []);

  const handleOnDelete = async (id: string) => {
    try {
      setIsSending(true);
      await ProjectService.delete(id);
      toastController.open("Projeto removido com sucesso");
      setIsLoading(true);
      // fetchProjects();
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

  useEffect(() => {
    if (isLoading) {
      fetchProjects();
    }
  }, [isLoading]);

  return {
    handleOnDelete,
    handleOnClickProject,
    handleRefresh,
    isLoading,
    isSending,
    projects,
    navigation,
  };
};

export default ProjectsController;
