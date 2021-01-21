import { colors } from 'core';
import { LabelHTMLAttributes } from 'react';

export type Props = LabelHTMLAttributes<HTMLLabelElement> &
  Partial<colors.Props> & {
    readonly htmlFor: string;
    readonly mainText: string;
    readonly helperText?: string;
  };
