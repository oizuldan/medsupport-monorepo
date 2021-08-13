import { gql } from '@apollo/client';

export const queryArticle = gql`
  query Article($id: ID!, $locale: String) {
    article(id: $id) {
      id
      title
      content
      previewImage {
        url
        name
      }
      locale
      localizations {
        content
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
