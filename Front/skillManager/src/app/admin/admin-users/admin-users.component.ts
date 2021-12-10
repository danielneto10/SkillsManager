import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ListaUsersService } from 'src/app/users/lista-users/lista-users.service';
import { User, Users } from 'src/app/users/models/user';
import { cssValidator } from 'src/app/utils/cssValidator';
import { AdminUsersService } from './admin-users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent implements OnInit {
  users: Users = [];

  userForm: FormGroup;
  editUserForm: FormGroup;
  userName: string = '';

  cssValidator = cssValidator;

  modalRef?: BsModalRef;
  config = {
    animated: true,
  };

  constructor(
    private userAdminService: AdminUsersService,
    private userService: ListaUsersService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    fb: FormBuilder
  ) {
    this.userForm = fb.group({
      userName: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      admin: [false],
    });

    this.editUserForm = fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      admin: [false],
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  openModal(
    template: TemplateRef<any>,
    userName?: string,
    name?: string,
    email?: string,
    admin?: boolean
  ) {
    if (userName) {
      this.userName = userName;
    }
    if (name && email) {
      this.editUserForm.controls.name?.setValue(name);
      this.editUserForm.controls.email?.setValue(email);
      this.editUserForm.controls.admin?.setValue(admin);
    }
    this.userForm.reset();
    this.modalRef = this.modalService.show(template, this.config);
  }

  yes() {
    this.deleteUser(this.userName);
    this.modalRef?.hide();
  }

  no() {
    this.modalRef?.hide();
  }

  addUser() {
    const user = this.userForm.getRawValue() as User;
    console.log(user);
    this.userAdminService.createUser(user).subscribe(() => {
      this.toastr.success('Usuário criado com sucesso', 'Sucesso');
      this.loadUsers();
    });
    this.modalRef?.hide();
  }

  editUser() {
    const user = this.editUserForm.getRawValue() as User;
    console.log(user);
    this.userAdminService.updateUser(user, this.userName).subscribe(() => {
      this.toastr.success('Usuário editado com sucesso', 'Sucesso');
      this.loadUsers();
    });
    this.modalRef?.hide();
  }

  deleteUser(userName: string) {
    this.userAdminService.deleteUser(userName).subscribe(() => {
      this.toastr.success('Usuário deletado com sucesso', 'Sucesso');
      this.loadUsers();
    });
  }
}
