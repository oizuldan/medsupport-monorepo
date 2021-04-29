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
  Label,
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

const REGEX_FOR_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const SignUpPage: NextPage = () => {
  const router = useRouter();
  const isMobile = media.useMobileDetector().phone();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [passwordsError, setPasswordsError] = useState<string | undefined>(undefined);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const buttonDisabled =
    username.length === 0 ||
    email.length === 0 ||
    password.length === 0 ||
    repeatPassword.length === 0 ||
    firstName.length === 0 ||
    lastName.length === 0;

  const validateEmail = useCallback((value: string) => REGEX_FOR_EMAIL.test(value), []);
  const validateInputs = useCallback(() => {
    setEmailError(!validateEmail(email) ? 'Не верный формат email' : undefined);
    setPasswordsError(repeatPassword !== password ? 'Пароли не совпадают' : undefined);
    return validateEmail(email) && repeatPassword === password;
  }, [email, password, repeatPassword, validateEmail]);
  const onChangeEmail = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => setEmail(event.target.value),
    [],
  );
  const onChangeUsername = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => setUsername(event.target.value),
    [],
  );
  const onChangeFirstName = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => setFirstName(event.target.value),
    [],
  );
  const onChangeLastName = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => setLastName(event.target.value),
    [],
  );
  const onChangePassword = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => setPassword(event.target.value),
    [],
  );
  const onChangeRepeatPassword = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => setRepeatPassword(event.target.value),
    [],
  );
  const toggleShowPassword = useCallback(() => setShowPassword((prev) => !prev), []);
  const toggleShowRepeatPassword = useCallback(() => setShowRepeatPassword((prev) => !prev), []);
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
  const onGoToLogIn = useCallback(() => router.push('/login'), [router]);
  const onSignUp = useCallback(async () => {
    setLoading(true);
    try {
      if (validateInputs()) {
        const res = await axios.post('http://localhost:3000/proxy/auth/register', {
          username,
          email,
          password,
          firstName,
          lastName,
        });
        setLoading(false);
        Cookies.set('token', res.data.token, { expires: 60 * 60 });
        Cookies.set('firstName', res.data.firstName);
        Cookies.set('lastName', res.data.lastName);
        Cookies.set('username', res.data.username);
        Cookies.set('email', res.data.email);
        callToastAndRefresh(true, res.data);
        await router.push('/');
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      callToastAndRefresh(false, e.response.data);
    }
  }, [callToastAndRefresh, email, firstName, lastName, password, router, username, validateInputs]);

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
          className="d-flex flex-column justify-content-between w-100 p-md-5 p-2"
          css={media.query({
            height: ['100%', '100%', '100%', '100vh'],
          })}
        >
          <div className="d-md-flex d-none align-items-center">
            <Button
              variant={ButtonVariants.Flat}
              color={colors.variants.Neutral.Black}
              onClick={onGoToLogIn}
            >
              <Icon icon={icons.arrows.keyboardArrowLeft} size={IconSizes.Medium} />
            </Button>
            <Anchor href="/" className="mx-auto">
              <img alt="logo" src="/static/images/logoWithoutIcon.svg" />
            </Anchor>
          </div>

          <div
            className="d-flex flex-column container my-lg-auto my-5 align-items-md-start align-items-center"
            css={{ maxWidth: 700 }}
          >
            <P className="mb-4" typography={typography.variants.Heading.SemiBold28}>
              Присоединяйтесь к нам!
            </P>
            <div className="mb-4 w-100">
              <Input
                className="py-4"
                value={firstName}
                onChange={onChangeFirstName}
                type="text"
                placeholder="Имя"
              />
            </div>
            <div className="mb-4 w-100">
              <Input
                className="py-4"
                value={lastName}
                onChange={onChangeLastName}
                type="text"
                placeholder="Фамилия"
              />
            </div>
            <Label
              className="mb-4 w-100"
              htmlFor="email"
              color={emailError ? colors.variants.Error.Red1 : undefined}
              helperText={emailError}
            >
              <Input
                className="py-4"
                value={email}
                onChange={onChangeEmail}
                type="text"
                placeholder="Email"
              />
            </Label>
            <div className="mb-4 w-100">
              <Input
                className="py-4"
                value={username}
                onChange={onChangeUsername}
                type="text"
                placeholder="Username"
              />
            </div>
            <Label
              className="mb-4 w-100"
              htmlFor="repeatPassword"
              color={passwordsError ? colors.variants.Error.Red1 : undefined}
              helperText={passwordsError}
            >
              <InputGroup
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
            </Label>
            <Label
              className="w-100"
              htmlFor="repeatPassword"
              color={passwordsError ? colors.variants.Error.Red1 : undefined}
              helperText={passwordsError}
            >
              <InputGroup
                rightElement={
                  <Button
                    variant={ButtonVariants.Flat}
                    size={ButtonSizes.ExtraSmall}
                    typography={typography.variants.Element.Regular12}
                    onClick={toggleShowRepeatPassword}
                  >
                    {showRepeatPassword ? 'скрыть' : 'показать'}
                  </Button>
                }
              >
                <Input
                  className="py-4"
                  value={repeatPassword}
                  onChange={onChangeRepeatPassword}
                  type={showRepeatPassword ? 'text' : 'password'}
                  placeholder="Подтверждение пароля"
                />
              </InputGroup>
            </Label>
            <Button
              disabled={buttonDisabled}
              loading={loading}
              className="mt-4 mb-3"
              css={media.query({
                borderRadius: 8,
                paddingTop: ['1.75rem', '2.25rem'],
                paddingBottom: ['1.75rem', '2.25rem'],
                width: [160, '100%'],
              })}
              onClick={onSignUp}
            >
              Регистрация
            </Button>
            <P className=" mb-md-0 mb-3" typography={typography.variants.Element.Regular16}>
              Уже есть аккаунт?{' '}
              <Anchor
                onClick={onGoToLogIn}
                typography={typography.variants.Element.Bold16}
                color={colors.variants.Text.Primary}
              >
                Войдите
              </Anchor>
            </P>
          </div>
        </div>
      </div>
    </>
  );
};
