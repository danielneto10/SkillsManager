import { Express } from 'express';
import user from './userRouter';

export const router = (app: Express) => {
  app.use(user);
};
