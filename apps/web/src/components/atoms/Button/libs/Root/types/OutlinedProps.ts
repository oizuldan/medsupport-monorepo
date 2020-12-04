import { colors, services } from 'core';

import { BaseProps } from './BaseProps';
import { Variants } from './Variants';

export type OutlinedProps = BaseProps<
  Variants.Outlined,
  Partial<colors.Props> & Partial<services.LoadingProps>
>;
