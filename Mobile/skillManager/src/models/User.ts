import { Skill } from "./Skill";

export interface User {
  id: number;
  name: string;
  skills: Array<Skill>;
}
