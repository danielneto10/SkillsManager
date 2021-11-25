import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { Users } from '../models/user';
import { ListaUsersService } from './lista-users.service';

@Injectable({
  providedIn: 'root',
})
export class ListaUsersResolver implements Resolve<Users> {
  constructor(
    private listaUsersService: ListaUsersService,
    private spinner: NgxSpinnerService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Users> {
    return this.listaUsersService.getAllUsers();
  }
}
