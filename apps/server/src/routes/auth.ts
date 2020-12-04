import bcrypt from 'bcrypt';
import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

import User from '../models/user';
import { DataStoredInToken, TokenData } from '../types/token';
import UserType from '../types/user';

const router = express.Router();

const createToken = (user: UserType): TokenData => {
  const expiresIn = 60 * 60;
  const secret: string = process.env.JWT_SECRET || '';
  const dataStoredInToken: DataStoredInToken = { _id: user._id };
  return {
    expiresIn,
    token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
  };
};

router.post('/auth/register', async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    if (await User.findOne({ email: userData.email })) {
      res.status(403).send('User with such email already exists');
    } else if (await User.findOne({ username: userData.username })) {
      res.status(403).send('User with such username already exists');
    } else {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const createdUser = await User.create({ ...userData, password: hashedPassword });
      res.status(200).send({ message: `User ${createdUser.username} succesfully registered` });
    }
  } catch (e) {
    const { code, message } = e?.response?.data?.error || { code: 400, message: 'Error' };
    res.status(code).send(message);
  }
});

router.post('/auth/login', async (req: Request, res: Response) => {
  try {
    const logInData = req.body;
    const user =
      (await User.findOne({ email: logInData.username })) ||
      (await User.findOne({ username: logInData.username }));
    if (user) {
      const isPasswordMatching = await bcrypt.compare(logInData.password, user.password);
      if (isPasswordMatching) {
        const tokenData = createToken(user);
        res.status(200).send({
          message: `Successfully logged in as ${logInData.username}`,
          token: tokenData,
        });
      } else {
        res.status(403).send('Wrong username or password');
      }
    } else {
      res.status(403).send('Wrong username or password');
    }
  } catch (e) {
    const { code, message } = e?.response?.data?.error || { code: 400, message: 'Error' };
    res.status(code).send(message);
  }
});

router.post('/auth/restore-password', async (req: Request, res: Response) => {
  try {
    const restoreData = req.body;
    const user = await User.findOne({ email: restoreData.email });
    if (user) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASSWORD,
        },
      });
      const newPassword = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      user.set('password', hashedNewPassword);
      await user.save();
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: user.email,
        subject: 'Restoring password',
        html: `<div><h3>Here is your temporary password:</h3><h4>${newPassword}</h4></div>`,
      };
      await transporter.sendMail(mailOptions);
      res.status(200).send({ message: `We have sent a temporary password to ${user.email}` });
    } else {
      res.status(403).send('No such user found');
    }
  } catch (e) {
    const { code, message } = e?.response?.data?.error || { code: 400, message: 'Error' };
    res.status(code).send(message);
  }
});

export { router as authRouter };
