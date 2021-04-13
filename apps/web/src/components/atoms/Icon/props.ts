import { colors, icons } from 'core';
import { SVGProps } from 'react';

import { Sizes } from './types/Sizes';

export type Props = SVGProps<SVGSVGElement> &
  Partial<colors.Props> & {
    readonly icon: icons.Icon;
    readonly size?: Sizes;
  };
