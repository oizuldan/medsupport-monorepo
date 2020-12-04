import classNames from 'classnames';
import React, { FC } from 'react';

import { Props } from './props';

export const Content: FC<Props> = ({ className, children, ...rest }: Props) => (
  <div className={classNames(className, 'p-3')} {...rest}>
    {children}
  </div>
);
