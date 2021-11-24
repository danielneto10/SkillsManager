import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.scss'],
})
export class DetailsUserComponent implements OnInit {
  user!: User;
  userName = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      () => (this.user = this.activatedRoute.snapshot.data['user'])
    );
  }
}
