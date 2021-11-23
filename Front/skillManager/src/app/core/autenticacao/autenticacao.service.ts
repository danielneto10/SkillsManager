import { LoginUser } from './../../home/login/login-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import { AuthUserService } from './user/auth-user.service';

const URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private http: HttpClient,
    private authUserService: AuthUserService
  ) {}

  login(user: LoginUser) {
    return this.http
      .post(`${URL}/users/login`, user)
      .pipe(tap((res: any) => this.authUserService.saveToken(res.token)));
  }
}
