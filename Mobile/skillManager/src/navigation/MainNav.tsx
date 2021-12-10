import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import BottomNav from "./BottomNav";

const Stack = createStackNavigator();

export default function MainNav() {
  return (
    <Stack.Navigator
      initialRouteName="MainHome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Group>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainHome" component={BottomNav} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
