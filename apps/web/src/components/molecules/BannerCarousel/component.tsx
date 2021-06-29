import { css } from '@emotion/core';
import { Button, Carousel, H1, P } from 'components';
import { typography } from 'core';
import React, { FC } from 'react';

import { Props } from './props';

export const BannerCarousel: FC<Props> = ({ data, ...rest }: Props) => (
  <Carousel draggable css={{ height: 500 }} {...rest}>
    {data.map((banner, i) => (
      <div key={i} className="d-flex justify-content-center ">
        <div
          className="w-100"
          css={css`
            max-width: 1440px;
            height: 500px;
          `}
        >
          <div
            className="container h-100 px-5"
            css={css`
              background-image: url(${banner.imageURL});
              background-repeat: no-repeat;
              background-size: auto 100%;
              background-position: center;
            `}
          >
            <div
              className="h-100 d-flex flex-column justify-content-center"
              css={css`
                width: 45%;
              `}
            >
              <H1 className="mb-3">{banner.title}</H1>
              <P className="mb-5" typography={typography.variants.Heading.Medium22}>
                {banner.subtitle}
              </P>
              <Button className="w-100" css={{ maxWidth: 305 }} bordered>
                {banner.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Carousel>
);
