import { gql } from '@apollo/client';

export const queryArticlesPage = gql`
  query ArticlesPage($locale: String!) {
    articles(locale: $locale) {
      id
      title
      content
      previewImage {
        url
        name
      }
    }
    articlesSection(locale: $locale) {
      section {
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
