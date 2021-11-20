import { Router } from 'express';
import SkillController from '../controllers/SkillController';

const route = Router();

route
  .get('/skills', SkillController.getAll)
  .put('/skills/:id', SkillController.update)
  .delete('/skills/:id', SkillController.delete);

export default route;
