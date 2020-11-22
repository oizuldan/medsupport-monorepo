import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLButtonElement> & {
  readonly size?: 10;
  readonly backgroundColor?: 'red';
};
