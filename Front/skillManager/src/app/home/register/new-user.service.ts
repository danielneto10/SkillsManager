import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterUser } from './register-user';

const URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private http: HttpClient) {}

  register(newUser: RegisterUser) {
    return this.http.post(`${URL}/users/register`, newUser);
  }

  verifyDuplicatedUser(userName: string) {
    return this.http.get(`${URL}/users/${userName}`);
  }

  verifyDuplicatedEmail(email: string) {
    return this.http.get(`${URL}/users/exists/email/${email}`);
  }
}
