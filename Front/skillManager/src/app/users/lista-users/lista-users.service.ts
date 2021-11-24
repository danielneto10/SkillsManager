import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, Users } from '../models/user';

const URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ListaUsersService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<Users> {
    return this.http.get<Users>(`${URL}/users`);
  }

  getOneUser(userName: string): Observable<User> {
    return this.http.get<User>(`${URL}/users/${userName}`);
  }
}
