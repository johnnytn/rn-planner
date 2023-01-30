import { NativeStackScreenProps } from "@react-navigation/native-stack";

// TODO: check
export type RootStackParamList = {
  Projects: undefined; // NavigatorScreenParams<RootTabParamList> | undefined;
  NewProject: undefined;
  UpdateProject: undefined;
  ProjectInfo: undefined; // ProjectScreen;
  Home: undefined;
  Modal: any;
  NotFound: undefined;
};

/* Screen prop types */
export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

type RootTabParamList = {
  ProjectInfo: undefined /* ProjectScreen; */;
  Report: undefined;
};

/* export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >; */
