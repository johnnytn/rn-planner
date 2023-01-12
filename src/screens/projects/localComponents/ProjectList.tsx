// src/components/ProjectCard/index.tsx
// import ProjectCardView from "../../../components/ProjectCard"
import { IProject } from "commons/types/project.types";
import ProjectCardView from "components/ProjectCard";
import React from "react";
import { View } from "react-native";

// import { SparklesIcon as SparklesIconMini } from "react-native-heroicons/mini";

const projects: IProject[] = [
  {
    id: "1",
    name: "teste",
    updatedAt: new Date(),
    categories: [],
  },
  {
    id: "2",
    name: "teste 2",
    updatedAt: new Date(),
    categories: [],
  },
];

const ProjectListView = () => {
  return (
    <View>
      {projects.length
        ? projects.map((project) => {
            return <ProjectCardView key={project.id} project={project} />;
          })
        : null}
    </View>
  );
};

export default ProjectListView;
