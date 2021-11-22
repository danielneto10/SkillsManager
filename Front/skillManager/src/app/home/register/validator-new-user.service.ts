import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap, tap } from 'rxjs/operators';
import { NewUserService } from './new-user.service';

@Injectable({
  providedIn: 'root',
})
export class ValidatorNewUserService {
  constructor(private newUserService: NewUserService) {}

  userExists() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(
          switchMap((userName) =>
            this.newUserService.verifyDuplicatedUser(userName)
          )
        )
        .pipe(map((user) => (user ? { userExist: true } : null)))
        .pipe(first());
    };
  }

  emailExists() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(
          switchMap((email) => this.newUserService.verifyDuplicatedEmail(email))
        )
        .pipe(map((email) => (email ? { emailExist: true } : null)))
        .pipe(first());
    };
  }
}
