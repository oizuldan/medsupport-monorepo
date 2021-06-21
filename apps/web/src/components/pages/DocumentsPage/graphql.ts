import { gql } from '@apollo/client';

export const queryDocuments = gql`
  query Documents {
    documents {
      id
      title
      author
      description
      downloadLink
      viewLink
      createdAt
    }
  }
`;
