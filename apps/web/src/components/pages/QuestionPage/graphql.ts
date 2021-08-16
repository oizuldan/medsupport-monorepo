import { gql } from '@apollo/client';

export const queryQuestionPage = gql`
  query QuestionPageData($id: ID!, $locale: String!) {
    questionCategory(id: $id) {
      title
      id
      lastModifiedDate
      localizations {
        title
      }
      questions {
        id
        title
        content
        localizations {
          id
          title
          content
        }
      }
      locale
    }
    questionPage(locale: $locale) {
      lastModifiesText
      goToFaqButtonText
      goToAllQuestionsText
      sponsor {
        title
        link
        image {
          url
          name
        }
      }
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
          title
          link
          image {
            url
            name
          }
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
