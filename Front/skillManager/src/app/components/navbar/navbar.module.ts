import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule, SharedModule, CollapseModule.forRoot()],
  exports: [NavbarComponent],
})
export class NavbarModule {}
