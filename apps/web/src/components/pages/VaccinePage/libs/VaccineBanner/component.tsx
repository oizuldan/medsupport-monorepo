import { css } from '@emotion/core';
import { H2, H4Regular } from 'components';
import { colors } from 'core';
import React, { FC } from 'react';

const LeftContent: FC = () => {
  return (
    <div
      css={css`
        background: ${colors.variants.Brand.Purple};
        padding: 8rem;
      `}
    >
      <H2 className="mt-2 mb-2" color={colors.variants.Neutral.White}>
        У Вас есть вопросы о вакцинах от COVID-19. И это хорошо!
      </H2>
      <H4Regular className="mt-2 mb-2" color={colors.variants.Neutral.White}>
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
    <div>
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

export const VaccineBanner: FC = () => (
  <div
    css={css`
      display: grid;
      grid-template-columns: 1fr 1fr;
    `}
  >
    <LeftContent></LeftContent>
    <RightContent></RightContent>
  </div>
);
