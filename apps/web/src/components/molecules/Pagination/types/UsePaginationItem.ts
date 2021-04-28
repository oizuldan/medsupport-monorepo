import { PaginationItemTypes } from './PaginationItemTypes';

export type UsePaginationItem = {
  readonly onClick: React.ReactEventHandler;
  readonly type: PaginationItemTypes;
  readonly page?: number;
  readonly selected: boolean;
  readonly disabled: boolean;
};
