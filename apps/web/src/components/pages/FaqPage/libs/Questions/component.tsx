import { QuestionCard } from 'components';
import React, { FC } from 'react';

import { Props } from './props';

export const Questions: FC<Props> = (props: Props) => (
  <div className="tw-flex tw-flex-wrap tw-justify-center">
    {props.questionCategories.map((category) => (
      <QuestionCard
        key={category.id}
        title={category.title}
        id={category.id}
        buttonText={props.readMoreText}
      />
    ))}
  </div>
);
