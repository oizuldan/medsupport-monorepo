import { gql } from '@apollo/client';

export const queryDocuments = gql`
  query Documents($locale: String) {
    documents {
      id
      title
      author
      description
      downloadLink
      viewLink
      createdAt
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
