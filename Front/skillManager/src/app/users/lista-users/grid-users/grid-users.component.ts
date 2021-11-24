import { Component, Input, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Users } from '../../models/user';

@Component({
  selector: 'app-grid-users',
  templateUrl: './grid-users.component.html',
  styleUrls: ['./grid-users.component.scss'],
})
export class GridUsersComponent implements OnInit {
  @Input() users!: Users;

  constructor() {}

  ngOnInit(): void {}
}
