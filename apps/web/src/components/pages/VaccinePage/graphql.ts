import { gql } from '@apollo/client';

export const queryFaqPage = gql`
  query FaqPageData($locale: String!) {
    faq(locale: $locale) {
      relevantTopicsText
      readMoreText
      showAllQuestions
      actualTopics {
        questions {
          id
          title
          question_category {
            id
          }
        }
      }
      bannerTitle
      bannerSubtitle
      bannerImage {
        url
        name
      }
      partner {
        url
        name
      }
      partnerText
    }
    questionCategories(locale: $locale) {
      title
      id
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
