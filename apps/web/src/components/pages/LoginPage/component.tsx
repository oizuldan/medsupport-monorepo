import axios from 'axios';
import {
  Anchor,
  Button,
  ButtonSizes,
  ButtonVariants,
  H1,
  Input,
  InputGroup,
  Label,
  Layout,
  P,
  Spinner,
  Toast,
} from 'components';
import { colors, services, typography } from 'core';
import Cookies from 'js-cookie';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { ChangeEventHandler, useCallback, useState } from 'react';

export const LoginPage: NextPage = () => {
  const router = useRouter();
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
  const onGoToSignUp = useCallback(() => router.push('/signup'), [router]);
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
      const res = await axios.post('http://localhost:3000/proxy/auth/login', {
        username,
        password,
      });
      Cookies.set('token', res.data.token, { expires: 60 * 60 });
      callToastAndRefresh(true, res.data);
      await router.push('/documents');
    } catch (e) {
      callToastAndRefresh(false, e.response.data);
    }
    setLoading(false);
  }, [username, password, callToastAndRefresh, router]);

  return (
    <Layout>
      <div className="d-flex h-100 align-items-center">
        <div className="w-50">
          <img className="h-100 w-100" alt="logo" src="/static/logoBig.png" />
        </div>
        <div className="h-100 w-50 p-5 d-flex flex-column justify-content-center">
          <H1 color={colors.variants.Brand.Purple}>Log In</H1>
          <P color={colors.variants.Neutral.Grey}>
            Do not have an account?{' '}
            <Anchor onClick={onGoToSignUp} color={colors.variants.Success.Green1}>
              Create account
            </Anchor>
          </P>
          <div className="mb-3 mt-5">
            <Label htmlFor="username" mainText="Username or email">
              <Input
                value={username}
                onChange={onChangeUsername}
                type="text"
                placeholder="example@gmail.com"
              />
            </Label>
          </div>
          <Label className="w-100" htmlFor="password" mainText="Password">
            <InputGroup
              rightElement={
                <Button
                  variant={ButtonVariants.Flat}
                  size={ButtonSizes.ExtraSmall}
                  typography={typography.variants.Element.Regular12}
                  onClick={toggleShowPassword}
                >
                  {showPassword ? 'hide' : 'show'}
                </Button>
              }
            >
              <Input
                value={password}
                onChange={onChangePassword}
                type={showPassword ? 'text' : 'password'}
                placeholder="*********"
              />
            </InputGroup>
          </Label>
          <div className="mt-4 d-flex justify-content-between align-items-center">
            {loading ? (
              <Spinner />
            ) : (
              <Button
                className="px-4"
                color={colors.variants.Brand.Purple}
                onClick={onLogIn}
                disabled={buttonDisabled}
              >
                Log in
              </Button>
            )}
            <Anchor href="/restore-password" color={colors.variants.Brand.Purple}>
              Forgot Password?
            </Anchor>
          </div>
        </div>
      </div>
    </Layout>
  );
};
