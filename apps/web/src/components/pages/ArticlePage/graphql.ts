import { gql } from '@apollo/client';

export const queryArticle = gql`
  query Article($id: ID!) {
    article(id: $id) {
      id
      title
      content
      previewImage {
        url
        name
      }
    }
    artilcesPageBackButton(locale: $locale) {
      backButton {
        link
        title
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
