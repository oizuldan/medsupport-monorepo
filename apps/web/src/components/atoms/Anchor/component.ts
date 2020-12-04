import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { colors, services, typography } from 'core';

import { Props } from './props';

const defaultStyles: services.FI<unknown> = () =>
  css({ cursor: 'pointer', textDecoration: 'none' });

export const Anchor = styled.a<Props>(
  typography.styles.extendByVariant,
  colors.styles.extendByVariant(['color', 'fill']),
  defaultStyles,
);
