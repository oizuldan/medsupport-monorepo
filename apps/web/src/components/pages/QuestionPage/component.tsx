import { css } from '@emotion/core';
import {
  Anchor,
  ButtonLink,
  ButtonSizes,
  ButtonVariants,
  Dropdown,
  H2,
  Icon,
  LastUpdated,
  Layout,
  P,
} from 'components';
import { colors, icons, media, typography } from 'core';
import { sequence } from 'fp-ts/Array';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/pipeable';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import React, { useEffect, useMemo } from 'react';

import {
  QuestionPageData,
  QuestionPageData_questionCategory_questions,
  QuestionPageDataVariables,
} from './__generated__/QuestionPageData';
import { queryQuestionPage } from './graphql';
import { InitProps, Props } from './props';

export const QuestionPage: NextComponentType<ApolloPageContext, InitProps, Props> = (
  props: Props,
) => {
  const { data, id, lang } = props;

  const questions = useMemo(
    () =>
      pipe(
        O.fromNullable(data?.data?.questionCategory?.questions),
        O.chain(O.fromPredicate((v) => Array.isArray(v))),
        O.chain((qs) => sequence(O.option)(qs.map((q) => pipe(O.fromNullable(q))))),
        O.getOrElse(() => [] as ReadonlyArray<QuestionPageData_questionCategory_questions>),
      ),
    [data?.data?.questionCategory?.questions],
  );

  useEffect(() => {
    if (id) {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout
      headerButtons={props.data?.data?.headerButtons}
      footerSections={props.data?.data?.footerSections}
      headerLinks={props.data?.data?.headerLinks}
    >
      <div className="container mt-3 tw-mb-8">
        <ButtonLink
          href="/vxn"
          variant={ButtonVariants.Flat}
          size={ButtonSizes.Small}
          className="pl-0"
        >
          <Icon
            icon={icons.arrows.keyboardArrowLeft}
            color={colors.variants.Neutral.Black}
            className="mr-1"
          />
          <P
            color={colors.variants.Neutral.Grey}
            typography={typography.variants.Element.Regular12}
          >
            {props.data?.data?.questionPage?.goToFaqButtonText}
          </P>
        </ButtonLink>
        <H2 className="mb-2">
          {data?.data?.questionCategory?.locale === lang
            ? data?.data?.questionCategory?.title
            : data?.data?.questionCategory?.localizations?.[0]?.title}
        </H2>
        <LastUpdated
          lastUpdatedText={data?.data?.questionPage?.lastModifiesText || ''}
          date={data?.data?.questionCategory?.lastModifiedDate || new Date()}
          lang={lang}
        />

        {questions.map((question, i) => (
          <Dropdown
            id={question.id}
            key={question.id}
            question={question}
            isInitiallyOpen={id === question.id ? true : !id && i === 0 ? true : false}
            useLocalization={data?.data?.questionCategory?.locale !== lang}
          />
        ))}

        <ButtonLink
          className="tw-self-center tw-mt-8 tw-border"
          variant={ButtonVariants.Flat}
          size={ButtonSizes.Large}
        >
          <Anchor
            href="/questions"
            css={css(
              typography.styles.elementSemiBold16,
              media.queryStyled([
                typography.styles.elementSemiBold16,
                typography.styles.elementSemiBold16,
                typography.styles.headingSemiBold17,
              ]),
            )}
            className="tw-text-black"
          >
            {data?.data?.questionPage?.goToAllQuestionsText}
          </Anchor>
          <Icon icon={icons.arrows.keyboardArrowRight} color={colors.variants.Neutral.Black} />
        </ButtonLink>
        {data.data?.questionPage?.sponsor && (
          <div className="tw-self-center tw-flex tw-flex-col tw-items-center tw-my-4 tw-text-white">
            <P typography={typography.variants.Element.SemiBold16}>
              {data.data.questionPage.sponsor.title}
            </P>
            <Anchor href={data.data.questionPage.sponsor.link}>
              <img
                className="tw-mt-2"
                alt={data.data.questionPage.sponsor.image?.name}
                src={`https://medsupport.dev/cms/${data.data.questionPage.sponsor.image?.url}`}
              />
            </Anchor>
          </div>
        )}
      </div>
    </Layout>
  );
};

QuestionPage.getInitialProps = async (ctx) => {
  const id = ctx.query?.id ? ctx.query.id.toString() : undefined;
  const categoryId = ctx.query?.categoryId?.toString();
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<QuestionPageData, QuestionPageDataVariables>({
    query: queryQuestionPage,
    variables: { id: categoryId, locale: lang },
  });
  return { data, id, lang };
};
