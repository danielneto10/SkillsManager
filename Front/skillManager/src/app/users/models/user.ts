import { Skills } from './skill';
import { SocialMedias } from './social-media';

export interface User {
  userName: string;
  name: string;
  email: string;
  about?: string;
  perfilPhoto?: string;
  skills: Skills;
  socialMedias: SocialMedias;
  admin?: boolean;
}

export type Users = Array<User>;
