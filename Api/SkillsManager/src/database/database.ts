import { createConnection } from 'typeorm';
export const initDatabase = () => {
  createConnection();
};
