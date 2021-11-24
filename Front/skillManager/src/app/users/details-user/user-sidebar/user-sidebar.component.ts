import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUser } from 'src/app/core/autenticacao/user/auth-user';
import { AuthUserService } from 'src/app/core/autenticacao/user/auth-user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss'],
})
export class UserSidebarComponent implements OnInit {
  user$!: Observable<AuthUser>;
  userNameParams = '';

  constructor(
    private authUserService: AuthUserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user$ = this.authUserService.getAuthUser();
    this.userNameParams = this.activatedRoute.snapshot.params.userName;
  }
}
