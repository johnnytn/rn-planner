import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootTabParamList = {
  Project: undefined
  Report: undefined
}

// TODO: check
export type RootStackParamList = {
  Projects: NavigatorScreenParams<RootTabParamList> | undefined
  NewProject: undefined
  Project: undefined
  Home: undefined
  Modal: undefined
  NotFound: undefined
}

/* Screen prop types */
export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >
