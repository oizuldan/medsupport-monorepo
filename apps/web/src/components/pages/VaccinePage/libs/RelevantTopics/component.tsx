import { H1 } from 'components';
import { NextPage } from 'next';
import React from 'react';

import { RelevantTopicCard } from './lib/RelevantTopicCard';

export const RelevantTopics: NextPage = () => (
  <div className="d-flex flex-column align-items-center">
    <H1 className="pb-3 pt-3"> Актуальные темы </H1>
    <div className="container">
      <div className="row pb-3">
        <RelevantTopicCard title="Как эти вакцины защищают меня?" />
        <RelevantTopicCard title="Как эти вакцины защищают меня?" />
        <div className="w-100"></div>
        <RelevantTopicCard title="Как эти вакцины защищают меня?" />
        <RelevantTopicCard title="Как эти вакцины защищают меня?" />
      </div>
    </div>
  </div>
);
