import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../../token/token.service';
import { AuthUser } from './auth-user';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  private userSubject = new BehaviorSubject<AuthUser>(null!);

  constructor(private tokenService: TokenService) {
    if (tokenService.possuiToken()) {
      this.decodeToken();
    }
  }

  private decodeToken() {
    const token = this.tokenService.retornaToken();
    const user = jwtDecode(token) as AuthUser;
    this.userSubject.next(user);
  }

  getAuthUser() {
    return this.userSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.salvaToken(token);
    if (this.tokenService.possuiToken()) this.decodeToken();
  }

  logOut() {
    this.tokenService.excluiToken();
    this.userSubject.next(null!);
  }

  isLogged() {
    return this.tokenService.possuiToken();
  }
}
