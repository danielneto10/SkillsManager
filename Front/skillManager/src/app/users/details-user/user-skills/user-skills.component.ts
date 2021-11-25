import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.scss'],
})
export class UserSkillsComponent implements OnInit {
  user!: User;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.activatedRoute.parent?.params.subscribe(() => {
    //   this.user = this.activatedRoute.snapshot.data['user'];
    // });
    this.activatedRoute.parent?.data.subscribe((data: Data) => {
      this.user = data['user'];
    });
    // this.user = this.activatedRoute.parent?.snapshot.data['user'];
  }
}
