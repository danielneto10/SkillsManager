import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Users } from '../models/user';

@Component({
  selector: 'app-lista-users',
  templateUrl: './lista-users.component.html',
  styleUrls: ['./lista-users.component.scss'],
})
export class ListaUsersComponent implements OnInit {
  users!: Users;
  filter = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      this.users = this.activatedRoute.snapshot.data['users'];
    });
  }
}
