import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListaUsersComponent } from './lista-users/lista-users.component';

@NgModule({
  declarations: [
    ListaUsersComponent
  ],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
