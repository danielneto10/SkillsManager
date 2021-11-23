import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { TemplateAuthModule } from '../components/template-auth/template-auth.module';
import { SharedModule } from '../shared/shared.module';

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
