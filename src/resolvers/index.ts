import { STUDENTS_QUERY_OUTPUT } from './queries/students';
import { SUBJECTS_QUERY_OUTPUT } from './queries/subjects';
import { BOOK_QUERY_OUTPUT } from './queries/book';
import { Student, Subject } from './types';
import { REMOVE_STUDENT_MUTATION_OUTPUT } from './mutations/removeStudent';
import { REMOVE_SUBJECT_MUTATION_OUTPUT } from './mutations/removeSubject';
import { CREATE_STUDENT_MUTATION_OUTPUT } from './mutations/createStudent';

export { default as STUDENTS_QUERY } from './queries/students';
export { default as SUBJECTS_QUERY } from './queries/subjects';
export { default as BOOK_QUERY } from './queries/book';
export { default as REMOVE_STUDENT_MUTATION } from './mutations/removeStudent';
export { default as REMOVE_SUBJECT_MUTATION } from './mutations/removeSubject';
export { default as CREATE_STUDENT_MUTATION } from './mutations/createStudent';
export { default as CREATE_SUBJECT_MUTATION } from './mutations/createSubject';
export type STUDENTS_QUERY_OUTPUT_SHAPE = STUDENTS_QUERY_OUTPUT;
export type BOOK_QUERY_OUTPUT_SHAPE = BOOK_QUERY_OUTPUT;
export type StudentGraphQL = Student;
export type SUBJECTS_QUERY_OUTPUT_SHAPE = SUBJECTS_QUERY_OUTPUT;
export type SubjectGraphQL = Subject;
export type REMOVE_STUDENT_MUTATION_OUTPUT_SHAPE = REMOVE_STUDENT_MUTATION_OUTPUT;
export type REMOVE_SUBJECT_MUTATION_OUTPUT_SHAPE = REMOVE_SUBJECT_MUTATION_OUTPUT;
export type CREATE_STUDENT_MUTATION_INPUT_SHAPE = Student;
export type CREATE_STUDENT_MUTATION_OUTPUT_SHAPE = CREATE_STUDENT_MUTATION_OUTPUT;
export type CREATE_SUBJECT_MUTATION_INPUT_SHAPE = Subject;
