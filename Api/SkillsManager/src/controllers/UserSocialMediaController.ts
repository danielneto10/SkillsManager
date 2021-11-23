import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { SocialMedia } from '../entities/SocialMedia';
import { User } from '../entities/User';

class UserSocialMediaController {
  async getAll(req: Request, res: Response) {
    const { userName } = req.params;
    try {
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({
        where: { userName: userName },
        relations: ['socialMedias'],
      });
      if (!user) return res.status(200).json();
      const userSocialMedias = user.socialMedias;
      return res.status(200).json(userSocialMedias);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  async addSocialMedia(req: Request, res: Response) {
    const { userName } = req.params;
    const socialMediasArray = req.body as Array<SocialMedia>;
    try {
      const userRepository = getRepository(User);
      const socialMediaRepository = getRepository(SocialMedia);
      const user = await userRepository.findOne({
        where: { userName: userName, admin: false },
        relations: ['socialMedias'],
      });
      let socialmedias = socialMediasArray.map((sm) =>
        socialMediaRepository.create({ info: sm.info })
      );

      socialmedias = await socialMediaRepository.save(socialmedias);
      user.socialMedias = socialmedias;
      await userRepository.save(user);

      await socialMediaRepository.delete({ user: null });

      return res.status(200).json(user.socialMedias);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}

export default new UserSocialMediaController();
