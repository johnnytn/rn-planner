/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

//import { RootStackParamList } from "commons/types/navigation.types"

import { RootStackParamList } from "./src/commons/types/navigation.types"

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
