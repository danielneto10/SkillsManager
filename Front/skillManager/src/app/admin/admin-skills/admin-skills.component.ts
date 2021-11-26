import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { SkillsService } from 'src/app/users/details-user/user-edit-skills/skills.service';
import { Skill, Skills } from 'src/app/users/models/skill';
import { AdminSkillsService } from './admin-skills.service';

@Component({
  selector: 'app-admin-skills',
  templateUrl: './admin-skills.component.html',
  styleUrls: ['./admin-skills.component.scss'],
})
export class AdminSkillsComponent implements OnInit {
  skills: Skills = [];
  skillForm!: FormGroup;
  skillId!: number;

  modalRef?: BsModalRef;
  config = {
    animated: true,
  };

  constructor(
    private skillsService: SkillsService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private adminSkillService: AdminSkillsService
  ) {}

  ngOnInit(): void {
    this.skillForm = this.fb.group({
      name: ['', [Validators.required]],
      descr: ['', [Validators.required]],
    });

    this.carregarSkills();
  }

  carregarSkills() {
    this.skillsService.getAllSkills().subscribe(
      (skills) => (this.skills = skills),
      (err) => console.log(err)
    );
  }

  addSkill() {
    const skill = this.skillForm.getRawValue() as Skill;
    this.adminSkillService.createSkill(skill).subscribe(() => {
      this.toastr.success('Skill criada com sucesso', 'Skill criada');
      this.carregarSkills();
    });
    this.modalRef?.hide();
  }

  deleteSkill(skillId?: number) {
    this.adminSkillService.excluirSkill(skillId!).subscribe(
      () => {
        this.toastr.success('Skill excluída com sucesso', 'Skill excluída');
        this.carregarSkills();
      },
      () => {
        this.toastr.error('Ocorreu um problema ao excluir a skill', 'Error');
      }
    );
  }

  openModal(template: TemplateRef<any>, id?: number) {
    if (id) {
      this.skillId = id;
    }
    this.modalRef = this.modalService.show(template, this.config);
  }

  yes() {
    this.deleteSkill(this.skillId);
    this.modalRef?.hide();
  }

  no() {
    this.modalRef?.hide();
  }
}
