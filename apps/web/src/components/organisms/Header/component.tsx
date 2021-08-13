import { css } from '@emotion/core';
import {
  Anchor,
  Button,
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
import React, { FC, useCallback, useState } from 'react';

import { Props } from './props';
import { popoverListContent } from './styles';

export const Header: FC<Props> = (props: Props) => {
  const isMobile = media.useMobileDetector().mobile();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<string>(
    Cookies.get('lang') === 'kk-Cyrl-KZ' ? 'Қаз' : 'Рус',
  );

  // const hasToken = useMemo(() => Cookies.get('token'), []);

  const onToggleMobileMenu = useCallback(() => setMobileMenuOpen((prev) => !prev), []);
  // const onLogOut = useCallback(() => {
  //   Cookies.remove('token');
  //   const checkInterval = setInterval(() => {
  //     if (!Cookies.get('token')) {
  //       clearInterval(checkInterval);
  //       window.location.assign(window.location.href);
  //     }
  //   }, 10);
  // }, []);

  const onSetLanguage = useCallback(
    (lang: string) => () => {
      Cookies.set('lang', lang);
      setLanguage(lang === 'kk-Cyrl-KZ' ? 'Қаз' : 'Рус');
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
    [],
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
              {props.headerLinks?.[0]?.links?.map((link) => (
                <Anchor
                  key={link?.title}
                  href={link?.link}
                  className="mb-4"
                  color={colors.variants.Neutral.Black}
                  typography={typography.variants.Heading.SemiBold17}
                >
                  {link?.title}
                </Anchor>
              ))}
            </div>
            {/* {hasToken ? (*/}
            {/*  <Anchor*/}
            {/*    href="/"*/}
            {/*    color={colors.variants.Neutral.Black}*/}
            {/*    typography={typography.variants.Heading.SemiBold17}*/}
            {/*  >*/}
            {/*    Выйти*/}
            {/*  </Anchor>*/}
            {/* ) : (*/}
            {/*  props.headerButtons?.[0]?.buttons?.map((button) => (*/}
            {/*    <Anchor*/}
            {/*      key={button?.title}*/}
            {/*      href="/"*/}
            {/*      color={colors.variants.Neutral.Black}*/}
            {/*      typography={typography.variants.Heading.SemiBold17}*/}
            {/*    >*/}
            {/*      {button?.title}*/}
            {/*    </Anchor>*/}
            {/*  ))*/}
            {/* )}*/}
          </div>
        </Drawer>
      )}
      <div className="container tw-grid tw-grid-cols-3 tw-justify-items-stretch py-3 tw-mx-auto">
        {isMobile && (
          <button className="tw-border-0" onClick={onToggleMobileMenu}>
            <Icon icon={icons.ui.menuHamburger} color={colors.variants.Neutral.Black} />
          </button>
        )}
        {!isMobile && (
          <div className="d-flex align-items-center" css={{ overflowX: 'auto' }}>
            {props.headerLinks?.[0]?.links?.map((link) => (
              <Anchor
                key={link?.title}
                href={link?.link}
                className="mr-3"
                color={colors.variants.Text.Primary}
                typography={typography.variants.Heading.SemiBold17}
              >
                {link?.title}
              </Anchor>
            ))}
          </div>
        )}

        <Anchor href="/" className="mx-5 tw-justify-self-center d-flex align-items-center tw-w-max">
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
        </Anchor>

        <div className="d-flex align-items-center tw-justify-self-end">
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
                      <P typography={typography.variants.Content.Regular16}>Рус</P>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem interactive>
                    <ListItemButton onClick={onSetLanguage('kk-Cyrl-KZ')}>
                      <P typography={typography.variants.Content.Regular16}>Қаз</P>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Popover>

              {/* {hasToken ? (*/}
              {/*  <Button*/}
              {/*    size={ButtonSizes.Small}*/}
              {/*    css={css(*/}
              {/*      typography.styles.elementSemiBold12,*/}
              {/*      media.queryStyled([*/}
              {/*        typography.styles.elementSemiBold12,*/}
              {/*        typography.styles.elementSemiBold12,*/}
              {/*        typography.styles.headingSemiBold17,*/}
              {/*      ]),*/}
              {/*    )}*/}
              {/*    onClick={onLogOut}*/}
              {/*    color={colors.variants.Brand.ExtraLightPurple}*/}
              {/*    bordered*/}
              {/*  >*/}
              {/*    Выйти*/}
              {/*  </Button>*/}
              {/* ) : (*/}
              {/*  <>*/}
              {/*    {props.headerButtons?.[0]?.buttons?.map((button) => (*/}
              {/*      <ButtonLink*/}
              {/*        key={button?.title}*/}
              {/*        href={button?.link}*/}
              {/*        size={ButtonSizes.Small}*/}
              {/*        css={css(*/}
              {/*          typography.styles.elementSemiBold12,*/}
              {/*          media.queryStyled([*/}
              {/*            typography.styles.elementSemiBold12,*/}
              {/*            typography.styles.elementSemiBold12,*/}
              {/*            typography.styles.headingSemiBold17,*/}
              {/*          ]),*/}
              {/*        )}*/}
              {/*        color={colors.variants.Brand.ExtraLightPurple}*/}
              {/*        bordered*/}
              {/*      >*/}
              {/*        {button?.title}*/}
              {/*      </ButtonLink>*/}
              {/*    ))}*/}
              {/*    /!* <ButtonLink*!/*/}
              {/*    /!*  href="/signup"*!/*/}
              {/*    /!*  size={ButtonSizes.Small}*!/*/}
              {/*    /!*  css={css(*!/*/}
              {/*    /!*    typography.styles.elementSemiBold12,*!/*/}
              {/*    /!*    media.queryStyled([*!/*/}
              {/*    /!*      typography.styles.elementSemiBold12,*!/*/}
              {/*    /!*      typography.styles.elementSemiBold12,*!/*/}
              {/*    /!*      typography.styles.headingSemiBold17,*!/*/}
              {/*    /!*    ]),*!/*/}
              {/*    /!*  )}*!/*/}
              {/*    /!*  bordered*!/*/}
              {/*    /!* >*!/*/}
              {/*    /!*  Регистрация*!/*/}
              {/*    /!* </ButtonLink>*!/*/}
              {/*  </>*/}
              {/* )}*/}
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
                    <ListItemButton onClick={onSetLanguage('ru-RU')}>
                      <P typography={typography.variants.Content.Regular16}>Рус</P>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem interactive>
                    <ListItemButton onClick={onSetLanguage('kk-Cyrl-KZ')}>
                      <P typography={typography.variants.Content.Regular16}>Қаз</P>
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
