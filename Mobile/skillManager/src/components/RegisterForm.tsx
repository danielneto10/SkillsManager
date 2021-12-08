import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <TextInput
        style={styles.input}
        mode="flat"
        label="Name"
        value={name}
        onChangeText={(name) => setName(name)}
        activeUnderlineColor="#0C52B3"
        left={<TextInput.Icon name="account" />}
      />
      <TextInput
        style={styles.input}
        mode="flat"
        label="User Name"
        value={userName}
        onChangeText={(userName) => setUserName(userName)}
        activeUnderlineColor="#0C52B3"
        left={<TextInput.Icon name="account-circle" />}
      />
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
        Cadastrar
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
