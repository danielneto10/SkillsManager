import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BottomNav from "./BottomNav";

const Stack = createStackNavigator();

export default function MainNav() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={BottomNav} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
