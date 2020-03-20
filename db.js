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
  ],
  studentSubjects: [
    {
      id: 1,
      student_id: 1,
      subject_id: 1,
    },
  ],
};
