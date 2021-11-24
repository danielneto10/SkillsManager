import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { UsersRoutingModule } from './users-routing.module';
import { ListaUsersComponent } from './lista-users/lista-users.component';
import { GridUsersComponent } from './lista-users/grid-users/grid-users.component';
import { UserCardComponent } from './lista-users/user-card/user-card.component';
import { SearchSkillComponent } from './lista-users/search-skill/search-skill.component';
import { FilterSkillPipe } from './lista-users/filter-skill.pipe';
import { SharedModule } from '../shared/shared.module';
import { DetailsUserComponent } from './details-user/details-user.component';

@NgModule({
  declarations: [
    ListaUsersComponent,
    GridUsersComponent,
    UserCardComponent,
    SearchSkillComponent,
    FilterSkillPipe,
    DetailsUserComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
    PaginationModule.forRoot(),
  ],
})
export class UsersModule {}
