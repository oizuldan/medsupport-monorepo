import { H1, RelevantTopicCard } from 'components';
import React, { FC } from 'react';

export const RelevantTopics: FC = () => (
  <div className="d-flex flex-column align-items-center mt-4">
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
