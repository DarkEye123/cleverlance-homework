import { gql } from '@apollo/client';
import { BookEntry, Student } from '../types';
export interface BOOK_QUERY_OUTPUT {
  students: (Student & { book: BookEntry[] })[];
}

const QUERY = gql`
  query BOOK_QUERY($id: numeric) {
    students(where: { id: { _eq: $id } }) {
      firstName
      surname
      avatar
      book {
        id
        subject {
          id
          name
        }
        scores
      }
    }
  }
`;

export default QUERY;
