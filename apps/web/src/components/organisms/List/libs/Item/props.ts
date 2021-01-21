import { colors, typography } from 'core';
import { LiHTMLAttributes } from 'react';

export type Props = LiHTMLAttributes<HTMLLIElement> &
  Partial<typography.Props> &
  Partial<colors.Props> & {
    /**
     * Adds background color on hover.
     */
    readonly interactive?: boolean;
  };
