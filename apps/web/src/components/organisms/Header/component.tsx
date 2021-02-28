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
      <Button className="mr-1">
        <img height={20} alt="logoSearch" src="/static/iconSearch.png" />
      </Button>
      <Button className="mr-1">
        <img height={24} alt="logoSearch" src="/static/language.png" />
        <div>RU</div>
      </Button>
      <div
        css={{ background: colors.variants.Primary.Purple5, borderRadius: 8 }}
        className="p-1 mr-2"
      >
        <ButtonLink
          href="/login"
          size={ButtonSizes.Small}
          typography={typography.variants.Heading.SemiBold17}
          color={colors.variants.Primary.Purple6}
        >
          Войти
        </ButtonLink>
      </div>
      <div css={{ background: colors.variants.Primary.Purple6, borderRadius: 8 }} className="p-1">
        <ButtonLink
          href="/signup"
          variant={ButtonVariants.Flat}
          size={ButtonSizes.Small}
          typography={typography.variants.Heading.SemiBold17}
          color={colors.variants.Neutral.White}
        >
          Регистрация
        </ButtonLink>
      </div>
    </div>
  </div>
);
