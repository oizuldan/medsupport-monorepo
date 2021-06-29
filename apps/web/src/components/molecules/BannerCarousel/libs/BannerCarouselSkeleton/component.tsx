import { css } from '@emotion/core';
import { Carousel, Skeleton } from 'components';
import React, { FC } from 'react';

export const BannerCarouselSkeleton: FC = () => (
  <Carousel draggable css={{ height: 500 }}>
    <Skeleton
      css={css`
        height: 500px;
        width: 100%;
      `}
    />
    <Skeleton
      css={css`
        height: 500px;
        width: 100%;
      `}
    />
    <Skeleton
      css={css`
        height: 500px;
        width: 100%;
      `}
    />
    <Skeleton
      css={css`
        height: 500px;
        width: 100%;
      `}
    />
  </Carousel>
);
