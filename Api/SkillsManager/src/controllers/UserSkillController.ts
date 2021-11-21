import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Skill } from '../entities/Skill';
import { User } from '../entities/User';

class UserSkillController {
  async deleteUserSkill(req: Request, res: Response) {
    const { userName, skillId } = req.params;
    try {
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({
        where: { userName: userName, admin: false },
        relations: ['skills'],
      });
      if (!user) return res.status(404).json();
      const userSkill = user.skills.filter((s) => s.id !== parseInt(skillId));
      if (userSkill.length === 0) return res.status(404).json();
      user.skills = userSkill;
      await userRepository.save(user);

      return res.status(200).json();
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  async getUserSkill(req: Request, res: Response) {
    const { userName, skillId } = req.params;
    try {
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({
        where: { userName: userName, admin: false },
        relations: ['skills'],
      });
      if (!user) return res.status(404).json();
      const userSkill = user.skills.filter((s) => s.id === parseInt(skillId));
      if (userSkill.length === 0) return res.status(404).json();
      return res.status(200).json(userSkill);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  async getUserSkills(req: Request, res: Response) {
    const { userName } = req.params;
    try {
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({
        where: { userName: userName, admin: false },
        relations: ['skills'],
      });
      if (!user) return res.status(404).json();
      const userSkill = user.skills;
      return res.status(200).json(userSkill);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  async addSkillToUser(req: Request, res: Response) {
    const { userName, skillId } = req.params;
    try {
      const userRepository = getRepository(User);
      const skillRepository = getRepository(Skill);

      const user = await userRepository.findOne({
        where: { userName: userName, admin: false },
        relations: ['skills'],
      });
      const skill = await skillRepository.findOne({
        where: { id: parseInt(skillId) },
      });

      if (!user || !skill) return res.status(404).json();
      if (user.skills.filter((s) => s.id === skill.id).length > 0)
        return res.status(400).json();
      console.log(user.skills);
      user.skills.push(skill);
      await userRepository.save(user);
      return res.status(200).json();
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}

export default new UserSkillController();
