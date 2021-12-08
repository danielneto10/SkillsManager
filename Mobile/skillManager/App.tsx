import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import MainNav from "./src/navigation/MainNav";
import { theme } from "./src/styles/theme";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    </PaperProvider>
  );
}
