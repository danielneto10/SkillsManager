import { validate } from 'class-validator';
import { User } from '../entities/User';

export const isInvalid = async (model: User) => {
  const errors = await validate(model);
  return errors.length > 0 ? true : false;
};
