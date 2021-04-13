import React, { FC } from 'react';

import { Props } from './props';
import { createSvgPath } from './services/createSvgPath';
import { Sizes } from './types/Sizes';

export const Icon: FC<Props> = ({
  icon,
  color,
  fillRule = 'nonzero',
  clipRule = 'evenodd',
  size = Sizes.Default,
  ...rest
}: Props) => {
  // Width and Height must be integer.
  const width = Math.round(icon.width * size);
  const height = Math.round(icon.height * size);
  const viewBox = `0 0 ${icon.width} ${icon.height}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fillRule={fillRule}
      clipRule={clipRule}
      css={{ fill: color }}
      {...rest}
    >
      {createSvgPath(icon.path)}
    </svg>
  );
};
