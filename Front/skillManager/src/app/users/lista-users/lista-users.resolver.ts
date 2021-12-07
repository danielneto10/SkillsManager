import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, of } from 'rxjs';
import { catchError, delay, filter, finalize, tap } from 'rxjs/operators';
import { Users } from '../models/user';
import { ListaUsersService } from './lista-users.service';

@Injectable({
  providedIn: 'root',
})
export class ListaUsersResolver implements Resolve<Users | null> {
  constructor(
    private listaUsersService: ListaUsersService,
    private spinner: NgxSpinnerService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Users | null> {
    this.spinner.show();
    return this.listaUsersService
      .getAllUsers()
      .pipe(
        finalize(() => {
          this.spinner.hide();
        })
      )
      .pipe(
        catchError((err) => {
          this.spinner.hide();
          return of(null);
        })
      );
  }
}
