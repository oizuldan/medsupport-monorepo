import bcrypt from 'bcrypt';

import User from '../models/user';
import TokenService from './TokenService';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  register: async (email: string, password: string) => {
    if (!(await User.findOne({ email }))) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const createdUser = await User.create({ email, password: hashedPassword });
      const tokenData = TokenService.createToken(createdUser);
      return {
        success: 'User has successfully registered.',
        token: TokenService.createCookie(tokenData),
      };
    }
    return { error: 'User already exists.' };
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  login: async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (user) {
      const isPasswordMatching = await bcrypt.compare(password, user.password);
      if (isPasswordMatching) {
        const tokenData = TokenService.createToken(user);
        return {
          success: 'Logged in.',
          token: TokenService.createCookie(tokenData),
        };
      }
    }
    return { error: 'Wrong credentials.' };
  },
};
