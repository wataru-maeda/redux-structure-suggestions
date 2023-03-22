import { gql } from "@apollo/client";

export const EXAMPLES_QUERY = gql`
  query examples($limit: Float!, $skip: Float!) {
    example(limit: $limit, skip: $skip) {
      id
      name
      email
    }
  }
`;

export const UPDATE_EXAMPLE_MUTATION = gql`
  mutation updateExample($hi: String!) {
    updateExample(hi: $hi)
  }
`;
