import { gql } from '@apollo/client';

export interface STUDENTS_QUERY_allStudents {
  __typename: 'Student';
  id: string;
  firstName: string;
  surname: string;
  avatar: string;
}

export interface STUDENTS_QUERY {
  allStudents: STUDENTS_QUERY_allStudents[] | null;
}

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

export default QUERY;
