import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Avatar, List, Text, Title } from "react-native-paper";

import BaseScreen from "../../components/BaseScreen";
import { Skill } from "../../models/Skill";
import { User } from "../../models/User";

export default function Profile({ route }: any) {
  const { name, skills } = route.params as User;
  console.log(skills);
  return (
    <BaseScreen>
      <View style={styles.header}>
        <Avatar.Text style={styles.avatar} size={108} label={name[0]} />
        <Title style={styles.titulo}>{name}</Title>
      </View>
      <View style={styles.body}>
        <Title style={styles.subTitulo}>Sobre</Title>
        <Text style={{ fontSize: 16, color: "#FFF" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          accumsan nisl ligula, sit amet lacinia massa cursus ut. Proin sed
          ullamcorper dolor, sed pharetra lacus. Maecenas in sagittis lectus.{" "}
        </Text>
        <Title style={styles.subTitulo}>Skills</Title>
        <FlatList
          data={skills}
          renderItem={({ item }) => {
            return (
              <List.Item
                style={{
                  backgroundColor: "#0C52B3",
                  borderRadius: 10,
                  marginTop: 8,
                }}
                titleStyle={{ color: "#fff" }}
                title={item.name}
                description={item.descr}
                right={(props) => <List.Icon {...props} icon="code-tags" />}
              />
            );
          }}
        />
      </View>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#0C52B3",
  },
  titulo: {
    color: "#FFF",
    marginTop: 12,
    fontSize: 28,
  },
  body: {
    flex: 1,
    flexDirection: "column",
  },
  subTitulo: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
