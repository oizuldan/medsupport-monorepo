import { gql } from '@apollo/client';

export const queryArticles = gql`
  query Articles($locale: String!, $limit: Int) {
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
