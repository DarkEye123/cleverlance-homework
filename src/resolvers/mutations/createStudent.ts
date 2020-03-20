import { gql } from '@apollo/client';

export interface CREATE_STUDENT_MUTATION {
  createStudent: { id: string };
}

export interface CREATE_STUDENT_MUTATIONVariables {
  id: string;
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
    createStudent(
      id: $id
      firstName: $firstName
      surname: $surname
      avatar: $avatar
    ) {
      id
    }
  }
`;

export default MUTATION;
