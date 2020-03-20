import { gql } from '@apollo/client';

const STUDENTS_QUERY = gql`
  query STUDENTS_QUERY {
    allStudents {
      id
      firstName
      surname
      avatar
    }
  }
`;

export default STUDENTS_QUERY;
