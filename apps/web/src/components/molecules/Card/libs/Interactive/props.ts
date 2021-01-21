import { colors } from 'core';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export type Props = Partial<colors.Props> &
  (
    | ButtonHTMLAttributes<HTMLButtonElement>
    | (AnchorHTMLAttributes<HTMLAnchorElement> & {
        readonly link: boolean;
      })
  );
