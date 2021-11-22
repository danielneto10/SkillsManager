import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { cssValidator } from 'src/app/utils/cssValidator';
import { NewUserService } from './new-user.service';
import { RegisterUser } from './register-user';
import { ValidatorNewUserService } from './validator-new-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  cssValidator = cssValidator;

  get f() {
    return this.registerForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private validatorNewUserService: ValidatorNewUserService,
    private newUserService: NewUserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-z\s]*$/),
        ],
      ],
      userName: [
        '',
        [Validators.required, Validators.minLength(3)],
        [this.validatorNewUserService.userExists()],
      ],
      email: [
        '',
        [Validators.required, Validators.email],
        [this.validatorNewUserService.emailExists()],
      ],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  register() {
    const newUser = this.registerForm.getRawValue() as RegisterUser;
    this.newUserService.register(newUser).subscribe(
      () => this.toastr.success('Usuário criado com sucesso', 'Usuário criado'),
      (err) =>
        this.toastr.error(
          'Houve algum problema durante a criação do usuário',
          'Erro'
        )
    );
  }
}
