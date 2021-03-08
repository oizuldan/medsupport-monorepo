import { Anchor, Divider, H2, H3, Layout, P } from 'components';
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

      <div className="container d-flex align-items-center">
        <img className="mr-3" alt="mainNews" height={400} src="/static/mainNews.png" />
        <div className="d-flex flex-column ml-3">
          <H3 className="mb-3">ПОЛЬЗА И ВРЕД ПРАВИЛЬНОГО ПИТАНИЯ</H3>
          <P className="mb-2" typography={typography.variants.Heading.Regular22}>
            Статья о пользе и вреде правильного питания. Мифы и реальность питания. Статья о пользе
            и вреде правильного питания. Мифы и реальность питания. Статья о пользе и вреде
            правильного питания. Мифы и реальность питания. Статья о пользе и вреде правильного
            питания. Мифы и реальность питания.
          </P>
          <Anchor className="align-self-end" typography={typography.variants.Heading.SemiBold17}>
            Читать далее...
          </Anchor>
        </div>
      </div>

      <Divider className="my-5" />

      <div className="mb-5 container d-flex flex-column">
        <H2 className="mb-4">Новости</H2>
        <div className="d-flex justify-content-between">
          {mock.newsData.map((news, i) => (
            <div
              key={news.imageAlt}
              className="d-flex flex-column"
              css={{ marginLeft: i === 1 ? '2rem' : 0, marginRight: i === 1 ? '2rem' : 0 }}
            >
              <img className="mb-3" alt={news.imageAlt} src={news.imageURL} />
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
          ))}
        </div>
      </div>
    </Layout>
  );
};
