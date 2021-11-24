import { Pipe, PipeTransform } from '@angular/core';
import { Skill } from '../models/skill';
import { User, Users } from '../models/user';

@Pipe({
  name: 'filterSkill',
})
export class FilterSkillPipe implements PipeTransform {
  transform(users: Users, skillQuery: string): Users {
    if (skillQuery) {
      return users.filter(
        (user: User) =>
          user.skills.filter((skill: Skill) =>
            skill.name.toLowerCase().includes(skillQuery.toLowerCase())
          ).length > 0
      );
    }
    return users;
  }
}
