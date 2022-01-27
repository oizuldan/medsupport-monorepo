import axios from 'axios';
import {
  Anchor,
  Button,
  ButtonSizes,
  ButtonVariants,
  Icon,
  IconSizes,
  Input,
  InputGroup,
  P,
  Toast,
} from 'components';
import { colors, icons, media, services, typography } from 'core';
import Cookies from 'js-cookie';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { ChangeEventHandler, useCallback, useState } from 'react';

const Header = dynamic(() => import('./libs/Header'));

export const LoginPage: NextPage = () => {
  const router = useRouter();
  const isMobile = media.useMobileDetector().phone();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const buttonDisabled = username.length === 0 || password.length === 0;

  const onChangeUsername = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => setUsername(event.target.value),
    [],
  );
  const onChangePassword = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => setPassword(event.target.value),
    [],
  );
  const toggleShowPassword = useCallback(() => setShowPassword((prev) => !prev), []);
  const onGoBack = useCallback(() => router.push('/'), [router]);
  const callToastAndRefresh = useCallback((success: boolean, message: string) => {
    const type = success ? services.ToastTypes.Success : services.ToastTypes.Error;
    services.toast(
      Toast,
      type,
      <P color={colors.variants.Neutral.White} typography={typography.variants.Heading.Regular22}>
        {message}
      </P>,
    );
  }, []);
  const onLogIn = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.post(`https://medsupport.kz/api/auth/login`, {
        username,
        password,
      });
      Cookies.set('token', res.data.token, { expires: 60 * 60 });
      callToastAndRefresh(true, res.data.message);
      await router.push('/');
    } catch (e) {
      callToastAndRefresh(false, e.response.data);
    }
    setLoading(false);
  }, [username, password, callToastAndRefresh, router]);
  // const onGoToSignUp = useCallback(() => router.push('/signup'), [router]);

  return (
    <>
      {isMobile && <Header />}
      <div
        className="d-flex flex-lg-row flex-column-reverse justify-content-between align-items-center"
        css={{ minHeight: '100vh' }}
      >
        <div
          className="w-100"
          css={media.query({
            height: [270, 270, 270, '100vh'],
          })}
        >
          <img
            alt="authQuote"
            css={media.query({
              height: [
                '-webkit-fill-available',
                '-webkit-fill-available',
                '-webkit-fill-available',
                '100vh',
              ],
              objectFit: 'cover',
              width: '100%',
            })}
            src="/static/images/authQuote.png"
          />
        </div>
        <div
          className="d-flex flex-column w-100 p-md-5 p-2"
          css={media.query({
            height: ['100%', '100%', '100%', '100vh'],
          })}
        >
          <div className="d-md-flex d-none align-items-center">
            <Button
              variant={ButtonVariants.Flat}
              color={colors.variants.Neutral.Black}
              onClick={onGoBack}
            >
              <Icon icon={icons.arrows.keyboardArrowLeft} size={IconSizes.Medium} />
            </Button>
            <Anchor href="/" className="mx-auto">
              <img alt="logo" src="/static/images/logoWithoutIcon.svg" />
            </Anchor>
          </div>

          <div
            className="d-flex flex-column container  my-lg-auto my-5 align-items-md-start align-items-center"
            css={{ maxWidth: 700 }}
          >
            <P className="mb-4" typography={typography.variants.Heading.SemiBold28}>
              Вход в аккаунт
            </P>
            <div className="mb-4 w-100">
              <Input
                className="py-4"
                value={username}
                onChange={onChangeUsername}
                type="text"
                placeholder="Username или email"
              />
            </div>
            <InputGroup
              className="w-100"
              rightElement={
                <Button
                  variant={ButtonVariants.Flat}
                  size={ButtonSizes.ExtraSmall}
                  typography={typography.variants.Element.Regular12}
                  onClick={toggleShowPassword}
                >
                  {showPassword ? 'скрыть' : 'показать'}
                </Button>
              }
            >
              <Input
                className="py-4"
                value={password}
                onChange={onChangePassword}
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
              />
            </InputGroup>
            {/* {!isMobile && (*/}
            {/*  <Anchor*/}
            {/*    className="align-self-end mt-3"*/}
            {/*    href="/restore-password"*/}
            {/*    typography={typography.variants.Element.Regular16}*/}
            {/*    color={colors.variants.Text.Primary}*/}
            {/*  >*/}
            {/*    Забыли пароль?*/}
            {/*  </Anchor>*/}
            {/* )}*/}

            <Button
              disabled={buttonDisabled}
              loading={loading}
              className="mt-4 mb-3 "
              css={media.query({
                borderRadius: 8,
                paddingTop: ['1.75rem', '2.25rem'],
                paddingBottom: ['1.75rem', '2.25rem'],
                width: [160, '100%'],
              })}
              onClick={onLogIn}
            >
              Вход
            </Button>
            {/* {isMobile && (*/}
            {/*  <Anchor*/}
            {/*    className="mb-3"*/}
            {/*    href="/restore-password"*/}
            {/*    typography={typography.variants.Element.Regular16}*/}
            {/*    color={colors.variants.Text.Primary}*/}
            {/*  >*/}
            {/*    Забыли пароль?*/}
            {/*  </Anchor>*/}
            {/* )}*/}

            {/* <P typography={typography.variants.Element.Regular16}>*/}
            {/*  Нет аккаунта?{' '}*/}
            {/*  <Anchor*/}
            {/*    onClick={onGoToSignUp}*/}
            {/*    typography={typography.variants.Element.Bold16}*/}
            {/*    color={colors.variants.Text.Primary}*/}
            {/*  >*/}
            {/*    Зарегистрируйтесь*/}
            {/*  </Anchor>*/}
            {/* </P>*/}
          </div>
        </div>
      </div>
    </>
  );
};
