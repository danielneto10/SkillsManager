import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from 'src/app/users/models/skill';
import { environment } from 'src/environments/environment';

const URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AdminSkillsService {
  constructor(private http: HttpClient) {}

  createSkill(skill: Skill) {
    return this.http.post(`${URL}/skills`, skill);
  }

  excluirSkill(skillId: number) {
    return this.http.delete(`${URL}/skills/${skillId}`);
  }

  editSkill(skill: Skill, skillId: number) {
    return this.http.put(`${URL}/skills/${skillId}`, skill);
  }
}
