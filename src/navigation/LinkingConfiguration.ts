/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native"
import { RootStackParamList } from "commons/types/navigation.types"
import * as Linking from "expo-linking"

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Projects: {
        screens: {
          Project: {
            screens: {
              // todo: review
              ProjectScreen: "one1",
            },
          },
          Report: {
            screens: {
              ReportScreen: "two*",
            },
          },
        },
      },
      NewProject: {
        screens: {
          // todo: review
          NewProjectScreen: "one1",
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
}

export default linking
