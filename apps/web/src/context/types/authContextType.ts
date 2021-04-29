import { ReactNode } from 'react';

export type User = {
  readonly firstName: string;
  readonly lastName: string;
  readonly username: string;
  readonly email: string;
};

export type authContextType = {
  readonly user: User;
  readonly login: (payload: User) => void;
  readonly register: (payload: User) => void;
};

export type Props = { readonly children: ReactNode };
