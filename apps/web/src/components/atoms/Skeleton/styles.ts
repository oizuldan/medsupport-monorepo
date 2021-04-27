import { css, keyframes, SerializedStyles } from '@emotion/core';
import { colors } from 'core';

export const shineAnimation = keyframes`
  from { background-position: -200px 0 }
  to { background-position: calc(200px + 100%) 0 }
`;

export const shineBase = css`
  background-size: 200px 100%;
  background-repeat: no-repeat;
`;

export const shineGradient = (
  mainColor: colors.AnyColor,
  shineColor: colors.AnyColor,
): SerializedStyles => css`
  background-image: linear-gradient(90deg, ${mainColor}, ${shineColor}, ${mainColor});
`;
