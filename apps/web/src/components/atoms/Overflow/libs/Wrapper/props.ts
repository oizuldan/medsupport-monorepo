import { colors } from 'core';
import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> &
  Partial<colors.Props> & {
    /**
     * @description value to control z-index
     */
    readonly zIndex?: number;
  };
