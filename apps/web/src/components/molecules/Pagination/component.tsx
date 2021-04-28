import styled from '@emotion/styled';
import React, { FC } from 'react';

import { usePagination } from './hooks';
import { Item } from './libs/Item';
import { Props } from './props';

const PaginationBase: FC<Props> = ({
  count,
  page,
  defaultPage,
  siblingCount,
  boundaryCount,
  spaceBetweenItems,
  renderItem = (item) => <Item {...item} />,
  onChange,
  ...rest
}: Props) => {
  const { items } = usePagination({
    count,
    onChange,
    page,
    siblingCount,
    boundaryCount,
    defaultPage,
    spaceBetweenItems,
  });

  return (
    <nav {...rest}>
      <ul className="d-flex">
        {items.map((item, index) => (
          <li key={index}>
            {renderItem({
              ...item,
            })}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const Pagination = styled(PaginationBase)<Props>`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin-right: ${(props) => `${props.spaceBetweenItems}px;`};

    &:last-child {
      margin-right: 0;
    }
  }
`;

Pagination.defaultProps = {
  spaceBetweenItems: 4,
};
