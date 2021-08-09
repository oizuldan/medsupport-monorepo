import { gql } from '@apollo/client';

export const queryQuestionPage = gql`
  query QuestionPageData($id: ID!, $locale: String!) {
    questionCategory(id: $id) {
      title
      id
      lastModifiedDate
      questions {
        id
        title
        content
      }
    }
    questionPage(locale: $locale) {
      lastModifiesText
      goToFaqButtonText
      goToAllQuestionsText
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
        images {
          url
          name
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
