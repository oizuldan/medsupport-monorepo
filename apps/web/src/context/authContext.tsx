import React, { createContext, useContext, useState } from 'react';

import { authContextType, Props, User } from './types/authContextType';

const authContextTypeDefaultValues: authContextType = {
  user: {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
  },
  login: () => {
    return;
  },
  register: () => {
    return;
  },
};

const AuthContext = createContext(authContextTypeDefaultValues);

export const useAuth = (): authContextType => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
  });

  const login = (payload: User): void => {
    setUser(payload);
  };

  const register = (payload: User): void => {
    setUser(payload);
  };

  const value = {
    user,
    login,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
