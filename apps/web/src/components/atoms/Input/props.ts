import { colors, typography } from 'core';
import { InputHTMLAttributes, ReactElement } from 'react';

export type Props = InputHTMLAttributes<HTMLInputElement> &
  Partial<typography.Props> &
  Partial<colors.Props> & {
    readonly focusColor?: colors.variants.AllColors;
    /**
     * @default <input>
     */
    readonly element?: ReactElement;
  };
