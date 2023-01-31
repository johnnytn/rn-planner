import { ProjectModel } from "commons/types/project.types";

import React from "react";
import { View } from "react-native";
import ProjectCardView from "./ProjectCard";

// import { SparklesIcon as SparklesIconMini } from "react-native-heroicons/mini";

interface ProjectListProps {
  projects: ProjectModel[];
  onClick: (project: ProjectModel) => void;
}

const ProjectListView = ({ projects, onClick }: ProjectListProps) => {
  /* todo: add better way to remove  */
  {
    const x = "x";
    return (
      <View className="items-center">
        {projects.length
          ? projects.map((project: any, index) => {
              // console.log(project.data());
              return (
                <ProjectCardView
                  key={project.id}
                  project={project}
                  onClick={onClick}
                />
              );
            })
          : null}
      </View>
    );
  }
};

export default ProjectListView;
