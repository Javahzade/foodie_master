import { createStackNavigator } from "@react-navigation/stack"
import SignInView from "../../Views/SignInView";
import SignUpView from "../../Views/SignUpView";


const Stack = createStackNavigator();
const RootNavigator =()=> {
return(
    <Stack.Navigator>
    <Stack.Screen name="SignIn" component={SignInView} />
    <Stack.Screen name="SignUp" component={SignUpView} />
    {/* <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} /> */}
  </Stack.Navigator>
)
}
export default RootNavigator