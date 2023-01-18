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

const ProjectCardController = () => {
  const navigation = useNavigation();
  const toastController = useToast();

  const [projects, setProjects] = useState<ProjectModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const fetchProjects = useCallback(async () => {
    const data = await ProjectService.getMany();
    setIsLoading(false);
    setProjects(data);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    if (isLoading) {
      fetchProjects();
    }
  }, [isLoading]);

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

  return {
    handleOnDelete,
    isLoading,
    isSending,
    projects,
    navigation,
  };
};

export default ProjectCardController;
