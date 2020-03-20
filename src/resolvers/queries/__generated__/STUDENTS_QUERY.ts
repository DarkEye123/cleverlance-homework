/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: STUDENTS_QUERY
// ====================================================

export interface STUDENTS_QUERY_allStudents {
  __typename: 'Student';
  id: string;
  firstName: string;
  surname: string;
  avatar: string;
}

export interface STUDENTS_QUERY {
  allStudents: STUDENTS_QUERY_allStudents[] | null;
}
