import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const Tab = createMaterialBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: "#104CA1" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: "home" }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{ tabBarIcon: "key" }}
      />
    </Tab.Navigator>
  );
}
