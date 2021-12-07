import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/users/models/user';
import { environment } from 'src/environments/environment';

const URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AdminUsersService {
  constructor(private http: HttpClient) {}

  createUser(user: User) {
    return this.http.post(`${URL}/users/register`, user);
  }

  updateUser(user: User, userName: string) {
    return this.http.put(`${URL}/users/${userName}`, user);
  }

  deleteUser(userName: string) {
    return this.http.delete(`${URL}/users/${userName}`);
  }
}
