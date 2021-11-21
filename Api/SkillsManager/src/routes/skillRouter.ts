import { Router } from 'express';
import SkillController from '../controllers/SkillController';
import { authAdmin } from '../middleware/authMiddleware';

const route = Router();

route
  .get('/skills', authAdmin, SkillController.getAll)
  .post('/skills', authAdmin, SkillController.create)
  .put('/skills/:id', authAdmin, SkillController.update)
  .delete('/skills/:id', authAdmin, SkillController.delete);

export default route;
