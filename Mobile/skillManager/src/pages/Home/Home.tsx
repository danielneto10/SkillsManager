import React from "react";
import { FlatList } from "react-native";

import BaseScreen from "../../components/BaseScreen";
import UserCard from "../../components/UserCard";
import { Skill } from "../../models/Skill";
import { User } from "../../models/User";

const users: Array<User> = [
  {
    id: 1,
    name: "Daniel",
    skills: [
      {
        id: 1,
        name: "C#",
        descr: "Back-end",
      },
      {
        id: 2,
        name: "Java",
        descr: "Back-end",
      },
    ],
  },
  {
    id: 2,
    name: "Rafael",
    skills: [
      {
        id: 1,
        name: "C#",
        descr: "Back-end",
      },
    ],
  },
  {
    id: 3,
    name: "João",
    skills: [
      {
        id: 1,
        name: "C#",
        descr: "Back-end",
      },
    ],
  },
  {
    id: 4,
    name: "Maria",
    skills: [
      {
        id: 1,
        name: "C#",
        descr: "Back-end",
      },
    ],
  },
  {
    id: 5,
    name: "Eduardo",
    skills: [
      {
        id: 1,
        name: "C#",
        descr: "Back-end",
      },
    ],
  },
  {
    id: 6,
    name: "Bruno",
    skills: [
      {
        id: 1,
        name: "C#",
        descr: "Back-end",
      },
    ],
  },
  {
    id: 7,
    name: "Bruna",
    skills: [
      {
        id: 1,
        name: "C#",
        descr: "Back-end",
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
        keyExtractor={(item) => item.id?.toString()}
      />
    </BaseScreen>
  );
}
