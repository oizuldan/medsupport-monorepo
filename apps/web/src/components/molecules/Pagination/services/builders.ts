import { SyntheticEvent } from 'react';

import { PaginationItemTypes } from '../types/PaginationItemTypes';
import { UsePaginationItem } from '../types/UsePaginationItem';

export const createPaginationItem = (
  item: PaginationItemTypes | number,
  disabled: boolean,
  page: number,
  count: number,
  handleClick: (event: SyntheticEvent, value: number) => void,
  buttonPage: (item: PaginationItemTypes, page: number, count: number) => number,
): UsePaginationItem =>
  typeof item === 'number'
    ? {
        onClick: (event: SyntheticEvent) => handleClick(event, item),
        type: PaginationItemTypes.Page,
        page: item,
        selected: item === page,
        disabled,
      }
    : {
        onClick: (event: SyntheticEvent) => {
          handleClick(event, buttonPage(item, page, count));
        },
        type: item,
        selected: false,
        disabled:
          disabled ||
          (item.indexOf(PaginationItemTypes.Ellipsis) === -1 &&
            (item === PaginationItemTypes.Next || item === PaginationItemTypes.Last
              ? page >= count
              : page <= 1)),
      };
