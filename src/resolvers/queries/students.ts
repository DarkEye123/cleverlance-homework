import { gql } from '@apollo/client';

export interface Student {
  __typename: 'students';
  firstName: string;
  surname: string;
  avatar: string;
}

export interface STUDENTS_QUERY_OUTPUT {
  students: Student[] | null;
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
