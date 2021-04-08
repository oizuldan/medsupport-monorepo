import { css, SerializedStyles } from '@emotion/core';

import { toMedia } from './services/toMedia';
import { Breakpoints } from './types/Breakpoints';

const breakpointTuple: readonly Breakpoints[] = [
  Breakpoints.Small,
  Breakpoints.Medium,
  Breakpoints.Large,
  Breakpoints.ExtraLarge,
];

/**
 * @param breakpoints - if array of styles, it will replicate `media.query` functionality but with `literal: true`.
 * @example
 *   styled.div`
 *     ${media.queryStyled([
 *       typography.styles.contentRegular15,  // for higher than small
 *       typography.styles.contentSemiBold17, // for higher than medium
 *     ])},
 *   `
 *
 *   styled.div`
 *     ${media.queryStyled({
 *       [media.Breakpoints.Large]: css({ styles for breakpoint higher than large })
 *     })},
 *   `
 */
export const queryStyled = (
  breakpoints: readonly SerializedStyles[] | Record<Breakpoints, SerializedStyles>,
): SerializedStyles =>
  Array.isArray(breakpoints)
    ? css(breakpoints.reduce((acc, cur, i) => ({ ...acc, [toMedia(breakpointTuple[i])]: cur }), {}))
    : css(
        Object.entries(breakpoints).reduce(
          (acc, [key, value]) => ({ ...acc, [toMedia(key)]: value }),
          {},
        ),
      );
