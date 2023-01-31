/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

// todo: move
import ModalScreen from "screens/ModalScreen";
import NotFoundScreen from "screens/NotFoundScreen";
import ProjectsScreen from "screens/projects";

import { RootStackParamList } from "commons/types/navigation.types";
import LinkingConfiguration from "./LinkingConfiguration";
import { PAGES } from "commons/types";
import ProjectScreen from "screens/projects/project";
import NewProjectScreen from "screens/projects/newProject";
import UpdateProjectScreen from "screens/projects/updateProject";
import HomeHeaderView from "screens/projects/localComponents/HomeHeader";

import BaseHeaderView from "components/Headers/BaseHeader";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
// TODO: CHECK
const Stack = createNativeStackNavigator<RootStackParamList>();
// const colorScheme = useColorScheme();
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PAGES.PROJECTS}
        component={ProjectsScreen}
        options={{
          /* headerShown: false, */ title: "dash!",
          header(props) {
            return <HomeHeaderView />;
          },
        }}
      />
      <Stack.Screen
        name={PAGES.NEW_PROJECT}
        component={NewProjectScreen}
        options={{
          header(props) {
            return <BaseHeaderView text="Bora criar um projeto?" />;
          },
        }}
      />
      <Stack.Screen
        name={PAGES.UPDATE_PROJECT}
        component={UpdateProjectScreen}
        options={{
          header(props) {
            return <BaseHeaderView text="Bora atualizar?" />;
          },
        }}
      />
      <Stack.Screen
        name={PAGES.PROJECT_INFO}
        component={ProjectScreen}
        options={{ headerShown: false, title: "Info" }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
// const BottomTab = createBottomTabNavigator<RootTabParamList>();

/* function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName={PAGES.PROJECT_INFO}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name={PAGES.PROJECT_INFO}
        component={ProjectScreen}
        options={({ navigation }: RootTabScreenProps<PAGES.PROJECT_INFO>) => ({
          title: PAGES.PROJECT_INFO,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate(PAGES.MODAL)}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name={PAGES.REPORT}
        component={ReportTabScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
} */

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
