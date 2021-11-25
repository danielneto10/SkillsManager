import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { filter, map } from 'rxjs/operators';
import { Skills } from '../../models/skill';
import { User } from '../../models/user';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-user-edit-skills',
  templateUrl: './user-edit-skills.component.html',
  styleUrls: ['./user-edit-skills.component.scss'],
})
export class UserEditSkillsComponent implements OnInit {
  user!: User;
  skills!: Skills;
  skillsTeste = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private skillsService: SkillsService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.parent?.data.subscribe((data: Data) => {
      this.user = data['user'];
    });
    this.skillsService.getAllSkills().subscribe((skills) => {
      // this.skills = skills;
      this.skills = skills.filter(
        (s) => !this.user.skills.some((u) => u.name.includes(s.name))
      );
    });
  }

  salvarSkills() {
    const userName = this.user.userName;
    this.skillsService.saveSkills(this.user.skills, userName).subscribe(
      () => {
        this.toastr.success(
          'Skills atualizadas com sucesso',
          'Skills Atualizadas'
        );
        this.router.navigate(['/users', this.user.userName]);
      },
      () => {
        this.toastr.error('Erro ao atualizar as skills', 'Erro');
      }
    );
  }
}
