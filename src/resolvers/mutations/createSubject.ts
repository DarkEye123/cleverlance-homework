import { gql } from '@apollo/client';

export interface CREATE_SUBJECT_MUTATION {
  createSubject: { id: string };
}

export interface CREATE_SUBJECT_MUTATIONVariables {
  id: string;
  name: string;
}

const MUTATION = gql`
  mutation CREATE_SUBJECT_MUTATION($id: ID!, $name: String!) {
    createSubject(id: $id, name: $name) {
      id
    }
  }
`;

export default MUTATION;
