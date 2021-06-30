import { css } from '@emotion/core';
import { ButtonLink, Carousel, H2, P } from 'components';
import { typography } from 'core';
import React, { FC } from 'react';

import { Props } from './props';

export const BannerCarouselMobile: FC<Props> = ({ banners, ...rest }: Props) =>
  banners?.[0]?.banners ? (
    <Carousel draggable css={{ height: 500 }} {...rest}>
      {banners[0].banners.map((banner, i) => {
        const link = `${
          process.env.BASE_URL !== undefined ? process.env.BASE_URL : 'https://medsupport.dev/cms'
        }${banner?.image?.url ? banner.image.url : ''}`;
        return (
          <div key={i} className="d-flex justify-content-center">
            <div
              className="w-100"
              css={css`
                background-image: url(${link});
                background-repeat: no-repeat;
                background-size: auto 100%;
                background-position: center;
                height: 500px;
              `}
            >
              <div className="container h-100">
                <div className="h-100 w-100 d-flex flex-column justify-content-center">
                  <H2 className="mb-3">{banner?.title}</H2>
                  <P className="mb-5" typography={typography.variants.Element.SemiBold16}>
                    {banner?.subtitle}
                  </P>
                  <ButtonLink
                    href={banner?.buttonLink || ''}
                    className="w-100"
                    css={{ maxWidth: 305 }}
                    bordered
                    target="_blank"
                  >
                    {banner?.buttonTitle}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  ) : null;
