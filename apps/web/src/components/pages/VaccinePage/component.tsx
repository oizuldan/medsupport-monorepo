import { Layout } from 'components';
import { NextPage } from 'next';
import React from 'react';

import { Questions } from './libs/Questions';
import { RelevantTopics } from './libs/RelevantTopics';

export const VaccinePage: NextPage = () => {
  return (
    <Layout>
      <RelevantTopics></RelevantTopics>
      <Questions></Questions>
    </Layout>
  );
};
