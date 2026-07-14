import { MskLayout } from 'components';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import Head from 'next/head';
import React from 'react';

import { MainPage, MainPageVariables } from './__generated__/MainPage';
import { queryMainPage } from './graphql';
import { Contact } from './libs/Contact';
import { Hero } from './libs/Hero';
import { Impact } from './libs/Impact';
import { KbSplit } from './libs/KbSplit';
import { Mission } from './libs/Mission';
import { PartnerTeaser } from './libs/PartnerTeaser';
import { PartnerWall } from './libs/PartnerWall';
import { Portfolio } from './libs/Portfolio';
import { InitProps, Props } from './props';

const isNotNull = <T,>(value: T | null): value is T => value !== null;

export const HomePage: NextComponentType<ApolloPageContext, InitProps, Props> = (props: Props) => {
  const cms = props.data?.data;
  const headerLinks = cms?.headerLinks?.[0]?.links?.filter(isNotNull).map((link) => ({
    title: link.title ?? undefined,
    link: link.link ?? undefined,
  }));
  const footerSections = cms?.footerSections?.[0]?.sections?.filter(isNotNull).map((section) => ({
    title: section.title,
    links: section.links?.filter(isNotNull).map((link) => ({
      title: link.title ?? undefined,
      link: link.link ?? undefined,
    })),
  }));

  return (
    <>
      <Head>
        <title>Medsupportkz — Доказательная медицина для Казахстана</title>
      </Head>
      <MskLayout dark links={headerLinks} footerSections={footerSections}>
        <Hero />
        <Mission />
        <Impact />
        <Portfolio cards={cms?.homePageSpecialSection?.interactiveCard ?? []} />
        <KbSplit />
        <PartnerTeaser />
        <PartnerWall />
        <Contact />
      </MskLayout>
    </>
  );
};

HomePage.getInitialProps = async (ctx) => {
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<MainPage, MainPageVariables>({
    query: queryMainPage,
    variables: { locale: lang },
  });

  return { data, lang };
};
