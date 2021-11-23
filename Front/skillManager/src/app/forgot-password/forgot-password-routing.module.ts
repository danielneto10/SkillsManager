import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPasswordComponent } from './new-password/new-password.component';
import { SendTokenComponent } from './send-token/send-token.component';

const routes: Routes = [
  {
    path: '',
    component: SendTokenComponent,
  },
  {
    path: 'new-password',
    component: NewPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordRoutingModule {}
