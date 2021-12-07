import { isAlpha, validate } from 'class-validator';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';
import * as bcryptjs from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import sendEmail from '../config/email';
import { Log } from '../entities/Log';

class AuthController {
  async register(req: Request, res: Response) {
    const { userName, name, email, password, admin } = req.body;
    try {
      const userRepository = getRepository(User);
      const userExists = await userRepository.findOne({
        where: [{ userName: userName }, { email: email }],
      });
      if (userExists)
        return res
          .status(400)
          .json({ message: 'Usuario com userName/email duplicado' });

      const user = userRepository.create({
        userName: userName,
        name: name,
        email: email,
        password: password,
      });
      if (admin) user.admin = admin;
      user.userName = user.userName.toLowerCase();
      const errors = await validate(user, {
        validationError: { target: false },
      });
      if (!isAlpha(user.name.replace(' ', ''))) return res.status(400).json();
      if (errors.length > 0) return res.status(400).json(errors);

      await userRepository.save(user);
      return res.status(200).json();
    } catch {
      return res.sendStatus(500);
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({ where: { email: email } });
      if (!user) return res.status(401).json();

      const isValidPassword = await bcryptjs.compare(password, user.password);
      if (!isValidPassword) return res.status(401).json();

      const token = jwt.sign(
        { userName: user.userName, name: user.name, admin: user.admin },
        process.env.SECRET_KEY,
        { expiresIn: '1d' }
      );
      return res.status(200).json({ token: token });
    } catch {
      return res.sendStatus(500);
    }
  }

  async resetTokenGenerator(req: Request, res: Response) {
    const { email } = req.body;
    try {
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({ where: { email: email } });
      if (!user) return res.status(404).json();

      const resetToken = jwt.sign({}, process.env.SECRET_KEY, {
        expiresIn: '15m',
      });
      await userRepository.update(
        { email: email },
        { password_reset_token: resetToken }
      );

      sendEmail(email, resetToken);
      return res.status(200).json();
    } catch {
      return res.sendStatus(500);
    }
  }

  async resetPassword(req: Request, res: Response) {
    const { email, password, token } = req.body;
    try {
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({
        where: { email: email, password_reset_token: token },
      });
      if (!user) return res.status(404).json();

      user.password_reset_token = null;
      user.password = password;

      await userRepository.save(user);

      return res.status(200).json();
    } catch {
      return res.sendStatus(500);
    }
  }
}

export default new AuthController();
