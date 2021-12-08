import React from "react";
import { FlatList } from "react-native";

import BaseScreen from "../../components/BaseScreen";
import UserCard from "../../components/UserCard";
import { User } from "../../models/User";

const users: Array<User> = [
  {
    id: 1,
    name: "Daniel",
    skills: [
      {
        name: "C#",
      },
      {
        name: "Java",
      },
    ],
  },
  {
    id: 2,
    name: "Rafael",
    skills: [
      {
        name: "C#",
      },
    ],
  },
  {
    id: 3,
    name: "João",
    skills: [
      {
        name: "C#",
      },
    ],
  },
  {
    id: 4,
    name: "Maria",
    skills: [
      {
        name: "C#",
      },
    ],
  },
  {
    id: 5,
    name: "Eduardo",
    skills: [
      {
        name: "C#",
      },
    ],
  },
  {
    id: 6,
    name: "Bruno",
    skills: [
      {
        name: "C#",
      },
    ],
  },
  {
    id: 7,
    name: "Bruna",
    skills: [
      {
        name: "C#",
      },
    ],
  },
];

export default function Home() {
  return (
    <BaseScreen>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return <UserCard {...item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </BaseScreen>
  );
}
