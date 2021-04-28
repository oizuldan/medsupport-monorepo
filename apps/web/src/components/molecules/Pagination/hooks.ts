import { SyntheticEvent, useCallback, useMemo, useState } from 'react';

import { createPaginationItem } from './services/builders';
import { buttonPage } from './services/buttonPage';
import { range } from './services/range';
import { PaginationItemTypes } from './types/PaginationItemTypes';
import { UsePaginationProps } from './types/UsePaginationProps';
import { UsePaginationResult } from './types/UsePaginationResult';

export const usePagination = (props: UsePaginationProps): UsePaginationResult => {
  const {
    boundaryCount = 1,
    count = 1,
    page: pageProp,
    defaultPage = 1,
    disabled = false,
    onChange: handleChange,
    hidePrevButton = false,
    hideNextButton,
    siblingCount = 1,
    ...other
  } = props;
  const [page, setPageState] = useState(pageProp || defaultPage);

  const handleClick = useCallback(
    (event: SyntheticEvent, value: number) => {
      if (handleChange) {
        handleChange(event, value);
      }

      setPageState(value);
    },
    [handleChange],
  );

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);

  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      page - siblingCount,
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1,
    ),
    // Greater than startPages
    boundaryCount + 2,
  );

  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      page + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2,
    ),
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1,
  );

  // Basic list of items to render
  // e.g itemsList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const itemsList = useMemo<ReadonlyArray<PaginationItemTypes | number>>(
    () => [
      ...(hidePrevButton ? [] : [PaginationItemTypes.Previous]),
      ...startPages,

      // Start ellipsis
      ...(siblingsStart > boundaryCount + 2
        ? [PaginationItemTypes.StartEllipsis]
        : boundaryCount + 1 < count - boundaryCount
        ? [boundaryCount + 1]
        : []),

      // Sibling pages
      ...range(siblingsStart, siblingsEnd),

      // End ellipsis
      ...(siblingsEnd < count - boundaryCount - 1
        ? [PaginationItemTypes.EndEllipsis]
        : count - boundaryCount > boundaryCount
        ? [count - boundaryCount]
        : []),

      ...endPages,
      ...(hideNextButton ? [] : [PaginationItemTypes.Next]),
    ],
    [
      boundaryCount,
      count,
      endPages,
      hideNextButton,
      hidePrevButton,
      siblingsEnd,
      siblingsStart,
      startPages,
    ],
  );

  const items = itemsList.map((item) =>
    createPaginationItem(item, disabled, page, count, handleClick, buttonPage),
  );

  return {
    items,
    ...other,
  };
};
