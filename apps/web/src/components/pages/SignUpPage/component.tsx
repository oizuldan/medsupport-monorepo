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
  Toast,
} from 'components';
import { colors, services, typography } from 'core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { ChangeEventHandler, useCallback, useState } from 'react';

const REGEX_FOR_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const SignUpPage: NextPage = () => {
  const router = useRouter();

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

  const buttonDisabled =
    username.length === 0 ||
    password.length === 0 ||
    firstName.length === 0 ||
    lastName.length === 0;

  const validateEmail = useCallback((value: string) => REGEX_FOR_EMAIL.test(value), []);
  const validateInputs = useCallback(() => {
    setEmailError(!validateEmail(email) ? 'Email format is not valid' : undefined);
    setPasswordsError(repeatPassword !== password ? 'Passwords do not match' : undefined);
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
      <P color={colors.variants.Neutral.White} typography={typography.variants.Main.Regular22}>
        {message}
      </P>,
    );
  }, []);
  const onGoToLogIn = useCallback(() => router.push('/login'), [router]);
  const onSignUp = useCallback(async () => {
    try {
      if (validateInputs()) {
        const res = await axios.post('http://localhost:3000/proxy/auth/register', {
          username,
          email,
          password,
          firstName,
          lastName,
        });
        callToastAndRefresh(true, res.data.message);
        await router.push('/login');
      }
    } catch (e) {
      callToastAndRefresh(false, e.response.data);
    }
  }, [callToastAndRefresh, email, firstName, lastName, password, router, username, validateInputs]);

  return (
    <Layout>
      <div className="d-flex h-100 align-items-center">
        <div className="w-50">
          <img className="h-100 w-100" alt="logo" src="/static/logoBig.png" />
        </div>
        <div className="h-100 w-50 p-5 d-flex flex-column justify-content-center">
          <H1 color={colors.variants.Primary.Purple1}>Sign up</H1>
          <P color={colors.variants.Neutral.Grey}>
            Already have an account?{' '}
            <Anchor onClick={onGoToLogIn} color={colors.variants.Success.Green3}>
              Log In
            </Anchor>
          </P>
          <Label className="mt-5" htmlFor="firstName" mainText="First Name">
            <Input value={firstName} onChange={onChangeFirstName} placeholder="Alan" />
          </Label>
          <Label className="mt-3" htmlFor="lastName" mainText="Last Name">
            <Input value={lastName} onChange={onChangeLastName} placeholder="Turing" />
          </Label>
          <Label className="mt-3" htmlFor="username" mainText="Username">
            <Input value={username} onChange={onChangeUsername} placeholder="username" />
          </Label>
          <Label
            className="mt-3"
            htmlFor="email"
            mainText="Email"
            color={emailError ? colors.variants.Error.Red1 : undefined}
            helperText={emailError}
          >
            <Input
              value={email}
              onChange={onChangeEmail}
              type="email"
              placeholder="example@gmail.com"
            />
          </Label>
          <Label
            className="w-100 mt-3"
            htmlFor="password"
            mainText="Password"
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
          <Label
            className="w-100 mt-3"
            htmlFor="repeatPassword"
            mainText="Repeat Password"
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
                  {showRepeatPassword ? 'hide' : 'show'}
                </Button>
              }
            >
              <Input
                value={repeatPassword}
                onChange={onChangeRepeatPassword}
                type={showRepeatPassword ? 'text' : 'password'}
                placeholder="*********"
              />
            </InputGroup>
          </Label>
          <div className="d-flex justify-content-between align-items-center">
            <Button
              className="mt-4 px-4"
              color={colors.variants.Primary.Purple1}
              disabled={buttonDisabled}
              onClick={onSignUp}
            >
              Create
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
