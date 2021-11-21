import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Skill } from '../entities/Skill';

class SkillController {
  async getAll(req: Request, res: Response) {
    try {
      const skillRepository = getRepository(Skill);
      const skills = await skillRepository.find();
      return res.status(200).json(skills);
    } catch (err) {
      return res.sendStatus(500);
    }
  }

  async create(req: Request, res: Response) {
    const { name, descr } = req.body;
    try {
      const skillRepository = getRepository(Skill);
      const skill = skillRepository.create({
        name: name,
        descr: descr,
      });

      const skillExist = await skillRepository.findOne({
        where: { name: name },
      });
      if (skillExist) return res.status(400).json();

      const errors = await validate(Skill);
      if (errors.length > 0) return res.status(400).json();

      await skillRepository.save(skill);
      return res.status(200).json();
    } catch (err) {
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
    } catch (err) {
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
    } catch (err) {
      return res.sendStatus(500);
    }
  }
}

export default new SkillController();
