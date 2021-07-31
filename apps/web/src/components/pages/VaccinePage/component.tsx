import { css } from '@emotion/core';
import { ButtonLink, ButtonSizes, ButtonVariants, Icon, Layout, P } from 'components';
import { colors, icons, typography } from 'core';
import { NextPage } from 'next';
import React from 'react';

import { Questions } from './libs/Questions';
import { RelevantTopics } from './libs/RelevantTopics';
import { VaccineBanner } from './libs/VaccineBanner';

export const VaccinePage: NextPage = () => {
  return (
    <Layout>
      <VaccineBanner></VaccineBanner>
      <RelevantTopics></RelevantTopics>
      <div
        className="mt-4"
        css={css`
          background: ${colors.variants.Brand.Purple};
        `}
      >
        <div className="container my-3 pt-4 pb-4">
          <Questions></Questions>
          <div className="d-flex justify-content-center mt-4">
            <ButtonLink variant={ButtonVariants.Raised} size={ButtonSizes.Large}>
              <P
                color={colors.variants.Neutral.White}
                typography={typography.variants.Element.Bold16}
              >
                Посмотреть все вопросы
              </P>
              <Icon
                icon={icons.arrows.keyboardArrowRight}
                color={colors.variants.Neutral.White}
                className="mr-1"
              />
            </ButtonLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};
