import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';

class UserController {
  async getAll(req: Request, res: Response) {
    try {
      const userRepository = getRepository(User);
      const users = await userRepository.find({
        relations: ['socialMedias', 'skills'],
      });

      return res.status(200).json(users);
    } catch {
      return res.sendStatus(500);
    }
  }

  async getByUserName(req: Request, res: Response) {
    const { userName } = req.params;
    try {
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({
        where: { userName: userName, admin: false },
        relations: ['socialMedias', 'skills'],
      });
      if (!user) return res.status(200).json();

      return res.status(200).json(user);
    } catch {
      return res.sendStatus(500);
    }
  }

  async getByEmail(req: Request, res: Response) {
    const { email } = req.params;
    try {
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({
        where: { email: email, admin: false },
        relations: ['socialMedias', 'skills'],
      });
      if (!user) return res.status(200).json();

      return res.status(200).json({ email: true });
    } catch {
      return res.sendStatus(500);
    }
  }

  async update(req: Request, res: Response) {
    const { userName } = req.params;
    const userFields = req.body;
    try {
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({
        where: { userName: userName },
      });
      if (!user) return res.status(200).json();
      // if (userFields.email || user.userName) {
      //   const uEmail = userFields.email ?? '';
      //   const uUserName = userFields.userName ?? '';

      //   const userEmail = await userRepository.findOne({
      //     where: { email: uEmail },
      //   });
      //   const userUserName = await userRepository.findOne({
      //     where: { userName: uUserName },
      //   });
      //   if (userEmail || userUserName) {
      //     return res
      //       .status(400)
      //       .json({ message: 'Este usuario/email já está cadastrado' });
      //   }
      // }
      await userRepository.update(userName, req.body);
      return res.status(200).json();
    } catch {
      return res.sendStatus(500);
    }
  }

  async delete(req: Request, res: Response) {
    const { userName } = req.params;
    try {
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({
        where: { userName: userName },
      });
      if (!user) return res.status(200).json();

      await userRepository.delete({ userName: userName });
      return res.status(200).json();
    } catch {
      return res.sendStatus(500);
    }
  }
}

export default new UserController();
