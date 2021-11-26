import { Router } from 'express';
import UserSkillController from '../controllers/UserSkillController';
import { authToken } from '../middleware/authMiddleware';

const route = Router();

route
  .post('/users/:userName/skills', authToken, UserSkillController.addUserSkills)
  .post(
    '/users/:userName/skills/:skillId',
    authToken,
    UserSkillController.addSkillToUser
  )
  .get('/users/:userName/skills', authToken, UserSkillController.getUserSkills)
  .get(
    '/users/:userName/skills/:skillId',
    authToken,
    UserSkillController.getUserSkill
  )
  .delete(
    '/users/:userName/skills/:skillId',
    authToken,
    UserSkillController.deleteUserSkill
  );

export default route;
