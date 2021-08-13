import { css } from '@emotion/core';
import { Typography } from 'components';
import { colors, media, typography } from 'core';
import React, { FC } from 'react';

import { Props } from './props';

export const VaccineBanner: FC<Props> = (props: Props) => (
  <div className="tw-flex md:tw-flex-row tw-flex-col-reverse">
    <div
      css={{
        backgroundColor: colors.variants.Brand.Purple,
        maxHeight: 400,
      }}
      className="tw-p-10 xl:tw-p-14 tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-purple-500 tw-w-full md:tw-w-6/12 tw-w-full"
    >
      <div css={{ maxWidth: 770 }}>
        <Typography
          as="h2"
          className="mb-4"
          css={css(
            typography.styles.headingBold22,
            media.queryStyled([
              typography.styles.headingBold22,
              typography.styles.headingBold22,
              typography.styles.headingBold28,
            ]),
          )}
          color={colors.variants.Text.Secondary}
        >
          {props.title}
        </Typography>
        <Typography
          as="p"
          css={css(
            typography.styles.contentRegular16,
            media.queryStyled([
              typography.styles.contentRegular16,
              typography.styles.contentRegular16,
              typography.styles.contentRegular20,
            ]),
          )}
          color={colors.variants.Text.Secondary}
        >
          {props.subtitle}
        </Typography>
      </div>
    </div>
    <img
      src={props.imageURL}
      alt={props.alt}
      className="md:tw-w-6/12 tw-w-full"
      css={css`
        max-height: 400px;
        object-fit: cover;
      `}
    />
  </div>
);
