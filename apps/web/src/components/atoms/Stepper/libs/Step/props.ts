import { HTMLAttributes } from 'react';
import { Primitive } from 'utility-types';

export type Props = Omit<HTMLAttributes<HTMLDivElement>, 'id'> & {
  readonly id: Primitive;
};
