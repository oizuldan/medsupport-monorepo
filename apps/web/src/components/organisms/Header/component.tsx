import { css } from '@emotion/core';
import {
  Anchor,
  Button,
  ButtonLink,
  ButtonSizes,
  ButtonVariants,
  Divider,
  Drawer,
  DrawerDirections,
  H2,
  Icon,
  P,
} from 'components';
import { colors, icons, media, typography } from 'core';
import Cookies from 'js-cookie';
import React, { FC, useCallback, useState } from 'react';

export const Header: FC = () => {
  const isMobile = media.useMobileDetector().mobile();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onToggleMobileMenu = useCallback(() => setMobileMenuOpen((prev) => !prev), []);

  const [firstName, setFirstName] = useState<string | undefined>(Cookies.get('firstName'));
  const [lastName, setLastName] = useState<string | undefined>(Cookies.get('lastName'));

  const onLogOut = useCallback(() => {
    Cookies.remove('token');
    Cookies.remove('firstName');
    Cookies.remove('lastName');
    Cookies.remove('email');
    Cookies.remove('username');
    setFirstName(undefined);
    setLastName(undefined);
  }, []);

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
                href="/news"
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
      <div className="container-xl d-flex align-items-center justify-content-between py-3 mx-auto">
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
              color={colors.variants.Text.Primary}
              css={css(
                typography.styles.headingSemiBold17,
                media.queryStyled([
                  typography.styles.headingSemiBold17,
                  typography.styles.headingSemiBold17,
                  typography.styles.headingSemiBold22,
                ]),
              )}
            >
              Документы
            </Anchor>
            <Anchor
              href="/news"
              className="mr-lg-5 mr-md-3"
              color={colors.variants.Text.Primary}
              css={css(
                typography.styles.headingSemiBold17,
                media.queryStyled([
                  typography.styles.headingSemiBold17,
                  typography.styles.headingSemiBold17,
                  typography.styles.headingSemiBold22,
                ]),
              )}
            >
              Новости
            </Anchor>
            <div
              css={{
                border: '1px solid',
                borderColor: colors.variants.Error.Red4,
                borderRadius: 8,
              }}
              className="px-3 py-1"
            >
              <Anchor
                href="/liveStream"
                color={colors.variants.Error.Red4}
                css={css(
                  typography.styles.headingSemiBold17,
                  media.queryStyled([
                    typography.styles.headingSemiBold17,
                    typography.styles.headingSemiBold17,
                    typography.styles.headingSemiBold22,
                  ]),
                )}
              >
                LIVE
              </Anchor>
            </div>
          </div>
        )}

        <Anchor href="/" className="justify-content-center mx-5">
          <div className="d-flex align-items-center">
            <img alt="logo" src="/static/images/logoSmall.svg" />
            <H2
              className="ml-2 "
              css={css(
                typography.styles.headingBold17,
                media.queryStyled([
                  typography.styles.headingBold17,
                  typography.styles.headingBold17,
                  typography.styles.headingBold28,
                ]),
              )}
            >
              MedSupport
            </H2>
          </div>
        </Anchor>

        <div className="d-flex align-items-center">
          {!isMobile && (
            <>
              {/* <Button variant={ButtonVariants.Flat} size={ButtonSizes.ExtraSmall}>*/}
              {/*  <Icon icon={icons.actions.search} color={colors.variants.Neutral.Black} />*/}
              {/* </Button>*/}
              <Button className="mr-1" variant={ButtonVariants.Flat} size={ButtonSizes.ExtraSmall}>
                <Icon icon={icons.actions.language} color={colors.variants.Neutral.Black} />
                <P
                  typography={typography.variants.Heading.SemiBold17}
                  css={css(
                    typography.styles.elementSemiBold12,
                    media.queryStyled([
                      typography.styles.elementSemiBold12,
                      typography.styles.elementSemiBold12,
                      typography.styles.headingSemiBold17,
                    ]),
                  )}
                >
                  RU
                </P>
              </Button>
              {firstName && lastName ? (
                <div className="d-flex flex-column align-items-center">
                  <P
                    typography={typography.variants.Heading.SemiBold17}
                    css={css(
                      typography.styles.elementSemiBold12,
                      media.queryStyled([
                        typography.styles.elementSemiBold12,
                        typography.styles.elementSemiBold12,
                        typography.styles.headingSemiBold17,
                      ]),
                    )}
                  >
                    {`${firstName} ${lastName}`}
                  </P>
                  <Button
                    size={ButtonSizes.Small}
                    css={css(
                      typography.styles.elementSemiBold12,
                      media.queryStyled([
                        typography.styles.elementSemiBold12,
                        typography.styles.elementSemiBold12,
                        typography.styles.headingSemiBold17,
                      ]),
                    )}
                    onClick={onLogOut}
                    color={colors.variants.Brand.ExtraLightPurple}
                    bordered
                  >
                    Выйти
                  </Button>
                </div>
              ) : (
                <>
                  <ButtonLink
                    href="/login"
                    className="mr-2"
                    size={ButtonSizes.Small}
                    css={css(
                      typography.styles.elementSemiBold12,
                      media.queryStyled([
                        typography.styles.elementSemiBold12,
                        typography.styles.elementSemiBold12,
                        typography.styles.headingSemiBold17,
                      ]),
                    )}
                    color={colors.variants.Brand.ExtraLightPurple}
                    bordered
                  >
                    Войти
                  </ButtonLink>
                  <ButtonLink
                    href="/signup"
                    size={ButtonSizes.Small}
                    css={css(
                      typography.styles.elementSemiBold12,
                      media.queryStyled([
                        typography.styles.elementSemiBold12,
                        typography.styles.elementSemiBold12,
                        typography.styles.headingSemiBold17,
                      ]),
                    )}
                    bordered
                  >
                    Регистрация
                  </ButtonLink>
                </>
              )}
            </>
          )}
          {isMobile && (
            <div className="d-flex">
              <Button variant={ButtonVariants.Flat} size={ButtonSizes.ExtraSmall}>
                <Icon icon={icons.actions.language} color={colors.variants.Neutral.Black} />
              </Button>
              {/* <Button variant={ButtonVariants.Flat} size={ButtonSizes.ExtraSmall}>*/}
              {/*  <Icon icon={icons.actions.search} color={colors.variants.Neutral.Black} />*/}
              {/* </Button>*/}
            </div>
          )}
        </div>
      </div>
      {!isMobile && <Divider />}
    </>
  );
};
