import { declareAtom } from '@reatom/core';

import { authorize, logout } from './actions';
import { User } from './types/User';

const initialState: User = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
};

const userAuth = declareAtom(initialState, (on) => [
  on(logout, () => initialState),
  on(authorize, (_, payload: User) => payload),
]);

export { userAuth };
