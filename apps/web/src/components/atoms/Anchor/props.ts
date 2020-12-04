import { colors, typography } from 'core';
import { AnchorHTMLAttributes } from 'react';

export type Props = Partial<colors.Props> &
  Partial<typography.Props> &
  AnchorHTMLAttributes<HTMLAnchorElement>;
