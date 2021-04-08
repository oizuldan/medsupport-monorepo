import {
  Anchor,
  Button,
  ButtonLink,
  ButtonSizes,
  ButtonVariants,
  Drawer,
  DrawerDirections,
  H2,
  H4,
  Icon,
  P,
} from 'components';
import { colors, icons, media, typography } from 'core';
import React, { FC, useCallback, useState } from 'react';

export const Header: FC = () => {
  const isMobile = media.useMobileDetector().mobile();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onToggleMobileMenu = useCallback(() => setMobileMenuOpen((prev) => !prev), []);

  return (
    <>
      {isMobile && (
        <Drawer
          active={mobileMenuOpen}
          closeOnClick
          closeOnSwipe
          direction={DrawerDirections.FromLeft}
          onChange={onToggleMobileMenu}
          width="75%"
          css={{ borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
          zIndex={50}
        >
          <div
            className="d-flex flex-column justify-content-between h-100 pl-5 pb-5"
            css={{ paddingTop: '6rem' }}
          >
            <div className="d-flex flex-column">
              <Anchor
                href="/login"
                className="mb-4"
                color={colors.variants.Neutral.Black}
                typography={typography.variants.Heading.SemiBold17}
              >
                Логин
              </Anchor>
              <Anchor
                href="/documents"
                className="mb-4"
                color={colors.variants.Neutral.Black}
                typography={typography.variants.Heading.SemiBold17}
              >
                Документы
              </Anchor>
              <Anchor
                href="/"
                color={colors.variants.Neutral.Black}
                className="mb-4"
                typography={typography.variants.Heading.SemiBold17}
              >
                Новости
              </Anchor>
              <Anchor
                className="mt-4"
                href="/liveStream"
                color={colors.variants.Error.Red4}
                typography={typography.variants.Heading.SemiBold17}
              >
                LIVE
              </Anchor>
            </div>
            <Anchor
              href="/"
              color={colors.variants.Neutral.Black}
              typography={typography.variants.Heading.SemiBold17}
            >
              Выйти
            </Anchor>
          </div>
        </Drawer>
      )}
      <div css={{ borderBottom: !isMobile ? `1px solid ${colors.variants.Neutral.LightGrey}` : 0 }}>
        <div
          className="d-flex align-items-center justify-content-between px-lg-5 py-3 px-1"
          css={{ maxWidth: 1440, margin: 'auto' }}
        >
          {isMobile && (
            <Button
              variant={ButtonVariants.Flat}
              size={ButtonSizes.Small}
              onClick={onToggleMobileMenu}
            >
              <Icon icon={icons.ui.menuHamburger} color={colors.variants.Neutral.Black} />
            </Button>
          )}
          {!isMobile && (
            <div className="d-flex align-items-center" css={{ overflowX: 'auto' }}>
              <Anchor
                href="/documents"
                className="mr-lg-5 mr-md-3"
                color={colors.variants.Neutral.Black}
                typography={typography.variants.Heading.SemiBold22}
              >
                Документы
              </Anchor>
              <Anchor
                href="/"
                color={colors.variants.Neutral.Black}
                className="mr-lg-5 mr-md-3"
                typography={typography.variants.Heading.SemiBold22}
              >
                Новости
              </Anchor>
              <div
                css={{
                  border: '1px solid',
                  borderColor: colors.variants.Error.Red4,
                  borderRadius: 4,
                }}
                className="px-3 py-1"
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
          )}

          <Anchor href="/" className="justify-content-center mx-5">
            <div className="d-flex align-items-center">
              <img alt="logo" src="/static/logoSmall.svg" />
              {!isMobile && (
                <H2 className="ml-2 " css={{ color: colors.variants.Text.Primary }}>
                  MedSupport
                </H2>
              )}
              {isMobile && (
                <H4 className="ml-2 " css={{ color: colors.variants.Text.Primary }}>
                  MedSupport
                </H4>
              )}
            </div>
          </Anchor>

          <div className="d-flex align-items-center">
            {!isMobile && (
              <>
                <Button variant={ButtonVariants.Flat} size={ButtonSizes.ExtraSmall}>
                  <Icon icon={icons.actions.search} color={colors.variants.Neutral.Black} />
                </Button>
                <Button
                  className="mr-1"
                  variant={ButtonVariants.Flat}
                  size={ButtonSizes.ExtraSmall}
                >
                  <Icon icon={icons.actions.language} />
                  <P
                    typography={typography.variants.Heading.SemiBold17}
                    color={colors.variants.Text.Primary}
                  >
                    RU
                  </P>
                </Button>
                <div className="d-flex flex-lg-row flex-column">
                  <ButtonLink
                    href="/login"
                    className="mr-lg-2 mr-0 mb-lg-0 mb-2"
                    size={ButtonSizes.Small}
                    typography={typography.variants.Heading.SemiBold17}
                    color={colors.variants.Brand.ExtraLightPurple}
                    bordered
                  >
                    Войти
                  </ButtonLink>
                  <ButtonLink
                    href="/signup"
                    size={ButtonSizes.Small}
                    typography={typography.variants.Heading.SemiBold17}
                    bordered
                  >
                    Регистрация
                  </ButtonLink>
                </div>
              </>
            )}
            {isMobile && (
              <div className="d-flex">
                <Button variant={ButtonVariants.Flat} size={ButtonSizes.ExtraSmall}>
                  <Icon icon={icons.actions.language} color={colors.variants.Neutral.Black} />
                </Button>
                <Button variant={ButtonVariants.Flat} size={ButtonSizes.ExtraSmall}>
                  <Icon icon={icons.actions.search} color={colors.variants.Neutral.Black} />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
