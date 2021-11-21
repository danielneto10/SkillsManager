import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const route = Router();

route
  .post('/users/register', AuthController.register)
  .post('/users/login', AuthController.login)
  .post('/users/reset-password-token', AuthController.resetTokenGenerator)
  .post('/users/reset-password', AuthController.resetPassword);

export default route;
