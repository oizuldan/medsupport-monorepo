import { Layout } from 'components';
import { NextPage } from 'next';
import React from 'react';

import { RelevantTopics } from './libs/RelevantTopics';

export const VaccinePage: NextPage = () => {
  return (
    <Layout>
      <RelevantTopics>Questions</RelevantTopics>
    </Layout>
  );
};
