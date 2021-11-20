import { Router } from 'express';
import UserController from '../controllers/UserController';

const route = Router();

route
  .get('/users', UserController.getAll)
  .get('/users/:userName', UserController.getByUserName)
  .put('/users/:userName', UserController.update)
  .delete('/users/:userName', UserController.delete);

export default route;
