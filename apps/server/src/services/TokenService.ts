import jwt from 'jsonwebtoken';

import { DataStoredInToken, TokenData } from '../types/token';
import UserType from '../types/user';

export default {
  createToken: (user: UserType): TokenData => {
    const expiresIn = 60 * 60;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const secret: string = process.env.JWT_SECRET!;
    const dataStoredInToken: DataStoredInToken = { _id: user._id };
    return {
      expiresIn,
      token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
    };
  },

  createCookie: (tokenData: TokenData): string => {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
  },
};
