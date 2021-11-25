import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUser } from '../autenticacao/user/auth-user';
import { AuthUserService } from '../autenticacao/user/auth-user.service';

@Injectable({
  providedIn: 'root',
})
export class IsOwnerGuard implements CanActivateChild {
  user!: AuthUser;

  constructor(
    private router: Router,
    private authUserService: AuthUserService
  ) {
    authUserService
      .getAuthUser()
      .subscribe((authUser) => (this.user = authUser));
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userNameRoute = childRoute.parent?.parent?.params.userName;

    if (userNameRoute !== this.user.userName) {
      this.router.navigate(['/users']);
      return false;
    }
    return true;
  }
}
