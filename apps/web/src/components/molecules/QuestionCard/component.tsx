import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Button, H1, H2 } from 'components';
import { colors } from 'core';
import React, { FC, useState } from 'react';

import { QuestionCardProps, QuestionContainerProps } from './props';

const QuestionCardContainer = styled.a<QuestionContainerProps>`
  ${(props) =>
    css`
      border-radius: 8px;
      background-color: ${colors.variants.Neutral.White};
      padding: 2rem 1rem;
      cursor: pointer;
      box-shadow: 1px 1px 8px rgba(201, 201, 201, 0.8), 0px 0.5px 0px rgba(172, 172, 172, 0.9);
      transition: transform 0.1s ease-out;
      transform: ${props.onHover ? 'scale(1.03)' : 'none'};
      width: 300px;
      height: 100%;
      &:hover {
        background-color: ${colors.variants.Brand.MoreExtraLightPurple};
      }
    `}
`;

export const QuestionCard: FC<QuestionCardProps> = (props: QuestionCardProps) => {
  const [onHover, setOnHover] = useState<boolean>(false);

  return (
    <div className="p-3">
      <QuestionCardContainer
        href={`/question/${props.id}`}
        className="d-flex align-items-center justify-content-between flex-column"
        // eslint-disable-next-line react/jsx-no-bind
        onMouseOver={() => setOnHover(true)}
        // eslint-disable-next-line react/jsx-no-bind
        onMouseOut={() => setOnHover(false)}
        onHover={onHover}
      >
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
          {props.title}
        </H2>
        <Button
          css={css`
            border-radius: 8px;
            margin-top: 8rem;
          `}
          className="pl-5 pr-5"
        >
          {props.buttonText}
        </Button>
      </QuestionCardContainer>
    </div>
  );
};
