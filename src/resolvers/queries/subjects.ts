import { gql } from '@apollo/client';

export interface Subject {
  __typename: 'Subject';
  id: string;
  name: string;
}

export interface SUBJECTS_QUERY {
  allSubjects: Subject[] | null;
}

const QUERY = gql`
  query SUBJECTS_QUERY {
    allSubjects {
      id
      name
    }
  }
`;

export default QUERY;
