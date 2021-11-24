import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsUserComponent } from './details-user/details-user.component';
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
    component: DetailsUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
