import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./modules/navigation/rootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";


const App = () => {

  return (
   <SafeAreaProvider>
       <RootNavigator/>
   </SafeAreaProvider>

  )
};

export default App;
