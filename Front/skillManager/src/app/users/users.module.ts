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
import { UserSidebarComponent } from './details-user/user-sidebar/user-sidebar.component';
import { UserAboutComponent } from './details-user/user-about/user-about.component';
import { UserSkillsComponent } from './details-user/user-skills/user-skills.component';
import { UserEditSkillsComponent } from './details-user/user-edit-skills/user-edit-skills.component';
import { UserEditProfileComponent } from './details-user/user-edit-profile/user-edit-profile.component';
import { SortableModule } from 'ngx-bootstrap/sortable';

@NgModule({
  declarations: [
    ListaUsersComponent,
    GridUsersComponent,
    UserCardComponent,
    SearchSkillComponent,
    FilterSkillPipe,
    DetailsUserComponent,
    UserSidebarComponent,
    UserAboutComponent,
    UserSkillsComponent,
    UserEditSkillsComponent,
    UserEditProfileComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
    PaginationModule.forRoot(),
    SortableModule.forRoot(),
  ],
})
export class UsersModule {}
