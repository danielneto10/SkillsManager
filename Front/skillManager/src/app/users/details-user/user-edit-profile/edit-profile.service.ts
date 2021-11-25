import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SocialMedias } from '../../models/social-media';
import { User } from '../../models/user';

const URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class EditProfileService {
  constructor(private http: HttpClient) {}

  updateAboutUser(about: string, userName: string) {
    return this.http.put(`${URL}/users/${userName}`, { about: about });
  }

  getSocialMedias(userName: string): Observable<SocialMedias> {
    return this.http.get<SocialMedias>(
      `${URL}/users/${userName}/social-medias`
    );
  }

  updateSocialMedias(socialMedias: SocialMedias, userName: string) {
    return this.http.post(
      `${URL}/users/${userName}/social-medias`,
      socialMedias
    );
  }
}
