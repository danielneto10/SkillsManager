import { Router } from 'express';
import UserSkillController from '../controllers/UserSkillController';

const route = Router();

route
  .post('/users/:userName/skills', UserSkillController.addUserSkills)
  .post('/users/:userName/skills/:skillId', UserSkillController.addSkillToUser)
  .get('/users/:userName/skills', UserSkillController.getUserSkills)
  .get('/users/:userName/skills/:skillId', UserSkillController.getUserSkill)
  .delete(
    '/users/:userName/skills/:skillId',
    UserSkillController.deleteUserSkill
  );

export default route;
