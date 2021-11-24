import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { DetailsUserService } from './details-user.service';

@Injectable({
  providedIn: 'root',
})
export class DetailsUserResolver implements Resolve<User> {
  constructor(private detailsUserService: DetailsUserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    const userName = route.params.userName;
    return this.detailsUserService.getOneUser(userName);
  }
}
