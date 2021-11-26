import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSkillsComponent } from './admin-skills/admin-skills.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'skills',
    component: AdminSkillsComponent,
  },
  {
    path: 'users',
    component: AdminUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
