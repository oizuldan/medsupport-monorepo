import { createElement, FC } from 'react';

import { Props } from './props';

export const Step: FC<Props> = ({ children, ...rest }: Props) =>
  createElement('div', rest, children);
