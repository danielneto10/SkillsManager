import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { SendTokenComponent } from './send-token/send-token.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { SharedModule } from '../shared/shared.module';
import { TemplateNewPasswordModule } from '../components/template-new-password/template-new-password.module';

@NgModule({
  declarations: [SendTokenComponent, NewPasswordComponent],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    SharedModule,
    TemplateNewPasswordModule,
  ],
})
export class ForgotPasswordModule {}
