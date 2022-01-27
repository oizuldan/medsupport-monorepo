import { ButtonLink, ButtonSizes, ButtonVariants, Icon, Layout, Markdown, P } from 'components';
import { colors, icons, typography } from 'core';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { Article, ArticleVariables } from './__generated__/Article';
import { queryArticle } from './graphql';
import { InitProps, Props } from './props';

export const ArticlePage: NextComponentType<ApolloPageContext, InitProps, Props> = (
  props: Props,
) => {
  const { data, lang } = props;
  const router = useRouter();
  const content =
    data?.data?.article?.locale === lang
      ? data?.data?.article?.content
      : (data?.data?.article?.localizations?.[0]?.content as string);

  useEffect(() => {
    if ((!content || content.length === 0) && window) {
      const newURL = window.location.href.replace(/article\/.+/, 'articles');
      window.location.assign(newURL);
    }
  }, [content, lang, router]);

  return (
    <>
      <Head>
        <title>{props.data?.data?.article?.title}</title>
        <meta name="keywords" content={props.data?.data?.article?.title} />
        <meta
          property="description"
          content={props.data?.data?.article?.content.substring(0, 200)}
        />
        <meta property="og:title" content={props.data?.data?.article?.title} />
        <meta
          property="og:description"
          content={props.data?.data?.article?.content.substring(0, 200)}
        />
        <meta property="og:image" content="https://medsupport.kz/static/images/logoBig.png" />
        <meta property="og:locale" content={lang === 'ru_RU' ? 'ru_RU' : 'kz_KZ'} />
        <meta property="og:locale:alternate" content={lang === 'ru_RU' ? 'kz_KZ' : 'ru_RU'} />
        <meta property="og:site_name" content="medsupport" />
        <meta property="og:site_name" content="medsupport" />
        <meta property="og:type" content="article" />
        <meta property="og:article:section" content="medicine" />
      </Head>
      <Layout
        headerButtons={props.data?.data?.headerButtons}
        footerSections={props.data?.data?.footerSections}
        headerLinks={props.data?.data?.headerLinks}
      >
        <div className="container my-3">
          <ButtonLink
            href={props.data?.data?.artilcesPageBackButton?.backButton?.link}
            variant={ButtonVariants.Flat}
            size={ButtonSizes.Small}
            className="pl-0"
          >
            <Icon
              icon={icons.arrows.arrowBack}
              color={colors.variants.Neutral.Black}
              className="mr-1"
            />
            <P
              color={colors.variants.Neutral.Grey}
              typography={typography.variants.Element.Regular12}
            >
              {data?.data?.artilcesPageBackButton?.backButton?.title}
            </P>
          </ButtonLink>
          {content && <Markdown>{content}</Markdown>}
        </div>
      </Layout>
    </>
  );
};

ArticlePage.getInitialProps = async (ctx) => {
  const id = ctx.query?.id.toString();
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<Article, ArticleVariables>({
    query: queryArticle,
    variables: { id, locale: lang },
  });
  return { data, lang };
};
