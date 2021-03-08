import { colors } from 'core';
import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> &
  Partial<colors.Props> & {
    readonly disableBorder?: boolean;
    /**
     * @default Element.Line
     */
    readonly borderColor?: colors.variants.AllColors;
  };
