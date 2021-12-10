import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsOwnerGuard } from '../core/guards/is-owner.guard';
import { DetailsUserComponent } from './details-user/details-user.component';
import { DetailsUserResolver } from './details-user/details-user.resolver';
import { EditComponent } from './details-user/edit/edit.component';
import { UserAboutComponent } from './details-user/user-about/user-about.component';
import { UserEditProfileComponent } from './details-user/user-edit-profile/user-edit-profile.component';
import { UserEditSkillsComponent } from './details-user/user-edit-skills/user-edit-skills.component';
import { UserSkillsComponent } from './details-user/user-skills/user-skills.component';
import { ListaUsersComponent } from './lista-users/lista-users.component';
import { ListaUsersResolver } from './lista-users/lista-users.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListaUsersComponent,
    resolve: {
      users: ListaUsersResolver,
    },
  },
  {
    path: ':userName',
    runGuardsAndResolvers: 'always',
    component: DetailsUserComponent,
    resolve: {
      user: DetailsUserResolver,
    },
    children: [
      {
        path: '',
        component: UserAboutComponent,
      },
      {
        path: 'skills',
        component: UserSkillsComponent,
      },
      {
        path: 'edit',
        redirectTo: '',
        component: EditComponent,
        canActivateChild: [IsOwnerGuard],
        children: [
          {
            path: 'edit-skills',
            component: UserEditSkillsComponent,
          },
          {
            path: 'edit-profile',
            component: UserEditProfileComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
