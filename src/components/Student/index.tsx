import React from 'react';

// interface PupilSubject {
//   id: number;
//   pupil_id: number;
//   subject_id: number;
//   Pupil
// }

// interface GrqphQLStudent {
//   id: number;
//   firstName: string,
//   surname: string,
//   avatar: string,
//   PupilSubjects: PupilSubject[]
// }

import { STUDENTS_QUERY_allStudents_TYPEDEF } from '../../resolvers';

const Student: React.FC<STUDENTS_QUERY_allStudents_TYPEDEF> = ({
  id,
  firstName,
  surname,
  avatar,
}) => <div>{id}</div>;

export default Student;
