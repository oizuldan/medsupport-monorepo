import { css } from '@emotion/core';
import { RelevantTopicCard, Typography } from 'components';
import { media, typography } from 'core';
import React, { FC } from 'react';

import { Props } from './props';

export const RelevantTopics: FC<Props> = (props: Props) => (
  <div className="d-flex flex-column align-items-center mt-4">
    <Typography
      as="h1"
      className="pb-3 pt-3"
      css={css(
        typography.styles.headingBold28,
        media.queryStyled([
          typography.styles.headingBold28,
          typography.styles.headingBold28,
          typography.styles.headingBold34,
        ]),
      )}
    >
      {props.title}
    </Typography>
    <div className="container">
      <div className="tw-grid md:tw-grid-cols-2 tw-gap-4 tw-justify-items-center">
        {props.questions.map((question) => (
          <RelevantTopicCard
            key={question.id}
            id={question.id}
            categoryId={question.question_category?.id || ''}
            title={question.title}
          />
        ))}
      </div>
    </div>
  </div>
);
