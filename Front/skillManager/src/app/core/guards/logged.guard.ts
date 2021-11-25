import { Observable } from 'rxjs';
import { AuthUserService } from '../autenticacao/user/auth-user.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoggedGuard implements CanActivate {
  constructor(
    private router: Router,
    private authUserService: AuthUserService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authUserService.isLogged()) {
      this.router.navigate(['/users']);
      return false;
    }
    return true;
  }
}
