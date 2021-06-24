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
  List,
  ListItem,
  ListItemButton,
  P,
  Popover,
} from 'components';
import { colors, icons, media, typography } from 'core';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { FC, useCallback, useMemo, useState } from 'react';

import { popoverListContent } from './styles';

export const Header: FC = () => {
  const router = useRouter();
  const isMobile = media.useMobileDetector().mobile();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<string>(
    Cookies.get('lang') === 'kk-Cyrl-KZ' ? 'KZ' : 'RU',
  );

  const hasToken = useMemo(() => Cookies.get('token'), []);

  const onToggleMobileMenu = useCallback(() => setMobileMenuOpen((prev) => !prev), []);
  const onLogOut = useCallback(() => {
    Cookies.remove('token');
    const checkInterval = setInterval(() => {
      if (!Cookies.get('token')) {
        clearInterval(checkInterval);
        window.location.assign(window.location.href);
      }
    }, 10);
  }, []);

  const onSetLanguage = useCallback(
    (lang: string) => () => {
      Cookies.set('lang', lang);
      setLanguage(lang === 'kk-Cyrl-KZ' ? 'KZ' : 'RU');
      const checkInterval = setInterval(() => {
        if (Cookies.get('lang') === lang) {
          clearInterval(checkInterval);
          if (window.location.href.includes('/article/')) {
            const newURL = window.location.href.replace(/article\/.+/, 'articles');
            window.location.assign(newURL);
          } else {
            window.location.assign(window.location.href);
          }
        }
      }, 10);
    },
    [router],
  );

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
                href="/articles"
                color={colors.variants.Neutral.Black}
                className="mb-4"
                typography={typography.variants.Heading.SemiBold17}
              >
                Новости
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
              href="/articles"
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
              Статьи
            </Anchor>
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
              <Popover
                target={
                  <Button
                    className="mr-3 px-1"
                    variant={ButtonVariants.Flat}
                    size={ButtonSizes.ExtraSmall}
                  >
                    <Icon
                      className="mr-1"
                      icon={icons.actions.language}
                      color={colors.variants.Neutral.Black}
                    />
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
                      {language}
                    </P>
                  </Button>
                }
              >
                <List css={popoverListContent}>
                  <ListItem interactive>
                    <ListItemButton onClick={onSetLanguage('ru-RU')}>
                      <P typography={typography.variants.Content.Regular16}>RU</P>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem interactive>
                    <ListItemButton onClick={onSetLanguage('kk-Cyrl-KZ')}>
                      <P typography={typography.variants.Content.Regular16}>KZ</P>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Popover>

              {hasToken ? (
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
              ) : (
                <>
                  <ButtonLink
                    href="/login"
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
                  {/* <ButtonLink*/}
                  {/*  href="/signup"*/}
                  {/*  size={ButtonSizes.Small}*/}
                  {/*  css={css(*/}
                  {/*    typography.styles.elementSemiBold12,*/}
                  {/*    media.queryStyled([*/}
                  {/*      typography.styles.elementSemiBold12,*/}
                  {/*      typography.styles.elementSemiBold12,*/}
                  {/*      typography.styles.headingSemiBold17,*/}
                  {/*    ]),*/}
                  {/*  )}*/}
                  {/*  bordered*/}
                  {/* >*/}
                  {/*  Регистрация*/}
                  {/* </ButtonLink>*/}
                </>
              )}
            </>
          )}
          {isMobile && (
            <div className="d-flex">
              <Popover
                target={
                  <Button
                    className="px-1"
                    variant={ButtonVariants.Flat}
                    size={ButtonSizes.ExtraSmall}
                  >
                    <Icon
                      className="mr-1"
                      icon={icons.actions.language}
                      color={colors.variants.Neutral.Black}
                    />
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
                      {language}
                    </P>
                  </Button>
                }
              >
                <List css={popoverListContent}>
                  <ListItem interactive>
                    <ListItemButton onClick={onSetLanguage('ru')}>
                      <P typography={typography.variants.Content.Regular16}>RU</P>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem interactive>
                    <ListItemButton onClick={onSetLanguage('kz')}>
                      <P typography={typography.variants.Content.Regular16}>KZ</P>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Popover>
            </div>
          )}
        </div>
      </div>
      {!isMobile && <Divider />}
    </>
  );
};
