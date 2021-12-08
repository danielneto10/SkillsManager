import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <TextInput
        style={styles.input}
        mode="flat"
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        activeUnderlineColor="#0C52B3"
        left={<TextInput.Icon name="email" />}
      />
      <TextInput
        style={styles.input}
        mode="flat"
        label="Senha"
        value={password}
        onChangeText={(password) => setPassword(password)}
        activeUnderlineColor="#104CA1"
        left={<TextInput.Icon name="lock" />}
        secureTextEntry={true}
      />
      <Button
        style={styles.botao}
        mode="contained"
        color="#0C52B3"
        onPress={() => {}}
      >
        Entrar
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    fontSize: 28,
    color: "#FFFFFF",
  },
  input: {
    marginVertical: 6,
  },
  botao: {
    marginTop: 6,
    padding: 6,
  },
});
