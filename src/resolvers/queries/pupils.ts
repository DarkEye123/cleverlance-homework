import { gql } from '@apollo/client';

const PUPILS_QUERY = gql`
  query PUPILS_QUERY {
    allPupils {
      id
      firstName
      surname
      avatar
    }
  }
`;

export default PUPILS_QUERY;
