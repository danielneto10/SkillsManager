import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill, Skills } from '../../models/skill';

const URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private http: HttpClient) {}

  getAllSkills(): Observable<Skills> {
    return this.http.get<Skills>(`${URL}/skills`);
  }

  saveSkills(skills: Skills, userName: string) {
    return this.http.post(`${URL}/users/${userName}/skills`, skills);
  }
}
