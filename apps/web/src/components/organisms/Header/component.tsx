import 'bootstrap-4-grid/css/grid.css';

import { Anchor, ButtonLink, ButtonSizes, ButtonVariants, H2 } from 'components';
import { colors, typography } from 'core';
import React, { FC } from 'react';

export const Header: FC = () => (
  <div
    css={{
      height: 60,
      backgroundColor: colors.variants.All.Purple,
    }}
    className="d-flex w-100 align-items-center px-3 justify-content-between"
  >
    <Anchor href="/">
      <div className="d-flex align-items-center">
        <img height={45} alt="logo" src="/static/logo.png" />
        <H2 className="m-0 " css={{ color: 'white' }}>
          Medsupport
        </H2>
      </div>
    </Anchor>

    <div className="d-flex align-items-center">
      <Anchor
        href="/documents"
        className="mr-5"
        color={colors.variants.All.White}
        typography={typography.variants.Menu.Bold14}
      >
        Documents
      </Anchor>
      <Anchor
        href="/"
        color={colors.variants.All.White}
        typography={typography.variants.Menu.Bold14}
      >
        Live Stream
      </Anchor>
    </div>
    <div className="d-flex align-items-center">
      <ButtonLink
        href="/signup"
        variant={ButtonVariants.Flat}
        size={ButtonSizes.Small}
        typography={typography.variants.Menu.Bold14}
        color={colors.variants.All.White}
      >
        Sign up
      </ButtonLink>
      <ButtonLink
        href="/login"
        size={ButtonSizes.Small}
        typography={typography.variants.Menu.Bold14}
        color={colors.variants.All.GreenLight}
      >
        Log in
      </ButtonLink>
    </div>
  </div>
);
