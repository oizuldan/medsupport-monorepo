import { ButtonLink, ButtonSizes, ButtonVariants, Icon, Layout, Markdown, P } from 'components';
import { colors, icons, typography } from 'core';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { Article, ArticleVariables } from './__generated__/Article';
import { queryArticle } from './graphql';
import { InitProps, Props } from './props';

export const ArticlePage: NextComponentType<ApolloPageContext, InitProps, Props> = (
  props: Props,
) => {
  const { data } = props;
  const router = useRouter();

  useEffect(() => {
    if (!data.article) router.push('/articles');
  }, [data.article, router]);

  return (
    <Layout>
      <div className="container my-3">
        <ButtonLink
          href="/articles"
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
            Вернуться к списку статей
          </P>
        </ButtonLink>
        {data.article && <Markdown>{data.article.content}</Markdown>}
      </div>
    </Layout>
  );
};

ArticlePage.getInitialProps = async (ctx) => {
  const id = ctx.query?.id.toString();
  const res = await ctx.apolloClient.query<Article, ArticleVariables>({
    query: queryArticle,
    variables: { id },
  });
  return res;
};
