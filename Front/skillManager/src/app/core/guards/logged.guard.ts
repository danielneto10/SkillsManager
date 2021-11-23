import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from '../autenticacao/user/auth-user.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanLoad {
  constructor(
    private authUserService: AuthUserService,
    private router: Router
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authUserService.isLogged()) {
      this.router.navigate(['/users']);
      return false;
    }
    return true;
  }
}
