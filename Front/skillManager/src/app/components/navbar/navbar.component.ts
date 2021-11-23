import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUser } from 'src/app/core/autenticacao/user/auth-user';
import { AuthUserService } from 'src/app/core/autenticacao/user/auth-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isCollapse = true;

  user$ = this.authUserService.getAuthUser();

  constructor(
    private authUserService: AuthUserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logOut() {
    this.router.navigate(['']);
    this.authUserService.logOut();
  }
}
