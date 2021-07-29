import { css } from '@emotion/core';
import { H2, H4Regular } from 'components';
import { colors } from 'core';
import { NextPage } from 'next';
import React, { FC } from 'react';

const LeftContent: FC = () => {
  return (
    <div
      css={css`
        background: ${colors.variants.Brand.Purple};
        width: 100%;
        height: 100%;
        padding: 8rem;
      `}
    >
      <H2
        css={css`
          margin: 2rem 0rem;
        `}
        color={colors.variants.Neutral.White}
      >
        У Вас есть вопросы о вакцинах от COVID-19. И это хорошо!
      </H2>
      <H4Regular
        css={css`
          margin: 2rem 0rem;
        `}
        color={colors.variants.Neutral.White}
      >
        Осторожность всегда к месту, когда появляется что-то новое. Осведомленность о вакцинах от
        COVID-19 — важный шаг, который поможет нам остановить эту пандемию.{' '}
      </H4Regular>
      <H4Regular color={colors.variants.Neutral.White}>
        {' '}
        Вакцины от COVID-19 бесплатны и стали широко доступны в США. Каждый человек в возрасте от 12
        лет имеет право на вакцинацию от COVID-19.{' '}
      </H4Regular>
    </div>
  );
};

const RightContent: FC = () => {
  return (
    <div
      css={css`
        width: 100%;
        min-height: 100%;
      `}
    >
      <img
        src="https://www.internationaldisabilityalliance.org/sites/default/files/custom/covid-19-vaccine.jpg"
        alt="Some"
        height="100%"
        css={css`
          width: 100%;
          height: 100%;
          object-fit: cover;
        `}
      />
    </div>
  );
};

export const VaccineBanner: NextPage = () => (
  <div
    className="d-flex flex-row"
    css={css`
      margin-bottom: 2rem;
    `}
  >
    <LeftContent></LeftContent>
    <RightContent></RightContent>
  </div>
);
