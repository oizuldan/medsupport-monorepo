import { colors } from 'core';
import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> &
  Partial<colors.Props> & {
    /**
     * @description controls the active state of the component
     */
    readonly active: boolean;
    readonly closeOnClick?: boolean;
  };
