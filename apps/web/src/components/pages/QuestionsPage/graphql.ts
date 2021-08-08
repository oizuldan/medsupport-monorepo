import { gql } from '@apollo/client';

export const queryQuestionsPage = gql`
  query QuestionsPageData($locale: String!) {
    allQuestionsPage(locale: $locale) {
      goBackButtonText
      allQuestionText
    }
    questions(locale: $locale) {
      title
      id
      question_category {
        id
      }
    }
    questionCategories(locale: $locale) {
      id
      title
    }
    headerButtons(locale: $locale) {
      buttons {
        title
        link
      }
    }
    footerSections(locale: $locale) {
      sections {
        title
        links {
          link
          title
        }
      }
    }
    headerLinks(locale: $locale) {
      links {
        title
        link
      }
    }
  }
`;
