// src/components/ProjectCard/index.tsx
// import ProjectCardView from "../../../components/ProjectCard"
import { IProject } from "commons/types/project.types"
import ProjectCardView from "components/ProjectCard"
import React from "react"
import { useLayoutEffect } from "react"
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"

// import { SparklesIcon as SparklesIconMini } from "react-native-heroicons/mini";

const projects: IProject[] = [
  {
    id: "1",
    name: "teste",
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "teste 2",
    updatedAt: new Date(),
  },
]

const ProjectsView = () => {
  return (
    <View>
      {projects.length
        ? projects.map((project) => {
            return <ProjectCardView project={project} />
          })
        : null}

      {/* <ProjectCardView id="2" name="teste 2" />
      <ProjectCardView id="3" name="bla bla bla bla" /> */}
    </View>
  )
}

export default ProjectsView