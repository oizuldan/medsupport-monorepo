import axios from 'axios';
import { BannerCarouselSkeleton, CardInteractive, Divider, H2, Layout, P } from 'components';
import { colors, media, services, typography } from 'core';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

import { NewsItem } from '../NewsItemPage';
import * as mock from './mock';
import { Props } from './props';

const BannerCarouselMobile = dynamic(() => import('./libs/BannerCarouselMobile'), {
  ssr: false,
  // eslint-disable-next-line react/display-name
  loading: () => <BannerCarouselSkeleton />,
});
const BannerCarousel = dynamic(() => import('./libs/BannerCarousel'), {
  ssr: false,
  // eslint-disable-next-line react/display-name
  loading: () => <BannerCarouselSkeleton />,
});

export const HomePage: NextPage<Props> = ({ news }: Props) => {
  const isMobile = media.useMobileDetector().phone();

  return (
    <Layout>
      {isMobile ? (
        <div>
          <BannerCarouselMobile data={mock.bannerCarouselData} />
        </div>
      ) : (
        <div className="py-3">
          <BannerCarousel data={mock.bannerCarouselData} />
        </div>
      )}

      <Divider className="my-5" />

      <div className="mb-5 container d-flex flex-column">
        <H2 className="mb-4">Новости</H2>
        <div className="row justify-content-center">
          {news.map(({ previewImage, createdAt, title, id }, i) => (
            <CardInteractive
              key={title + i}
              link
              type="a"
              className="col-lg-4 col-md-6 col-12 p-3"
              color={colors.variants.Background.Primary}
              href={`news-item/${id}`}
            >
              <div
                className="d-flex flex-column"
                css={{
                  marginTop: i === 0 ? '0 !important' : 'initial',
                  marginBottom: i === news.length - 1 ? '0 !important' : 'initial',
                  marginRight: i === news.length - 1 ? '0 !important' : 'initial',
                  marginLeft: i === 0 ? '0 !important' : 'initial',
                  maxWidth: 400,
                }}
              >
                <img
                  className="mb-3"
                  alt={previewImage.name}
                  height={250}
                  css={{
                    objectFit: 'cover',
                  }}
                  src={`${process.env.BASE_URL}${previewImage.url}`}
                />
                <P className="mb-1" typography={typography.variants.Content.Regular16}>
                  {title}
                </P>
                <P
                  className="mb-1"
                  typography={typography.variants.Element.Regular16}
                  color={colors.variants.Neutral.Grey}
                >
                  {services.parseDate(createdAt, 'ru')}
                </P>
              </div>
              {i !== news.length - 1 && <Divider className="d-md-none d-block mt-4" />}
            </CardInteractive>
          ))}
        </div>
      </div>
    </Layout>
  );
};

HomePage.getInitialProps = async () => {
  const res = await axios.get<ReadonlyArray<NewsItem>>(
    `${process.env.BASE_URL}/news-items?_limit=3`,
  );
  return { news: res.data };
};
