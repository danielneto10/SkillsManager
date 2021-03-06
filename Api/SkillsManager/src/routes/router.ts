import { Express } from 'express';
import user from './userRouter';
import skill from './skillRouter';
import auth from './authRouter';
import userSkill from './userSkillsRouter';
import userSocialMedia from './userSocialMediasRouter';

export const router = (app: Express) => {
  app.use(user, skill, auth, userSkill, userSocialMedia);
};
