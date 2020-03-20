import { gql } from '@apollo/client';
import {
  STUDENTS_QUERY,
  STUDENTS_QUERY_allStudents,
} from './__generated__/STUDENTS_QUERY';

const QUERY = gql`
  query STUDENTS_QUERY {
    allStudents {
      id
      firstName
      surname
      avatar
    }
  }
`;

export type STUDENTS_QUERY_TYPEDEF = STUDENTS_QUERY;
export type STUDENTS_QUERY_allStudents_TYPEDEF = STUDENTS_QUERY_allStudents;
export default QUERY;
