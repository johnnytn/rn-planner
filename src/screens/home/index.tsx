import { Text } from "react-native"
import EditScreenInfo from "../../components/EditScreenInfo"
import { View } from "../../components/Themed"
// import { RootTabScreenProps } from "../../../types"
import { homeStyles } from "./styles"
import { PAGES } from "../../commons/types"
import ExpenseListView from "./Expenses"
import { RootTabScreenProps } from "../../commons/types/navigation.types"
// import { RootTabScreenProps } from "commons/types/navigation.types"

const HomeView = ({ navigation }: RootTabScreenProps<PAGES.HOME>) => {
  return (
    <View style={homeStyles.container}>
      {/*  <Text className="text-red-500">Tab One!</Text>
      <View
        style={homeStyles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/home/index.tsx" /> */}
      <ExpenseListView />
    </View>
  )
}

export default HomeView
