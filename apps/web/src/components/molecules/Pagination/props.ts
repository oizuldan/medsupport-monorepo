import { HTMLAttributes, SyntheticEvent } from 'react';

import { UsePaginationItem as PaginationRenderItemParams } from './types/UsePaginationItem';

export type Props = Omit<HTMLAttributes<HTMLElement>, 'onChange'> & {
  readonly count: number;
  readonly page?: number;
  readonly defaultPage?: number;
  readonly boundaryCount?: number;
  readonly siblingCount?: number;
  readonly onChange?: (event: SyntheticEvent, value: number) => void;
  readonly renderItem?: (params: PaginationRenderItemParams) => JSX.Element;
  readonly spaceBetweenItems?: number;
};
