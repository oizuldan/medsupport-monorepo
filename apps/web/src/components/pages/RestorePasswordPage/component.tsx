import axios from 'axios';
import { Button, H1, Input, Label, Layout, P, Spinner, Toast } from 'components';
import { colors, services, typography } from 'core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { ChangeEventHandler, useCallback, useState } from 'react';

const REGEX_FOR_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const RestorePasswordPage: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const buttonDisabled = email.length === 0;

  const validateEmail = useCallback((value: string) => REGEX_FOR_EMAIL.test(value), []);
  const onChangeUsername = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => setEmail(event.target.value),
    [],
  );
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
    if (!validateEmail(email)) {
      setEmailError('Email format is not valid');
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post('http://localhost:3000/proxy/auth/restore-password', {
        email,
      });
      callToastAndRefresh(true, res.data.message);
      await router.push('/login');
    } catch (e) {
      callToastAndRefresh(false, e.response.data);
    }
    setLoading(false);
  }, [validateEmail, email, callToastAndRefresh, router]);

  return (
    <Layout>
      <div className="d-flex h-100 align-items-center">
        <div className="w-50">
          <img className="h-100 w-100" alt="logo" src="/static/logoBig.png" />
        </div>
        <div className="h-100 w-50 p-5 d-flex flex-column justify-content-center">
          <H1 color={colors.variants.Brand.Purple}>Forgot password</H1>
          <P
            color={colors.variants.Neutral.Grey}
            typography={typography.variants.Heading.Regular28}
          >
            Enter your email and we will send you a temporary password
          </P>
          <div className="mb-3 mt-5">
            <Label
              htmlFor="email"
              mainText="Email"
              color={emailError ? colors.variants.Error.Red1 : undefined}
              helperText={emailError}
            >
              <Input
                value={email}
                onChange={onChangeUsername}
                type="email"
                placeholder="example@gmail.com"
              />
            </Label>
          </div>
          <div className="mt-4 d-flex align-items-center">
            {loading ? (
              <Spinner />
            ) : (
              <Button
                className="px-4"
                color={colors.variants.Brand.Purple}
                onClick={onLogIn}
                disabled={buttonDisabled}
              >
                Send new password
              </Button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
