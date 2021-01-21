import { HTMLAttributes, ReactNode } from 'react';

import { ToastTypes } from './ToastTypes';

export type ToastProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'> & {
  readonly text: ReactNode;
  readonly type: ToastTypes;
};
