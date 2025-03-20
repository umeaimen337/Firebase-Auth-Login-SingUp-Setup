import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Import screens (Ensure these files exist in the correct directory)
import GetStarted from "./screens/GetStarted";
import RoleSelection from "./screens/RoleSelection"; // Ensure correct file name
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="RoleSelection" component={RoleSelection} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
