import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, Title } from "react-native-paper";
import BaseScreen from "../../components/BaseScreen";
import RegisterForm from "../../components/RegisterForm";

export default function Register() {
  const nav = useNavigation();

  return (
    <BaseScreen>
      <Title style={styles.titulo}>Cadastrar</Title>
      <RegisterForm />
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}
      >
        <Text style={styles.texto}>Já possui uma conta?</Text>
        <Button mode="text" color="#0C52B3" onPress={() => nav.goBack()}>
          Faça o login
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
