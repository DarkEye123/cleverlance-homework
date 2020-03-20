import { gql } from '@apollo/client';

export interface Student {
  __typename: 'Student';
  id: Number;
  firstName: string;
  surname: string;
  avatar: string;
}

export interface STUDENTS_QUERY {
  allStudents: Student[] | null;
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
