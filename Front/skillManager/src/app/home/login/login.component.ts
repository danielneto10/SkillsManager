import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AutenticacaoService } from 'src/app/core/autenticacao/autenticacao.service';
import { cssValidator } from 'src/app/utils/cssValidator';
import { LoginUser } from './login-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  cssValidator = cssValidator;

  get f() {
    return this.loginForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private autenticacaoService: AutenticacaoService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    const user = this.loginForm.getRawValue() as LoginUser;
    this.autenticacaoService.login(user).subscribe(
      () => this.toastr.success('Login efetuado com sucesso', 'Entrou'),
      (err) =>
        this.toastr.error('O email/senha estão incorretos', 'Dados inválidos')
    );
  }
}
