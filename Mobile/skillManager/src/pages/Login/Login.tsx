import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (<>
        <TextInput mode="outlined" style={styles.inputForm} label="Email" value={email} onChangeText={email => setEmail(email)} />
        <TextInput mode="outlined" style={styles.inputForm} label="Password" value={password} onChangeText={password => setEmail(password)} />
        <Button style={styles.botao} color="#fff" >Entrar</Button>
    </>);
}

const styles = StyleSheet.create({
    inputForm: {
        margin: 12,
    },
    botao: {
        margin: 12,
        backgroundColor: "#0A2A57",
    }
})