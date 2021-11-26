import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  userPage(user: AuthUser) {
    if (user.admin) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/users', user.userName]);
    }
  }

  logOut() {
    this.toastr.success('LogOut feito com sucesso', 'Saiu');
    this.router.navigate(['']);
    this.authUserService.logOut();
  }
}
