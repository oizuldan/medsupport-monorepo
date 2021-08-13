import { QuestionPageData_questionCategory_questions } from 'components/pages/QuestionPage';
import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLButtonElement> & {
  readonly question: QuestionPageData_questionCategory_questions;
  readonly isInitiallyOpen: boolean;
  readonly useLocalization: boolean;
};
