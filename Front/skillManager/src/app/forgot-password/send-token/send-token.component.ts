import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { AuthUserService } from 'src/app/core/autenticacao/user/auth-user.service';
import { cssValidator } from 'src/app/utils/cssValidator';
import { ForgotPasswordService } from '../forgot-password.service';

@Component({
  templateUrl: './send-token.component.html',
  styleUrls: ['./send-token.component.scss'],
})
export class SendTokenComponent implements OnInit {
  sendTokenForm!: FormGroup;
  cssValidator = cssValidator;

  get f() {
    return this.sendTokenForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private forgotPasswordService: ForgotPasswordService,
    private router: Router,
    private toastr: ToastrService,
    private authUserService: AuthUserService
  ) {}

  ngOnInit(): void {
    this.sendTokenForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  sendToken() {
    const email = this.sendTokenForm.controls.email?.value;
    this.forgotPasswordService
      .sendToken(email)
      .pipe(
        finalize(() => {
          this.sendTokenForm.reset();
        })
      )
      .subscribe(
        () => {
          this.toastr.success(
            `O token foi enviado ao email ${email}`,
            'Token enviado'
          );
          this.authUserService.logOut();
          this.router.navigate(['/sendToken', 'new-password']);
        },
        () =>
          this.toastr.error('Ocorreu um erro durante o envio do token', 'Error')
      );
  }
}
