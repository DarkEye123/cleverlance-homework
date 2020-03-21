import { gql } from '@apollo/client';

export interface REMOVE_SUBJECT_MUTATION_OUTPUT {
  delete_subjects: { affected_rows: number };
}

const MUTATION = gql`
  mutation REMOVE_SUBJECT_MUTATION($id: numeric!) {
    delete_subjects(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export default MUTATION;
