import bcrypt from 'bcrypt';
import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/user';
import { DataStoredInToken, TokenData } from '../types/token';
import UserType from '../types/user';

const router = express.Router();

const createToken = (user: UserType): TokenData => {
  const expiresIn = 60 * 60;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const secret: string = process.env.JWT_SECRET!;
  const dataStoredInToken: DataStoredInToken = { _id: user._id };
  return {
    expiresIn,
    token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
  };
};

const createCookie = (tokenData: TokenData): string => {
  return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
};

router.post('/auth/register', async (req: Request, res: Response) => {
  const userData = req.body;
  if (await User.findOne({ email: userData.email })) {
    res.status(403).send('User with such email already exists.');
  } else {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const createdUser = await User.create({ ...userData, password: hashedPassword });
    const tokenData = createToken(createdUser);
    res.setHeader('Set-Cookie', [createCookie(tokenData)]);
    res.status(200).send('User succesfully registered.');
  }
});

router.post('/auth/login', async (req: Request, res: Response) => {
  const logInData = req.body;
  const user = await User.findOne({ email: logInData.email });
  if (user) {
    const isPasswordMatching = await bcrypt.compare(logInData.password, user.password);
    if (isPasswordMatching) {
      const tokenData = createToken(user);
      res.setHeader('Set-Cookie', [createCookie(tokenData)]);
      res.status(200).send('Logged in.');
    } else {
      res.status(401).send('Wrong credentials.');
    }
  } else {
    res.status(401).send('Wrong credentials.');
  }
});

export { router as authRouter };
