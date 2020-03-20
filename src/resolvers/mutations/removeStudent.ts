import { gql } from '@apollo/client';

export interface REMOVE_STUDENT_MUTATION {
  removeStudent: boolean | null;
}

export interface REMOVE_STUDENT_MUTATIONVariables {
  id: string;
}

const MUTATION = gql`
  mutation REMOVE_STUDENT_MUTATION($id: ID!) {
    removeStudent(id: $id)
  }
`;

export default MUTATION;
