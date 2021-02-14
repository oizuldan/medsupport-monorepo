import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';

import User from '../models/user';
import TokenService from './TokenService';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  register: async (
    email: string,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
  ) => {
    try {
      if (await User.findOne({ email })) {
        return { error: 'User with such email already exists.' };
      } else if (await User.findOne({ username })) {
        return { error: 'User with such username already exists.' };
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const createdUser = await User.create({
          username,
          email,
          password: hashedPassword,
          firstName,
          lastName,
        });
        const tokenData = TokenService.createToken(createdUser);
        return {
          message: `User ${createdUser.username} successfully registered.`,
          token: TokenService.createCookie(tokenData),
        };
      }
    } catch (e) {
      return { error: 'Server error.' };
    }
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  login: async (username: string, password: string) => {
    try {
      const user = (await User.findOne({ username })) || (await User.findOne({ username }));
      if (user) {
        const isPasswordMatching = await bcrypt.compare(password, user.password);
        if (isPasswordMatching) {
          const tokenData = TokenService.createToken(user);
          return {
            message: `Logged in as ${username}.`,
            token: TokenService.createCookie(tokenData),
          };
        }
      }
      return { error: 'Wrong credentials.' };
    } catch {
      return { error: 'Server error.' };
    }
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  resetPassword: async (email: string) => {
    try {
      const user = await User.findOne({ email });
      if (user) {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
          },
        });
        const newPassword =
          Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        user.set('password', hashedNewPassword);
        await user.save();
        await transporter.sendMail({
          from: process.env.GMAIL_USER,
          to: user.email,
          subject: 'Restoring password',
          html: `<div><h3>Here is your temporary password:</h3><h4>${newPassword}</h4></div>`,
        });
        return { message: `We have sent a temporary password to ${user.email}` };
      } else {
        return { error: 'No such user found' };
      }
    } catch (e) {
      return { error: 'Server error.' };
    }
  },
};
