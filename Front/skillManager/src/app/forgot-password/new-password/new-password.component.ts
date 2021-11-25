import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { cssValidator } from 'src/app/utils/cssValidator';
import { ForgotPasswordService } from '../forgot-password.service';
import { ResetPassword } from './reset-password';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
})
export class NewPasswordComponent implements OnInit {
  newPasswordForm!: FormGroup;
  cssValidator = cssValidator;

  get f() {
    return this.newPasswordForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private forgotPasswordService: ForgotPasswordService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.newPasswordForm = this.fb.group({
      token: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  resetPassword() {
    const resetUserPassword =
      this.newPasswordForm.getRawValue() as ResetPassword;
    this.forgotPasswordService
      .resetPassword(resetUserPassword)
      .pipe(
        finalize(() => {
          this.newPasswordForm.reset();
        })
      )
      .subscribe(
        () => {
          this.toastr.success('Senha alterada com sucesso', 'Senha alterada');
          this.router.navigate(['/home', 'login']);
        },
        () => {
          this.toastr.error('Token inválido', 'Error');
        }
      );
  }
}
