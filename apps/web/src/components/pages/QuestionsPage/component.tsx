import { css } from '@emotion/core';
import {
  Anchor,
  ButtonLink,
  ButtonSizes,
  ButtonVariants,
  H2,
  H3,
  Icon,
  Layout,
  P,
} from 'components';
import { colors, icons, media, typography } from 'core';
import { sequence } from 'fp-ts/Array';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/pipeable';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import React, { useMemo } from 'react';

import {
  QuestionsPageData,
  QuestionsPageData_questionCategories,
  QuestionsPageData_questions,
  QuestionsPageDataVariables,
} from './__generated__/QuestionsPageData';
import { queryQuestionsPage } from './graphql';
import { InitProps, Props } from './props';

export const QuestionsPage: NextComponentType<ApolloPageContext, InitProps, Props> = (
  props: Props,
) => {
  const { data } = props;

  const questionCategoriesData = useMemo(
    () =>
      pipe(
        O.fromNullable(data?.data?.questionCategories),
        O.chain(O.fromPredicate((v) => Array.isArray(v))),
        O.chain((qs) => sequence(O.option)(qs.map((q) => pipe(O.fromNullable(q))))),
        O.getOrElse(() => [] as ReadonlyArray<QuestionsPageData_questionCategories>),
      ),
    [data?.data?.questionCategories],
  );
  const questionsData = useMemo(
    () =>
      pipe(
        O.fromNullable(data?.data?.questions),
        O.chain(O.fromPredicate((v) => Array.isArray(v))),
        O.chain((qs) => sequence(O.option)(qs.map((q) => pipe(O.fromNullable(q))))),
        O.getOrElse(() => [] as ReadonlyArray<QuestionsPageData_questions>),
      ),
    [data?.data?.questions],
  );

  const categorisedQuestions = questionCategoriesData.map((category) => ({
    category,
    questions: questionsData.filter((question) => question.question_category?.id === category.id),
  }));

  return (
    <Layout
      headerButtons={data.data?.headerButtons}
      footerSections={data.data?.footerSections}
      headerLinks={data.data?.headerLinks}
    >
      <div className="container my-3">
        <ButtonLink variant={ButtonVariants.Flat} size={ButtonSizes.Small} className="pl-0">
          <Icon
            icon={icons.arrows.arrowBack}
            color={colors.variants.Neutral.Black}
            className="mr-1"
          />
          <P
            color={colors.variants.Neutral.Grey}
            typography={typography.variants.Element.Regular12}
          >
            {data.data?.allQuestionsPage?.goBackButtonText}
          </P>
        </ButtonLink>
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-mb-8">
          <H2 className="tw-w-full mb-3"> {data.data?.allQuestionsPage?.allQuestionText}</H2>
          <div className="tw-flex-col tw-w-full">
            {categorisedQuestions.map(({ category, questions }) => (
              <div key={category.id} className="tw-mb-8">
                <H3 className="mb-2">{category.title}</H3>
                {questions.map((question) => (
                  <Anchor
                    key={question.id}
                    href={`/question/${category.id}/${question.id}`}
                    className="tw-flex tw-px-2 tw-py-4 tw-justify-between tw-border-b tw-border-solid hover:tw-bg-purple-100 tw-border-gray-300 tw-text-left tw-w-full"
                    css={css(
                      typography.styles.contentRegular16,
                      media.queryStyled([
                        typography.styles.contentRegular16,
                        typography.styles.contentRegular16,
                        typography.styles.headingSemiBold17,
                      ]),
                    )}
                  >
                    {question.title}
                    <Icon icon={icons.arrows.keyboardArrowRight} />
                  </Anchor>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

QuestionsPage.getInitialProps = async (ctx) => {
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<QuestionsPageData, QuestionsPageDataVariables>({
    query: queryQuestionsPage,
    variables: { locale: lang },
  });

  return { data };
};
