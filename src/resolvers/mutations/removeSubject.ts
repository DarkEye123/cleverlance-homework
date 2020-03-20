import { gql } from '@apollo/client';

export interface REMOVE_SUBJECT_MUTATION {
  removeSubject: boolean | null;
}

export interface REMOVE_SUBJECT_MUTATIONVariables {
  id: string;
}

const MUTATION = gql`
  mutation REMOVE_SUBJECT_MUTATION($id: ID!) {
    removeSubject(id: $id)
  }
`;

export default MUTATION;
