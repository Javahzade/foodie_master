import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./authNavigator";


const RootNavigator =()=> {
return(
  <NavigationContainer>
      <AuthNavigator/>
  </NavigationContainer>
)
}
export default RootNavigator