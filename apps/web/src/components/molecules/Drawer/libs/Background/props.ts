import { colors } from 'core';
import { CSSProperties, HTMLAttributes } from 'react';

import { Directions } from '../../types/Directions';

export type Props = HTMLAttributes<HTMLDivElement> &
  Partial<colors.Props> & {
    /**
     * @description value to specify appearance behavior
     */
    readonly direction: Directions;
    /**
     * @description value to control width
     */
    readonly width?: CSSProperties['width'];
    /**
     * @description value to control height
     */
    readonly height?: CSSProperties['height'];
    /**
     * @description controls the active state if present. Prior over inner active state.
     */
    readonly active?: boolean;
  };
