import { gql } from '@apollo/client';
import { Student } from '../types';
export interface STUDENTS_QUERY_OUTPUT {
  students: Student[];
}

const QUERY = gql`
  query STUDENTS_QUERY {
    students {
      id
      firstName
      surname
      avatar
    }
  }
`;

export default QUERY;
