import { View } from "components/Themed"
import { homeStyles } from "./styles"
import { PAGES } from "commons/types"
// import ExpenseListView from "./Expenses"
import { RootTabScreenProps } from "commons/types/navigation.types"

const ProjectScreen = ({ navigation }: RootTabScreenProps<PAGES.PROJECT>) => {
  return (
    <View style={homeStyles.container}>
      {/*  <Text className="text-red-500">Tab One!</Text>
      <View
        style={homeStyles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/home/index.tsx" /> */}
      {/* <ExpenseListView /> */}
    </View>
  )
}

export default ProjectScreen