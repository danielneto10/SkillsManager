import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Users } from '../models/user';
import { ListaUsersService } from './lista-users.service';

@Injectable({
  providedIn: 'root',
})
export class ListaUsersResolver implements Resolve<Users> {
  constructor(private listaUsersService: ListaUsersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Users> {
    return this.listaUsersService.getAllUsers();
  }
}
