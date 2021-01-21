import { colors, typography } from 'core';
import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLElement> &
  Partial<colors.Props> &
  Partial<typography.Props> & {
    readonly as: keyof JSX.IntrinsicElements;
  };
