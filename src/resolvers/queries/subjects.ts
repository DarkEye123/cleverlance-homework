import { gql } from '@apollo/client';

export interface Subject {
  __typename: 'subjects';
  id: number;
  name: string;
}

export interface SUBJECTS_QUERY_OUTPUT {
  subjects: Subject[] | null;
}

const QUERY = gql`
  query SUBJECTS_QUERY {
    subjects {
      id
      name
    }
  }
`;

export default QUERY;
