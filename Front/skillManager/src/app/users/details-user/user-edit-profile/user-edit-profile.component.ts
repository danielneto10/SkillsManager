import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { SocialMedia, SocialMedias } from '../../models/social-media';
import { User } from '../../models/user';
import { EditProfileService } from './edit-profile.service';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.scss'],
})
export class UserEditProfileComponent implements OnInit {
  socialMedias!: SocialMedias;
  aboutForm!: FormGroup;
  socialMediaForm!: FormGroup;
  user!: User;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private editProfileService: EditProfileService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.parent?.parent?.data.subscribe((data: Data) => {
      this.user = data['user'];
    });

    this.aboutForm = this.fb.group({
      about: this.user.about,
    });
    this.socialMediaForm = this.fb.group({
      link: '',
    });

    this.editProfileService
      .getSocialMedias(this.user.userName)
      .subscribe((sm) => {
        this.socialMedias = sm;
      });
  }

  addLink(value: string) {
    const socialMedia = { info: value } as SocialMedia;
    this.socialMedias.push(socialMedia);
    this.socialMediaForm.reset();
  }

  deleteLink(index: number) {
    this.socialMedias.splice(index, 1);
  }

  salvar() {
    const about = this.aboutForm.controls.about?.value;
    this.editProfileService
      .updateAboutUser(about, this.user.userName)
      .pipe(
        switchMap(() =>
          this.editProfileService.updateSocialMedias(
            this.socialMedias,
            this.user.userName
          )
        )
      )
      .subscribe(
        () => {
          this.toastr.success('Usuário salvo com sucesso', 'Usuário salvo');
          this.router.navigate(['/users', this.user.userName]).then(() => {
            window.location.reload();
          });
        },
        () => {
          this.toastr.error('Ocorreu um erro ao salvar o usuário', 'Error');
        }
      );
  }
}
