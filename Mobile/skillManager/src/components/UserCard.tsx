import React from "react";
import { FlatList, View } from "react-native";
import { Badge, Button, Card, Title } from "react-native-paper";
import { User } from "../models/User";

export default function UserCard({ name, skills }: User) {
  return (
    <Card style={{ marginVertical: 16 }}>
      <Card.Title title={name} />
      <Card.Content>
        <Title>Skills</Title>
        <FlatList
          horizontal={true}
          data={skills}
          renderItem={({ item }) => {
            return (
              <Badge
                size={30}
                style={{ marginEnd: 6, backgroundColor: "#223754" }}
              >
                {item.name}
              </Badge>
            );
          }}
        />
      </Card.Content>
      <Card.Actions>
        <Button
          mode="contained"
          style={{ width: "100%" }}
          color="#0C52B3"
          onPress={() => {}}
        >
          Ver Perfil
        </Button>
      </Card.Actions>
    </Card>
  );
}
