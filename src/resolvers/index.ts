import { STUDENTS_QUERY, STUDENTS_QUERY_allStudents } from './queries/students';
import {
  REMOVE_STUDENT_MUTATION,
  REMOVE_STUDENT_MUTATIONVariables,
} from './mutations/removeStudent';

export { default as STUDENTS_QUERY } from './queries/students';
export { default as REMOVE_STUDENT_MUTATION } from './mutations/removeStudent';

export type STUDENTS_QUERY_TYPEDEF = STUDENTS_QUERY;
export type STUDENTS_QUERY_allStudents_TYPEDEF = STUDENTS_QUERY_allStudents;

export type REMOVE_STUDENT_MUTATION_TYPEDEF = REMOVE_STUDENT_MUTATION;
export type REMOVE_STUDENT_MUTATIONVariables_TYPEDEF = REMOVE_STUDENT_MUTATIONVariables;
