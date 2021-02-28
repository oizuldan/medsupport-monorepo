import 'bootstrap-4-grid/css/grid.css';

import { H4, P } from 'components';
import { colors } from 'core';
import React, { FC } from 'react';

export const Footer: FC = () => (
  <div
    css={{
      backgroundColor: colors.variants.Primary.Purple1,
    }}
    className="d-flex w-100 px-5 justify-content-between py-4 position-relative"
  >
    <img alt="footer" src="/static/logoWhite.png" height={205} />
    <div className="d-flex flex-column justify-content-between">
      <div className="d-flex flex-column">
        <H4 color={colors.variants.Neutral.White}>О нас</H4>
        <P color={colors.variants.Neutral.White} className="mt-2">
          О Medsupport
        </P>
        <P color={colors.variants.Neutral.White} className="mt-2">
          Стать частью нас
        </P>
        <P color={colors.variants.Neutral.White} className="mt-2">
          Стажировка
        </P>
      </div>
      <div className="d-flex flex-column">
        <H4 color={colors.variants.Neutral.White}>Обратная связь</H4>
        <P color={colors.variants.Neutral.White} className="mt-2">
          Написать нам
        </P>
        <P color={colors.variants.Neutral.White} className="mt-2">
          Оставить заявку
        </P>
      </div>
    </div>
    <div className="d-flex flex-column justify-content-between">
      <div className="d-flex flex-column">
        <H4 color={colors.variants.Neutral.White}>Реклама</H4>
        <P color={colors.variants.Neutral.White} className="mt-2">
          Работай с нами
        </P>
        <P color={colors.variants.Neutral.White} className="mt-2">
          Политика
        </P>
      </div>

      <div className="d-flex flex-column pb-5 mb-1">
        <H4 color={colors.variants.Neutral.White}>Пожертвования</H4>
      </div>
    </div>
    <div className="d-flex flex-column">
      <H4 color={colors.variants.Neutral.White}>Контакты</H4>
      <div className="d-flex mt-4 align-items-center">
        <img alt="email" src="/static/emailIcon.png" />
        <P color={colors.variants.Neutral.White} className="ml-2">
          hello@medsupport.kz
        </P>
      </div>
      <div className="d-flex mt-4 align-items-center">
        <img alt="phone" src="/static/phoneIcon.png" />
        <P color={colors.variants.Neutral.White} className="ml-2">
          +77087747886
        </P>
      </div>
      <div className="d-flex mt-4 align-items-center">
        <img alt="location" src="/static/locationIcon.png" />
        <P color={colors.variants.Neutral.White} className="ml-2">
          Vitebskaya 16/1, Almaty
        </P>
      </div>
      <div className="mt-4 align-items-center">
        <img alt="instagram" src="/static/instagramIcon.png" />
        <img alt="dribble" src="/static/dribbbleIcon.png" className="ml-3" />
        <img alt="twitter" src="/static/twitterIcon.png" className="ml-3" />
        <img alt="youtube" src="/static/youtubeIcon.png" className="ml-3" />
      </div>
    </div>
    <div>
      <div>
        <H4 color={colors.variants.Neutral.White}>Будьте в курсе</H4>
      </div>
    </div>
    <div css={{ position: 'absolute', bottom: 20, right: 30 }}>
      <P color={colors.variants.Neutral.White}>All rights reserved. 2021</P>
    </div>
  </div>
);
