import { ButtonLink, ButtonSizes, ButtonVariants, H3, Icon, Layout, P } from 'components';
import { colors, icons, typography } from 'core';
import { NextPage } from 'next';
import React from 'react';

import { Questions } from '../VaccinePage/libs/Questions';

export const AllQuestionsPage: NextPage = () => {
  return (
    <Layout>
      <div className="container my-3">
        <ButtonLink variant={ButtonVariants.Flat} size={ButtonSizes.Small} className="pl-0">
          <Icon
            icon={icons.arrows.arrowBack}
            color={colors.variants.Neutral.Black}
            className="mr-1"
          />
          <P
            color={colors.variants.Neutral.Grey}
            typography={typography.variants.Element.Regular12}
          >
            Вернуться на предыдущую страницу
          </P>
        </ButtonLink>
        <div className="d-flex flex-column mb-5">
          <H3 className="mt-3 mb-4"> Все вопросы </H3>
          <Questions></Questions>
        </div>
      </div>
    </Layout>
  );
};
