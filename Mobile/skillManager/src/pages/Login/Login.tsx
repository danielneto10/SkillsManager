import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text, Title } from "react-native-paper";

import BaseScreen from "../../components/BaseScreen";
import LoginForm from "../../components/LoginForm";

export default function Login() {
  const nav = useNavigation();

  return (
    <BaseScreen>
      <Title style={styles.titulo}>Login</Title>
      <LoginForm />
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}
      >
        <Text style={styles.texto}>Não possui uma conta?</Text>
        <Button
          mode="text"
          color="#0C52B3"
          onPress={() => nav.navigate("Register" as never)}
        >
          Cadastre-se
        </Button>
      </View>
    </BaseScreen>
  );
}
const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    fontSize: 28,
    color: "#FFFFFF",
  },
  imagem: {
    width: "100%",
    height: 160,
  },
  texto: {
    color: "#FFFFFF",
  },
});
