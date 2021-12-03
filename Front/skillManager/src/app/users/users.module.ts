import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SortableModule } from 'ngx-bootstrap/sortable';

import { SharedModule } from '../shared/shared.module';
import { DetailsUserComponent } from './details-user/details-user.component';
import { EditComponent } from './details-user/edit/edit.component';
import { UserAboutComponent } from './details-user/user-about/user-about.component';
import { UserEditProfileComponent } from './details-user/user-edit-profile/user-edit-profile.component';
import { UserEditSkillsComponent } from './details-user/user-edit-skills/user-edit-skills.component';
import { UserSidebarComponent } from './details-user/user-sidebar/user-sidebar.component';
import { UserSkillsComponent } from './details-user/user-skills/user-skills.component';
import { FilterSkillPipe } from './lista-users/filter-skill.pipe';
import { GridUsersComponent } from './lista-users/grid-users/grid-users.component';
import { ListaUsersComponent } from './lista-users/lista-users.component';
import { SearchSkillComponent } from './lista-users/search-skill/search-skill.component';
import { UserCardComponent } from './lista-users/user-card/user-card.component';
import { UsersRoutingModule } from './users-routing.module';

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
    EditComponent,
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
