import React from "react";
import { KeyboardAvoidingView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BaseScreen({ children }: JSX.ElementChildrenAttribute) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar></StatusBar>
      <KeyboardAvoidingView style={{ flex: 1, justifyContent: "center" }}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#15263D",
  },
});
