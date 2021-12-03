import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TemplateAuthModule } from '../components/template-auth/template-auth.module';
import { SharedModule } from '../shared/shared.module';
import { HomeBodyComponent } from './home-body/home-body.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HomeHeaderComponent,
    HomeBodyComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, TemplateAuthModule, SharedModule],
})
export class HomeModule {}
