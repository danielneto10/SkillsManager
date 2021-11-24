import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-about',
  templateUrl: './user-about.component.html',
  styleUrls: ['./user-about.component.scss'],
})
export class UserAboutComponent implements OnInit {
  user!: User;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe(
      () => (this.user = this.activatedRoute.snapshot.data['user'])
    );
  }
}
