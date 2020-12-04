import { HTMLAttributes, ReactElement } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  readonly children: ReactElement<HTMLInputElement>;
  readonly leftElement?: ReactElement;
  readonly rightElement?: ReactElement;
};
