import { css } from '@emotion/core';
import { Button, Carousel, H2, P } from 'components';
import { typography } from 'core';
import React, { FC } from 'react';

import { Props } from './props';

export const BannerCarouselMobile: FC<Props> = ({ data, ...rest }: Props) => (
  <Carousel draggable css={{ height: 500 }} {...rest}>
    {data.map((banner, i) => (
      <div key={i} className="d-flex justify-content-center ">
        <div
          className="w-100"
          css={css`
            background-image: url(${banner.imageURL});
            background-repeat: no-repeat;
            background-size: auto 100%;
            height: 500px;
          `}
        >
          <div className="container h-100">
            <div className="h-100 w-100 d-flex flex-column justify-content-center">
              <H2 className="mb-3">{banner.title}</H2>
              <P className="mb-5" typography={typography.variants.Element.SemiBold16}>
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
