import { colors, services } from 'core';

import { BaseProps } from './BaseProps';
import { Variants } from './Variants';

export type RaisedProps = BaseProps<
  Variants.Raised,
  Partial<services.LoadingProps> & Partial<colors.Props>
>;
