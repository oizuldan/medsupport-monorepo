import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from 'core';

type Props = {
  readonly onHover: boolean;
};

export const RelevantTopicCard = styled.div<Props>`
  ${(props) =>
    css`
      border-bottom: ${props.onHover ? '0px' : '1px'};
      border-radius: ${props.onHover ? '4px' : '0px'};
      border-bottom-style: solid;
      border-bottom-color: ${colors.variants.Neutral.LightGrey};
      background-color: ${props.onHover ? colors.variants.Brand.Purple : null};
      color: ${props.onHover ? colors.variants.Neutral.White : colors.variants.Neutral.Black};
      padding-top: 2rem;
      padding-bottom: 2rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      margin-bottom: 0.5rem;
      cursor: pointer;
    `}
`;
