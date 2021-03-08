import 'bootstrap-4-grid/css/grid.css';

import { Anchor, Button, ButtonLink, ButtonSizes, ButtonVariants, H2 } from 'components';
import { colors, typography } from 'core';
import React, { FC } from 'react';

export const Header: FC = () => (
  <div
    css={{
      backgroundColor: colors.variants.Background.Primary,
      borderBottom: '1px solid rgba(0,0,0,0.25)',
    }}
    className="d-flex w-100 align-items-center px-5 py-3 justify-content-between"
  >
    <div className="d-flex align-items-center">
      <Anchor
        href="/"
        color={colors.variants.Neutral.Black}
        className="mr-5"
        typography={typography.variants.Heading.SemiBold22}
      >
        О нас
      </Anchor>
      <Anchor
        href="/documents"
        className="mr-5"
        color={colors.variants.Neutral.Black}
        typography={typography.variants.Heading.SemiBold22}
      >
        Документы
      </Anchor>
      <Anchor
        href="/"
        className="mr-5"
        color={colors.variants.Neutral.Black}
        typography={typography.variants.Heading.SemiBold22}
      >
        Курсы
      </Anchor>
      <div
        css={{ border: '1px solid', borderColor: colors.variants.Error.Red4, borderRadius: 4 }}
        className="px-3 py-1 mr-5"
      >
        <Anchor
          href="/liveStream"
          color={colors.variants.Error.Red4}
          typography={typography.variants.Heading.SemiBold22}
        >
          LIVE
        </Anchor>
      </div>
    </div>

    <Anchor href="/" className="mr-5">
      <div className="d-flex align-items-center">
        <img height={36} alt="logo" src="/static/logo.png" />
        <H2 className="m-0 " css={{ color: colors.variants.Neutral.Black }}>
          Medsupport
        </H2>
      </div>
    </Anchor>

    <div className="d-flex align-items-center">
      <Button className="mr-1" variant={ButtonVariants.Flat}>
        <img height={20} alt="logoSearch" src="/static/iconSearch.png" />
      </Button>
      <Button className="mr-1" variant={ButtonVariants.Flat}>
        <img height={24} alt="logoSearch" src="/static/language.png" />
        <div>RU</div>
      </Button>
      <ButtonLink
        href="/login"
        className="mr-2"
        size={ButtonSizes.Small}
        typography={typography.variants.Heading.SemiBold17}
        color={colors.variants.Brand.ExtraLightPurple}
        bordered
      >
        Войти
      </ButtonLink>
      <div>
        <ButtonLink
          href="/signup"
          size={ButtonSizes.Small}
          typography={typography.variants.Heading.SemiBold17}
          bordered
        >
          Регистрация
        </ButtonLink>
      </div>
    </div>
  </div>
);
