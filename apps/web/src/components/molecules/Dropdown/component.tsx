import { css } from '@emotion/core';
import { Icon, IconSizes, Markdown, Typography } from 'components';
import { icons, media, typography } from 'core';
import React, { FC, useState } from 'react';

import { DropdownHeader } from './library/DropdownHeader';
import { Props } from './props';

export const Dropdown: FC<Props> = ({
  isInitiallyOpen,
  useLocalization,
  question,
  ...rest
}: Props) => {
  const [open, setOpen] = useState(isInitiallyOpen);
  const onOpenToggle = (): void => setOpen((prev) => !prev);

  return (
    <DropdownHeader
      className="d-flex flex-column justify-content-between align-items-center p-md-4 p-3"
      open={open}
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
          {useLocalization ? question?.localizations?.[0]?.title : question.title}
        </Typography>
        <div>
          {open ? (
            <Icon icon={icons.arrows.keyboardArrowUp} size={IconSizes.Medium} />
          ) : (
            <Icon icon={icons.arrows.keyboardArrowDown} size={IconSizes.Medium} />
          )}
        </div>
      </div>
      {open && (
        <Markdown className="pt-4">
          {useLocalization ? (question?.localizations?.[0]?.content as string) : question.content}
        </Markdown>
      )}
    </DropdownHeader>
  );
};
