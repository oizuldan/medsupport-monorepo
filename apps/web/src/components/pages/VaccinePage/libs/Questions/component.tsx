import styled from '@emotion/styled';
import React, { FC } from 'react';

import { QuestionCard } from './lib/QuestionCard';

const Grid = styled.div`
  display: grid;
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  grid-template-columns: auto auto auto;
`;

export const Questions: FC = () => (
  <div className="d-flex flex-column align-items-center">
    <Grid>
      <QuestionCard title="Как эти вакцины защищают меня?" />
      <QuestionCard title="Как эти вакцины защищают меня?" />
      <QuestionCard title="Как эти вакцины защищают меня?" />
      <QuestionCard title="Как эти вакцины защищают меня?" />
      <QuestionCard title="Как эти вакцины защищают меня?" />
      <QuestionCard title="Как эти вакцины защищают меня?" />
    </Grid>
  </div>
);
