import { gql } from '@apollo/client';

export interface REMOVE_STUDENT_MUTATION_OUTPUT {
  delete_students: { affected_rows: number };
}

export interface REMOVE_STUDENT_MUTATIONVariables {
  id: number;
}

const MUTATION = gql`
  mutation REMOVE_STUDENT_MUTATION($id: numeric!) {
    delete_students(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export default MUTATION;
