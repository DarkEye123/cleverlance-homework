import { gql } from '@apollo/client';

export interface CREATE_STUDENT_MUTATION {
  insert_students: { affected_rows: number };
}

export interface CREATE_STUDENT_MUTATIONVariables {
  id: number;
  firstName: string;
  surname: string;
  avatar: string;
}

const MUTATION = gql`
  mutation CREATE_STUDENT_MUTATION(
    $id: ID!
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
