import { css } from '@emotion/core';
import { Layout } from 'components';
import { colors } from 'core';
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
        </div>
      </div>
    </Layout>
  );
};
