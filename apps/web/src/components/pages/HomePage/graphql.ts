import { gql } from '@apollo/client';

export const queryMainPage = gql`
  query MainPage($locale: String!, $limit: Int) {
    headerBanners(locale: $locale) {
      banners {
        title
        subtitle
        image {
          url
          name
        }
        buttonLink
        buttonTitle
      }
    }
    articlesSection(locale: $locale) {
      section {
        title
        link {
          link
          title
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
    articles(locale: $locale, limit: $limit) {
      id
      title
      content
      previewImage {
        url
        name
      }
    }
  }
`;
