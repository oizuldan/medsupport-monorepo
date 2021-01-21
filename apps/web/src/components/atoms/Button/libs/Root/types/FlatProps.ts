import { colors } from 'core';

import { BaseProps } from './BaseProps';
import { Variants } from './Variants';

export type FlatProps = BaseProps<
  Variants.Flat,
  Partial<colors.Props> & {
    /**
     * @desc Adds an underlined text line.
     */
    readonly underlined?: boolean;
  }
>;
