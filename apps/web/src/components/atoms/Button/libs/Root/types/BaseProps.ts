import { typography } from 'core';
import { CSSProperties } from 'react';

import { Sizes } from './Sizes';
import { Variants } from './Variants';

export type BaseProps<V extends Variants = Variants.Raised, P = Record<string, unknown>> = P &
  Partial<typography.Props> & {
    /**
     * @default Variants.Raised
     */
    readonly variant?: V;
    /**
     * @default Sizes.Default
     */
    readonly size?: Sizes;
    /**
     * @desc Fully disables the button. Set's to `true` when loading is `true` as well.
     */
    readonly disabled?: boolean;
    /**
     * @default `text-transform` style.
     */
    readonly textTransform?: CSSProperties['textTransform'];
    /**
     * @desc Rounds the corners of the button outer border edge. Sets  to '4px' when its true.
     */
    readonly bordered?: boolean;
  };
