import 'bootstrap-4-grid/css/grid.css';

import styled from '@emotion/styled';
import { Anchor, Button, ButtonLink, ButtonSizes, ButtonVariants, Drawer, H2 } from 'components';
import { colors, typography } from 'core';
import React, { FC, useCallback, useState } from 'react';

import { Directions } from '../../molecules/Drawer/types/Directions';

const Head = styled.div`
  background-color: ${colors.variants.Background.Primary};
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Collapse = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

const CollapsedButton = styled.div`
  display: flex;
  text-align: center;
  @media only screen and (min-width: 1100px) {
    display: none;
  }
`;

export const Header: FC = () => {
  const [close, setClose] = useState(false);
  const handleClose = useCallback(() => setClose((close) => !close), []);

  return (
    <Head className="px-5 py-3">
      <Collapse>
        <Anchor
          href="/"
          color={colors.variants.Neutral.Black}
          className="m-auto p-1"
          css={{ whiteSpace: 'nowrap' }}
          typography={typography.variants.Heading.SemiBold22}
        >
          О нас
        </Anchor>
        <Anchor
          href="/documents"
          className="m-auto p-1"
          color={colors.variants.Neutral.Black}
          typography={typography.variants.Heading.SemiBold22}
        >
          Документы
        </Anchor>
        <Anchor
          href="/"
          className="m-auto p-1"
          color={colors.variants.Neutral.Black}
          typography={typography.variants.Heading.SemiBold22}
        >
          Курсы
        </Anchor>
        <div
          css={{ border: '1px solid', borderColor: colors.variants.Error.Red4, borderRadius: 4 }}
          className="px-3 py-1 p-1"
        >
          <Anchor
            href="/liveStream"
            color={colors.variants.Error.Red4}
            typography={typography.variants.Heading.SemiBold22}
          >
            LIVE
          </Anchor>
        </div>
      </Collapse>
      <CollapsedButton onClick={handleClose}>
        <img alt="close" src="/static/collapsed.svg" />
        <Drawer direction={Directions.FromLeft} active={close} zIndex={5}>
          <h3>Drawer</h3>
        </Drawer>
      </CollapsedButton>
      <Anchor href="/" className="justify-content-center m-auto">
        <div className="d-flex align-items-center">
          <img height={36} alt="logo" src="/static/logo.png" />
          <H2 className="m-0 " css={{ color: colors.variants.Neutral.Black }}>
            Medsupport
          </H2>
        </div>
      </Anchor>

      <Collapse>
        <Button className="m-auto" variant={ButtonVariants.Flat}>
          <img height={20} alt="logoSearch" src="/static/iconSearch.png" />
        </Button>
        <Button className="m-auto" variant={ButtonVariants.Flat}>
          <img height={24} alt="logoSearch" src="/static/language.png" />
          <div>RU</div>
        </Button>
        <ButtonLink
          href="/login"
          className="m-auto"
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
      </Collapse>
      <CollapsedButton style={{ justifyContent: 'flex-end' }}>
        <Button variant={ButtonVariants.Flat}>
          <img height={24} alt="logoSearch" src="/static/language.png" />
        </Button>
        <Button variant={ButtonVariants.Flat}>
          <img height={20} alt="logoSearch" src="/static/iconSearch.png" />
        </Button>
      </CollapsedButton>
    </Head>
  );
};
