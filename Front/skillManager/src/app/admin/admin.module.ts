import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminSkillsComponent } from './admin-skills/admin-skills.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdminComponent, AdminSkillsComponent, AdminUsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ModalModule.forRoot(),
  ],
})
export class AdminModule {}
