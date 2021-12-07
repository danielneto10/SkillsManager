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

  paginationUsers!: Users;

  constructor() {}

  ngOnInit(): void {
    this.paginationUsers = this.users.slice(0, 6);
  }

  pageChanged(event: PageChangedEvent) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.paginationUsers = this.users.slice(startItem, endItem);
  }
}
