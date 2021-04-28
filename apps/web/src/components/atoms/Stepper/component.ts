import { createElement, FC, Fragment } from 'react';

import { Props } from './props';

export const Stepper: FC<Props> = ({ active, children }: Props) =>
  createElement(
    Fragment,
    null,
    children.find((n) => n.props.id === active),
  );
