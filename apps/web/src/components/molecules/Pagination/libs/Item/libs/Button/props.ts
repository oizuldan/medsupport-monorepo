import { ButtonHTMLAttributes } from 'react';

import { PaginationItemTypes } from '../../../../types/PaginationItemTypes';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  readonly selected: boolean;
  readonly itemType: PaginationItemTypes;
};
