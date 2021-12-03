import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login/Login";

const Stack = createStackNavigator();

export default function MainNav() {
    return (<Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>)
}