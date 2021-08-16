import { gql } from '@apollo/client';

export const queryAboutUsPageData = gql`
  query AboutUsPageData($locale: String) {
    aboutUsPage(locale: $locale) {
      content
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
