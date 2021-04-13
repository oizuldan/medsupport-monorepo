import { Anchor, Divider, H2, Layout, P } from 'components';
import { media, typography } from 'core';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

import * as mock from './mock';

const BannerCarouselMobile = dynamic(() => import('./libs/BannerCarouselMobile'), {
  ssr: false,
});
const BannerCarousel = dynamic(() => import('./libs/BannerCarousel'), {
  ssr: false,
});

export const HomePage: NextPage = () => {
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
        <div className="d-flex justify-content-between flex-lg-row flex-column align-items-center">
          {mock.newsData.map((news, i) => (
            <>
              <div
                key={news.imageAlt}
                className="d-flex flex-column mx-lg-2 mx-0 my-lg-0 my-3"
                css={{
                  marginTop: i === 0 ? '0 !important' : 'initial',
                  marginBottom: i === mock.newsData.length - 1 ? '0 !important' : 'initial',
                  marginRight: i === mock.newsData.length - 1 ? '0 !important' : 'initial',
                  marginLeft: i === 0 ? '0 !important' : 'initial',
                  maxWidth: 400,
                }}
              >
                <img className="mb-3 h-100 w-100" alt={news.imageAlt} src={news.imageURL} />
                <P className="mb-1" typography={typography.variants.Heading.Regular22}>
                  {news.text}
                </P>
                <Anchor
                  className="align-self-end"
                  typography={typography.variants.Heading.SemiBold17}
                >
                  {news.buttonText}
                </Anchor>
              </div>
              {i !== mock.newsData.length - 1 && <Divider className="d-lg-none d-block" />}
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
};
