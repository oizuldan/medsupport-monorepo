import styled from '@emotion/styled';
import { colors } from 'core';
import { NextPage } from 'next';
import React from 'react';

import { QuestionCard } from './lib/QuestionCard';

export const QuestionBackgroundContainer = styled.div`
  background: ${colors.variants.Brand.Purple};
  padding: 2rem;
  margin-top: 2rem;
`;

export const Questions: NextPage = () => (
  <QuestionBackgroundContainer className="d-flex flex-column align-items-center">
    <div className="container">
      <div className="row">
        <QuestionCard title="Как эти вакцины защищают меня?" />
        <QuestionCard title="Как эти вакцины защищают меня?" />
        <QuestionCard title="Как эти вакцины защищают меня?" />
        <div className="w-100"></div>
        <QuestionCard title="Как эти вакцины защищают меня?" />
        <QuestionCard title="Как эти вакцины защищают меня?" />
        <QuestionCard title="Как эти вакцины защищают меня?" />
      </div>
    </div>
  </QuestionBackgroundContainer>
);
