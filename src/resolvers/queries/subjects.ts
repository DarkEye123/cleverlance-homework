import { gql } from '@apollo/client';
import { Subject } from '../types';

export interface SUBJECTS_QUERY_OUTPUT {
  subjects: Subject[];
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
