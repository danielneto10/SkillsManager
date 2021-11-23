import { Router } from 'express';
import UserSocialMediaController from '../controllers/UserSocialMediaController';

const route = Router();

route
  .get('/users/:userName/social-medias', UserSocialMediaController.getAll)
  .post(
    '/users/:userName/social-medias',
    UserSocialMediaController.addSocialMedia
  );

export default route;
