import { gql } from '@apollo/client';

export interface CREATE_STUDENT_MUTATION_OUTPUT {
  insert_students: { affected_rows: number };
}

const MUTATION = gql`
  mutation CREATE_STUDENT_MUTATION(
    $id: numeric!
    $firstName: String!
    $surname: String!
    $avatar: String!
  ) {
    insert_students(
      objects: {
        id: $id
        firstName: $firstName
        surname: $surname
        avatar: $avatar
      }
    ) {
      affected_rows
    }
  }
`;

export default MUTATION;
