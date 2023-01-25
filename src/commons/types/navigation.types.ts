import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

interface ProjectScreen {
  [key: string]: string;
}

export type RootTabParamList = {
  ProjectInfo: undefined /* ProjectScreen; */;
  Report: undefined;
  // Modal: undefined;
};

// TODO: check
export type RootStackParamList = {
  Projects: NavigatorScreenParams<RootTabParamList> | undefined;
  NewProject: undefined;
  Project: undefined; // ProjectScreen;
  Home: undefined;
  Modal: any;
  NotFound: undefined;
};

/* Screen prop types */
export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
