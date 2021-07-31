import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { H3 } from 'components';
import { colors } from 'core';
import React, { FC, useState } from 'react';

import { CardProps, ContainerProps } from './props';

const RelevantTopicContainer = styled.div<ContainerProps>`
  ${(props) =>
    css`
      border-bottom: ${props.onHover ? '0px' : '1px'};
      border-radius: ${props.onHover ? '4px' : '0px'};
      border-bottom-style: solid;
      border-bottom-color: ${colors.variants.Neutral.LightGrey};
      background-color: ${props.onHover ? colors.variants.Brand.Purple : null};
      color: ${props.onHover ? colors.variants.Neutral.White : colors.variants.Neutral.Black};
      padding: 2rem 1rem;
      margin 0.25rem 1.5rem;
      cursor: pointer;
    `}
`;

export const RelevantTopicCard: FC<CardProps> = (props: CardProps) => {
  const { title } = props;
  const [onHover, setOnHover] = useState<boolean>(false);

  return (
    <RelevantTopicContainer
      className="col d-flex justify-content-center"
      // eslint-disable-next-line react/jsx-no-bind
      onMouseOver={() => setOnHover(true)}
      // eslint-disable-next-line react/jsx-no-bind
      onMouseOut={() => setOnHover(false)}
      onHover={onHover}
    >
      <H3 color={onHover ? colors.variants.Neutral.White : colors.variants.Neutral.Black}>
        {title}
      </H3>
    </RelevantTopicContainer>
  );
};
