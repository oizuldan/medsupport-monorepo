import axios from 'axios';
import {
  Anchor,
  Button,
  ButtonVariants,
  Icon,
  IconSizes,
  Input,
  Label,
  P,
  Toast,
} from 'components';
import { colors, icons, media, services, typography } from 'core';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { ChangeEventHandler, useCallback, useState } from 'react';

const Header = dynamic(() => import('./libs/Header'));

const REGEX_FOR_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const RestorePasswordPage: NextPage = () => {
  const router = useRouter();
  const isMobile = media.useMobileDetector().phone();

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
      <P color={colors.variants.Neutral.White} typography={typography.variants.Content.Regular16}>
        {message}
      </P>,
    );
  }, []);
  const onGoBack = useCallback(() => router.push('/login'), [router]);
  const onSendNewPassword = useCallback(async () => {
    setLoading(true);
    if (!validateEmail(email)) {
      setEmailError('Не верный формат email');
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post('http://localhost:3000/proxy/auth/restore-password', {
        email,
      });
      callToastAndRefresh(true, res.data);
      await router.push('/login');
    } catch (e) {
      callToastAndRefresh(false, e.response.data);
    }
    setLoading(false);
  }, [validateEmail, email, callToastAndRefresh, router]);

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

          <div className="d-flex flex-column container my-lg-auto my-5 " css={{ maxWidth: 700 }}>
            <P className="mb-2" typography={typography.variants.Heading.SemiBold28}>
              Восстановление пароля
            </P>
            <P
              color={colors.variants.Neutral.Grey}
              typography={typography.variants.Content.Regular16}
            >
              Введите ваш email и мы вышлем вам временный пароль
            </P>
            <div className="my-3 w-100">
              <Label
                htmlFor="email"
                color={emailError ? colors.variants.Error.Red1 : undefined}
                helperText={emailError}
              >
                <Input value={email} onChange={onChangeUsername} type="email" placeholder="email" />
              </Label>
            </div>
            <Button
              disabled={buttonDisabled}
              loading={loading}
              className="mt-4 mb-3 "
              css={media.query({
                borderRadius: 8,
                paddingTop: ['1.75rem', '2.25rem'],
                paddingBottom: ['1.75rem', '2.25rem'],
                width: '100%',
              })}
              onClick={onSendNewPassword}
            >
              Выслать новый пароль
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
