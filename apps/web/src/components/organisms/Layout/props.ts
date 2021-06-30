import React from 'react';

import { FooterProps } from '../Footer';
import { HeaderProps } from '../Header';

export type Props = HeaderProps &
  FooterProps & {
    readonly children: React.ReactFragment;
  };
