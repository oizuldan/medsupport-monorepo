import { declareAction } from '@reatom/core';

import { User } from './types/User';

export const authorize = declareAction<User>();
export const logout = declareAction();
