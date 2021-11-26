import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUser } from '../autenticacao/user/auth-user';
import { AuthUserService } from '../autenticacao/user/auth-user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminRoleGuard implements CanLoad {
  user: AuthUser = {};

  constructor(
    private router: Router,
    private authUserService: AuthUserService
  ) {
    authUserService
      .getAuthUser()
      .subscribe((authUser) => (this.user = authUser));
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.user === null || !this.user.admin) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
