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
  }
`;
