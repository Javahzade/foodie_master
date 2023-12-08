import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MyInput } from "./components/MyInput";
import SignInView from "./Views/SignInView";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./Modules/navigation/rootNavigator";


const App = () => {

  return (
   
<NavigationContainer>
  <RootNavigator/>
</NavigationContainer>
  )
};

export default App;
