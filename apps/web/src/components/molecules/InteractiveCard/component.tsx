import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Button, ButtonVariants, P, Typography } from 'components';
import { colors, media, typography } from 'core';
import React, { FC, useState } from 'react';

import { InteractiveCardContainerProps, InteractiveCardProps } from './props';

const InteractiveCardContainer = styled.a<InteractiveCardContainerProps>`
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

export const InteractiveCard: FC<InteractiveCardProps> = (props: InteractiveCardProps) => {
  const [onHover, setOnHover] = useState<boolean>(false);

  return (
    <div className="p-3">
      <InteractiveCardContainer
        href={props.href}
        className="tw-flex tw-items-center tw-justify-between tw-flex-col tw-text-center"
        // eslint-disable-next-line react/jsx-no-bind
        onMouseOver={() => setOnHover(true)}
        // eslint-disable-next-line react/jsx-no-bind
        onMouseOut={() => setOnHover(false)}
        onHover={onHover}
      >
        <Typography
          as="h3"
          css={css(
            typography.styles.headingBold17,
            media.queryStyled([
              typography.styles.headingBold22,
              typography.styles.headingBold22,
              typography.styles.headingBold28,
            ]),
          )}
          className="mb-3 tw-clip tw-w-full tw-overflow-hidden tw-break-words"
        >
          {props.title}
        </Typography>
        <P className="mb-4">{props.description}</P>
        <Button
          css={css`
            border-radius: 8px;
          `}
          variant={ButtonVariants.Flat}
        >
          {props.buttonText}
        </Button>
      </InteractiveCardContainer>
    </div>
  );
};
