import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import { TokenDecode } from '../models/tokenDecode';

export function authToken(req: Request, res: Response, next: NextFunction) {
  const tokenHeader = req.headers.authorization;

  if (!tokenHeader) return res.sendStatus(401);

  const token = tokenHeader.replace('Bearer', '').trim();
  try {
    verify(token, process.env.SECRET_KEY);
    return next();
  } catch (error) {
    return res.sendStatus(401);
  }
}

export function authAdmin(req: Request, res: Response, next: NextFunction) {
  const tokenHeader = req.headers.authorization;

  if (!tokenHeader) return res.sendStatus(401);

  const token = tokenHeader.replace('Bearer', '').trim();

  try {
    const tokenDecode = jwtDecode(token) as TokenDecode;
    if (!tokenDecode.admin) return res.sendStatus(401);
    return next();
  } catch (error) {
    return res.sendStatus(500);
  }
}
