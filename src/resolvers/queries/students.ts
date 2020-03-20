import { gql } from '@apollo/client';
import { Subject } from './subjects';

export interface Student {
  id: number;
  firstName: string;
  surname: string;
  avatar: string;
  subjects: Subject[] | [];
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
