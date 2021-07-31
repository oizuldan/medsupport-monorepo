import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Button, H1, H2 } from 'components';
import { colors } from 'core';
import React, { FC } from 'react';

import { Props } from './props';

const QuestionCardContainer = styled.div`
  border-radius: 8px;
  background-color: ${colors.variants.Neutral.White};
  padding: 2rem 1rem;
  cursor: pointer;
  box-shadow: 1px 1px 8px rgba(201, 201, 201, 0.8), 0px 0.5px 0px rgba(172, 172, 172, 0.9);
`;

export const QuestionCard: FC<Props> = (props: Props) => {
  const { title } = props;
  return (
    <QuestionCardContainer className="col d-flex align-items-center justify-content-between flex-column">
      <H1
        className="d-flex align-items-center justify-content-center"
        css={css`
          margin-bottom: 3rem;
          border-style: solid;
          border-color: ${colors.variants.Brand.Purple};
          border-width: 4px;
          border-radius: 50%;
          width: 60px;
          height: 60px;
        `}
      >
        ?
      </H1>
      <H2
        css={css`
          text-align: center;
        `}
      >
        {title}
      </H2>
      <Button
        css={css`в
            margin-top: 8rem;
            padding: 0rem 2rem;
            border-radius: 8px;
          `}
      >
        Узнать
      </Button>
    </QuestionCardContainer>
  );
};
