import { colors, typography } from 'core';
import { Dispatch, HTMLAttributes, SetStateAction } from 'react';

export type Props = HTMLAttributes<HTMLElement> &
  Partial<typography.Props> &
  Partial<colors.Props> & {
    readonly setFile: Dispatch<SetStateAction<File | undefined>>;
    readonly file?: File;
    readonly focusColor?: colors.variants.AllColors;
  };
