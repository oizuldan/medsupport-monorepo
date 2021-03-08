import { CarouselProps } from 'components';
import { HTMLAttributes } from 'react';

import { Data } from './types/Data';

export type Props = HTMLAttributes<HTMLDivElement> &
  Partial<CarouselProps> & {
    readonly data: ReadonlyArray<Data>;
  };
