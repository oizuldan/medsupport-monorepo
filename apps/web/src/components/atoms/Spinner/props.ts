import { colors } from 'core';
import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> &
  Partial<colors.Props> & {
    /**
     * @description height and width of component
     */
    readonly size?: number;
    /**
     * @description rotation animation in seconds
     * @default 0.75 seconds
     */
    readonly rotationTime?: number;
  };
