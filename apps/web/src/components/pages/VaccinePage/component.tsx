import { Layout } from 'components';
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
      <Questions></Questions>
    </Layout>
  );
};
