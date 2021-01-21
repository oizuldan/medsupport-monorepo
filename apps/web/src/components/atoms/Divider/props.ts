import { colors } from 'core';
import { HTMLAttributes } from 'react';

import { Directions } from './types/Directions';

export type Props = HTMLAttributes<HTMLHRElement> &
  Partial<colors.Props> & {
    /**
     * @default Directions.Horizontal
     */
    readonly direction?: Directions;
  };
