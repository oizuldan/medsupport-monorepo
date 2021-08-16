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
      sponsor {
        title
        link
        image {
          url
          name
        }
      }
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
