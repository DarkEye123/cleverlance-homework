import { gql } from '@apollo/client';

const QUERY = gql`
  query BOOK_QUERY($id: numeric) {
    students(where: { id: { _eq: $id } }) {
      firstName
      surname
      avatar
      subjects {
        id
        name
      }
    }
  }
`;

export default QUERY;
