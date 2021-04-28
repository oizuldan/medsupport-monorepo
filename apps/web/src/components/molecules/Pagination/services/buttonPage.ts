import { PaginationItemTypes } from '../types/PaginationItemTypes';

// Map the button type to its page number
export const buttonPage = (type: PaginationItemTypes, page: number, count: number): number => {
  switch (type) {
    case PaginationItemTypes.First:
      return 1;
    case PaginationItemTypes.Previous:
      return page - 1;
    case PaginationItemTypes.Next:
      return page + 1;
    case PaginationItemTypes.Last:
      return count;
    default:
      return NaN;
  }
};
