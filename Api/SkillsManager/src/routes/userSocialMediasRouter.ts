import { Router } from 'express';
import UserSocialMediaController from '../controllers/UserSocialMediaController';
import { authToken } from '../middleware/authMiddleware';

const route = Router();

route
  .get(
    '/users/:userName/social-medias',
    authToken,
    UserSocialMediaController.getAll
  )
  .post(
    '/users/:userName/social-medias',
    authToken,
    UserSocialMediaController.addSocialMedia
  );

export default route;
