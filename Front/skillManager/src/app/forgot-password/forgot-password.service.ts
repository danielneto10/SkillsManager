import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResetPassword } from './new-password/reset-password';

const URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  constructor(private http: HttpClient) {}

  sendToken(email: string) {
    return this.http.post(`${URL}/users/reset-password-token`, {
      email: email,
    });
  }

  resetPassword(reset: ResetPassword) {
    return this.http.post(`${URL}/users/reset-password`, reset);
  }
}
