import { css } from '@emotion/core';
import { Anchor } from 'components';
import { media, typography } from 'core';
import React, { FC } from 'react';

import { CardProps } from './props';

export const RelevantTopicCard: FC<CardProps> = (props: CardProps) => (
  <Anchor
    href={`/questions/${props.categoryId}/${props.id}`}
    className="tw-col-6 hover:tw-bg-purple-500 hover:tw-text-white tw-px-8 tw-py-4 tw-border-b"
    css={css(
      typography.styles.headingSemiBold17,
      media.queryStyled([
        typography.styles.headingSemiBold17,
        typography.styles.headingSemiBold17,
        typography.styles.headingSemiBold22,
      ]),
    )}
  >
    {props.title}
  </Anchor>
);
