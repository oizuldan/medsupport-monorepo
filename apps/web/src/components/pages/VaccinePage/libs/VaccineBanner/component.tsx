import { css } from '@emotion/core';
import { Typography } from 'components';
import { colors, media, typography } from 'core';
import React, { FC } from 'react';

import { Props } from './props';

export const VaccineBanner: FC<Props> = (props: Props) => (
  <div
    css={media.query({
      display: ['flex', 'grid'],
      gridTemplateColumns: ['1fr 1fr'],
      flexDirection: ['column-reverse'],
    })}
  >
    <div
      css={{
        backgroundColor: colors.variants.Brand.Purple,
      }}
      className="tw-p-10 xl:tw-p-14 tw-flex tw-flex-col tw-items-center tw-justify-center"
    >
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
    <img
      src={props.imageURL}
      alt={props.alt}
      css={css`
        width: 100%;
        height: 100%;
        object-fit: cover;
        max-height: 400px;
      `}
    />
  </div>
);
