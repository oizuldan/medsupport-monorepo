import { css } from '@emotion/core';
import { Icon, IconSizes, Typography } from 'components';
import { colors, icons, media, typography } from 'core';
import { sequence } from 'fp-ts/Array';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/pipeable';
import React, { FC, useMemo, useState } from 'react';

import { List } from '../List';
import { Header } from './library/Header';
import { Props } from './props';

export const ExpandableList: FC<Props> = ({
  articles: articlesProp,
  title,
  isInitiallyOpen,
  ...rest
}: Props) => {
  const articles = useMemo(
    () =>
      pipe(
        O.fromNullable(articlesProp),
        O.chain(O.fromPredicate((v) => Array.isArray(v))),
        O.chain((arts) => sequence(O.option)(arts.map((art) => pipe(O.fromNullable(art))))),
        O.getOrElseW(() => undefined),
      ),
    [articlesProp],
  );
  const [open, setOpen] = useState(isInitiallyOpen);
  const onOpenToggle = (): void => setOpen((prev) => !prev);

  return (
    <div
      css={css`
        border-bottom: 2px solid ${colors.variants.Neutral.LightGrey};
      `}
    >
      <Header
        className="d-flex flex-column justify-content-between align-items-center p-md-4 p-3"
        onClick={onOpenToggle}
        css={css`
          cursor: pointer;
        `}
        {...rest}
      >
        <div className="tw-flex tw-justify-between tw-items-center tw-w-full">
          <Typography
            as="h2"
            css={css(
              typography.styles.headingSemiBold17,
              media.queryStyled([
                typography.styles.headingSemiBold17,
                typography.styles.headingSemiBold17,
                typography.styles.headingBold22,
              ]),
            )}
          >
            {title}
          </Typography>
          <div>
            {open ? (
              <Icon icon={icons.arrows.keyboardArrowUp} size={IconSizes.Medium} />
            ) : (
              <Icon icon={icons.arrows.keyboardArrowDown} size={IconSizes.Medium} />
            )}
          </div>
        </div>
      </Header>
      {open && <List articles={articles} />}
    </div>
  );
};
