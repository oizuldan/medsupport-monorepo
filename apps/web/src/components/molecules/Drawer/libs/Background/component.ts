import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { colors } from 'core';
import { animated } from 'react-spring';

import { Directions } from '../../types/Directions';
import { Props } from './props';

export const Background = styled(animated.div, { shouldForwardProp: isPropValid })<Props>`
  position: absolute;
  right: ${(props) => (props.direction === Directions.FromRight ? 0 : undefined)};
  left: ${(props) => (props.direction === Directions.FromLeft ? 0 : undefined)};
  bottom: ${(props) => (props.direction === Directions.FromBottom ? 0 : undefined)};
  height: ${(props) => props.height};
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  width: ${(props) => props.width};
  ${colors.styles.extendByVariant('backgroundColor')}
`;
