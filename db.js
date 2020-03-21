/**
 * Note that in real graphql these relationships would be easier and cleaner for definition.
 */
module.exports = {
  students: [
    {
      id: 1,
      firstName: 'Beryl',
      surname: 'Milana',
      avatar: 'https://api.adorable.io/avatars/125/1',
    },
    {
      id: 2,
      firstName: 'Tomas',
      surname: 'Ruslan',
      avatar: 'https://api.adorable.io/avatars/125/2',
    },
  ],
  subjects: [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Philosophy' },
    { id: 3, name: 'Astronomy' },
  ],
  studentSubjects: [
    {
      id: 1,
      student_id: 1,
      subject_id: 1,
      scores: [3, 2],
    },
    {
      id: 2,
      student_id: 1,
      subject_id: 2,
      scores: [2],
    },
    {
      id: 3,
      student_id: 1,
      subject_id: 3,
      scores: [4, 1],
    },
    {
      id: 4,
      student_id: 2,
      subject_id: 1,
      scores: [1, 1],
    },
    {
      id: 5,
      student_id: 2,
      subject_id: 2,
      scores: [1],
    },
    {
      id: 6,
      student_id: 2,
      subject_id: 3,
      scores: [3, 5, 2],
    },
  ],
};
