import { gql } from '@apollo/client';

export interface CREATE_SUBJECT_MUTATION {
  insert_subjects: { affected_rows: number };
}

export interface CREATE_SUBJECT_MUTATIONVariables {
  id: string;
  name: string;
}

const MUTATION = gql`
  mutation CREATE_SUBJECT_MUTATION($id: numeric!, $name: String!) {
    insert_subjects(objects: { id: $id, name: $name }) {
      affected_rows
    }
  }
`;

export default MUTATION;
