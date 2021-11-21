import { Router } from 'express';
import UserController from '../controllers/UserController';
import { authAdmin, authToken } from '../middleware/authMiddleware';

const route = Router();

route
  .get('/users', authAdmin, UserController.getAll)
  .get('/users/:userName', UserController.getByUserName)
  .put('/users/:userName', authToken, UserController.update)
  .delete('/users/:userName', authAdmin, UserController.delete);

export default route;
