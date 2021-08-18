import { Anchor, ButtonLink, ButtonSizes, ButtonVariants, Icon, Layout, P } from 'components';
import { colors, icons, typography } from 'core';
import { sequence } from 'fp-ts/Array';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/pipeable';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import Head from 'next/head';
import React, { useCallback, useMemo } from 'react';

import {
  FaqPageData,
  FaqPageData_faq_actualTopics_questions,
  FaqPageData_questionCategories,
  FaqPageDataVariables,
} from './__generated__/FaqPageData';
import { queryFaqPage } from './graphql';
import { Questions } from './libs/Questions';
import { RelevantTopics } from './libs/RelevantTopics';
import { VaccineBanner } from './libs/VaccineBanner';
import { InitProps, Props } from './props';

export const VaccinePage: NextComponentType<ApolloPageContext, InitProps, Props> = (
  props: Props,
) => {
  const { data, lang } = props;

  const questions = useMemo(
    () =>
      pipe(
        O.fromNullable(data?.data?.faq?.actualTopics?.questions),
        O.chain(O.fromPredicate((v) => Array.isArray(v))),
        O.chain((qs) => sequence(O.option)(qs.map((q) => pipe(O.fromNullable(q))))),
        O.getOrElseW(() => [] as ReadonlyArray<FaqPageData_faq_actualTopics_questions>),
      ),
    [data?.data?.faq?.actualTopics?.questions],
  );
  const questionCategories = useMemo(
    () =>
      pipe(
        O.fromNullable(data?.data?.questionCategories),
        O.chain(O.fromPredicate((v) => Array.isArray(v))),
        O.chain((qs) => sequence(O.option)(qs.map((q) => pipe(O.fromNullable(q))))),
        O.getOrElseW(() => [] as ReadonlyArray<FaqPageData_questionCategories>),
      ),
    [data?.data?.questionCategories],
  );

  const transformUri = useCallback(
    (uri: string | undefined) =>
      uri ? (uri.startsWith('http') ? uri : `${process.env.BASE_URL}${uri}`) : '',
    [],
  );

  return (
    <>
      <Head>
        <title>{data.data?.faq?.bannerTitle}</title>
        <meta name="keywords">Covid-19 вакцинация вакцины</meta>
        <meta name="description">{data.data?.faq?.bannerSubtitle.substring(0, 200)}</meta>
        <meta property="og:title" content={data.data?.faq?.bannerTitle} />
        <meta
          property="og:description"
          content={data.data?.faq?.bannerSubtitle.substring(0, 200)}
        />
        <meta property="og:image" content="https://medsupport.dev/static/images/logoBig.png" />
        <meta property="og:locale" content={lang === 'ru_RU' ? 'ru_RU' : 'kz_KZ'} />
        <meta property="og:locale:alternate" content={lang === 'ru_RU' ? 'kz_KZ' : 'ru_RU'} />
        <meta property="og:site_name" content="medsupport" />
        <meta property="og:type" content="article" />
        <meta property="og:article:section" content="medicine" />
        <meta property="og:article:tag" content="Covid-19" />
        <meta property="og:article:tag" content="Covid" />
        <meta property="og:article:tag" content="вакцина" />
        <meta property="og:article:tag" content="вакцинация" />
        <meta property="og:article:tag" content="пандемия" />
      </Head>
      <Layout
        headerButtons={data.data?.headerButtons}
        footerSections={data.data?.footerSections}
        headerLinks={data.data?.headerLinks}
      >
        <VaccineBanner
          title={data.data?.faq?.bannerTitle || ''}
          subtitle={data.data?.faq?.bannerSubtitle || ''}
          imageURL={transformUri(data.data?.faq?.bannerImage?.url)}
          alt={data.data?.faq?.bannerImage?.name || ''}
        />
        <RelevantTopics questions={questions} title={data?.data?.faq?.relevantTopicsText || ''} />
        <div className="mt-4 tw-bg-purple-500">
          <div className="container tw-flex tw-flex-col my-3 pt-4 pb-4">
            <Questions
              questionCategories={questionCategories}
              readMoreText={data.data?.faq?.readMoreText || ''}
            />
            <ButtonLink
              href="/questions"
              className="tw-self-center tw-mt-8"
              variant={ButtonVariants.Outlined}
              size={ButtonSizes.Large}
            >
              <P
                color={colors.variants.Neutral.White}
                typography={typography.variants.Element.Bold20}
              >
                {data.data?.faq?.showAllQuestions}
              </P>
              <Icon icon={icons.arrows.keyboardArrowRight} color={colors.variants.Neutral.White} />
            </ButtonLink>
            {data.data?.faq?.sponsor && (
              <div className="tw-self-center tw-flex tw-flex-col tw-items-center tw-mt-4 tw-text-white">
                <P
                  color={colors.variants.Neutral.White}
                  typography={typography.variants.Element.SemiBold16}
                >
                  {data.data.faq.sponsor.title}
                </P>
                <Anchor href={data.data.faq.sponsor.link} target="_blank">
                  <img
                    className="tw-mt-2"
                    alt={data.data.faq.sponsor.image?.name}
                    src={transformUri(data.data.faq.sponsor.image?.url)}
                  />
                </Anchor>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

VaccinePage.getInitialProps = async (ctx) => {
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<FaqPageData, FaqPageDataVariables>({
    query: queryFaqPage,
    variables: { locale: lang },
  });

  return { data, lang };
};
