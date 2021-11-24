import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../models/user';

@Component({
  selector: 'app-lista-users',
  templateUrl: './lista-users.component.html',
  styleUrls: ['./lista-users.component.scss'],
})
export class ListaUsersComponent implements OnInit {
  users!: Users;
  filter = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      this.users = this.activatedRoute.snapshot.data['users'];
    });
  }
}
