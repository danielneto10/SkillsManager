/* eslint-disable */

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Skill } from '../entities/Skill';

class SkillController {
  async getAll(req: Request, res: Response) {
    try {
      const skillRepository = getRepository(Skill);
      const skills = await skillRepository.find();
      return res.status(200).json(skills);
    } catch {
      return res.sendStatus(500);
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const skillFields = req.body;
    try {
      const skillRepository = getRepository(Skill);
      const skill = await skillRepository.findOne({
        where: { id: parseInt(id) },
      });
      if (!skill) return res.status(404).json();
      await skillRepository.update(id, skillFields);
      return res.status(200).json();
    } catch {
      return res.sendStatus(500);
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const skillRepository = getRepository(Skill);
      const skill = await skillRepository.findOne({
        where: { id: parseInt(id) },
      });
      if (!skill) return res.status(404).json();
      await skillRepository.delete({ id: parseInt(id) });
      return res.status(200).json();
    } catch {
      return res.sendStatus(500);
    }
  }
}

export default new SkillController();
