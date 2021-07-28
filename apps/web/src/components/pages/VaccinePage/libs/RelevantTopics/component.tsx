import { H1, H3, RelevantTopicCard } from 'components';
import { colors } from 'core';
import { NextPage } from 'next';
import React, { FC, useState } from 'react';

type Props = {
  readonly title: string;
};

export const RelevantTopic: FC<Props> = (props: Props) => {
  const { title } = props;
  const [onHover, setOnHover] = useState<boolean>(false);

  return (
    <RelevantTopicCard
      className="col d-flex justify-content-center"
      // eslint-disable-next-line react/jsx-no-bind
      onMouseOver={() => setOnHover(true)}
      // eslint-disable-next-line react/jsx-no-bind
      onMouseOut={() => setOnHover(false)}
      onHover={onHover}
    >
      <H3 color={onHover ? colors.variants.Neutral.White : colors.variants.Neutral.Black}>
        {title}
      </H3>
    </RelevantTopicCard>
  );
};

export const RelevantTopics: NextPage = () => (
  <div className="d-flex flex-column align-items-center" css={{ minHeight: '100vh' }}>
    <H1 className="pb-3"> Актуальные темы </H1>
    <div className="container">
      <div className="row">
        <RelevantTopic title="Как эти вакцины защищают меня?" />
        <RelevantTopic title="Как эти вакцины защищают меня?" />
        <div className="w-100"></div>
        <RelevantTopic title="Как эти вакцины защищают меня?" />
        <RelevantTopic title="Как эти вакцины защищают меня?" />
      </div>
    </div>
  </div>
);
