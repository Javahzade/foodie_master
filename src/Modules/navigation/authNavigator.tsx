import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../../views/SignIn';
import SignUp from '../../views/SignUp';

const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
