import { HTMLAttributes } from 'react';

export type Component<C extends HTMLAttributes<HTMLElement>> = C & {
  readonly node: unknown;
};
