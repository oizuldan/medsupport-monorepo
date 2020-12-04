import classNames from 'classnames';
import React, { FC } from 'react';

import { Props } from './props';

export const Title: FC<Props> = ({ className, children, ...rest }: Props) => (
  <div className={classNames(className, 'px-3', 'pt-3')} {...rest}>
    {children}
  </div>
);
