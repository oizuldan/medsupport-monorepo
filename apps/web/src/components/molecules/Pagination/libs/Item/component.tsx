import { Icon, P } from 'components';
import { colors, icons, typography } from 'core';
import React, { FC } from 'react';

import { PaginationItemTypes } from '../../types/PaginationItemTypes';
import { Button } from './libs/Button';
import { Ellipsis } from './libs/Ellipsis';
import { Props } from './props';

export const Item: FC<Props> = ({ type, page, onClick, selected, disabled, ...rest }: Props) => {
  const buttonTextColorStyles = selected
    ? colors.variants.Brand.Purple
    : colors.variants.Neutral.Black;
  const buttonIconColorStyles = disabled
    ? colors.variants.Neutral.LightGrey
    : colors.variants.Neutral.Black;

  return (
    <div {...rest}>
      {type === PaginationItemTypes.StartEllipsis || type === PaginationItemTypes.EndEllipsis ? (
        <Ellipsis />
      ) : (
        <Button onClick={onClick} disabled={disabled} selected={selected} itemType={type}>
          {type === PaginationItemTypes.Page && (
            <P typography={typography.variants.Content.Regular16} color={buttonTextColorStyles}>
              {page}
            </P>
          )}
          {type === PaginationItemTypes.Previous && (
            <Icon icon={icons.arrows.keyboardArrowLeft} color={buttonIconColorStyles} />
          )}
          {type === PaginationItemTypes.Next && (
            <Icon icon={icons.arrows.keyboardArrowRight} color={buttonIconColorStyles} />
          )}
        </Button>
      )}
    </div>
  );
};
