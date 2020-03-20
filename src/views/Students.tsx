import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  STUDENTS_QUERY,
  STUDENTS_QUERY_OUTPUT_SHAPE,
  REMOVE_STUDENT_MUTATION,
  REMOVE_STUDENT_MUTATION_OUTPUT_SHAPE,
  CREATE_STUDENT_MUTATION,
  CREATE_STUDENT_MUTATION_INPUT_SHAPE,
  CREATE_STUDENT_MUTATION_OUTPUT_SHAPE,
} from '../resolvers';
import { Student, ConfirmDialog } from '../components';
import { TableLayout } from '../layouts';
import { useTracker } from '../hooks';
import { useTranslation } from 'react-i18next';
import { AddButton } from '../components/Buttons';
import { MotionDiv } from '../components/motion';

const generateAvatarUrl = () =>
  `https://api.adorable.io/avatars/125/${Date.now().toString()}`;

const Students: React.FC = () => {
  const { loading, error, data } = useQuery<STUDENTS_QUERY_OUTPUT_SHAPE>(
    STUDENTS_QUERY,
  );

  const [removeStudent, removeStudentData] = useMutation<
    REMOVE_STUDENT_MUTATION_OUTPUT_SHAPE,
    { id: Number }
  >(REMOVE_STUDENT_MUTATION, {
    refetchQueries: [
      {
        query: STUDENTS_QUERY,
      },
    ],
  });

  const [createStudent, createStudentData] = useMutation<
    CREATE_STUDENT_MUTATION_OUTPUT_SHAPE,
    CREATE_STUDENT_MUTATION_INPUT_SHAPE
  >(CREATE_STUDENT_MUTATION, {
    variables: {
      id: Date.now(),
      avatar: generateAvatarUrl(),
      firstName: 'Test',
      surname: `Student${Date.now()}`,
    },
    refetchQueries: [
      {
        query: STUDENTS_QUERY,
      },
    ],
  });

  const [selected, setSelected] = useState<Number | null>(null);
  const [openModal, setOpenDialog] = useState<boolean>(false);
  const tracker = useTracker();
  const { t } = useTranslation();

  const handleOnDeleteStudentConfirmRequest = async (id: Number) => {
    setSelected(id);
    setOpenDialog(true);
  };

  const handleReject = () => {
    setSelected(null);
    setOpenDialog(false);
  };

  const handleCreateStudent = async () => {
    try {
      await createStudent();
    } catch (e) {
      tracker?.error(e.message);
    }
  };

  const handleConfirm = async () => {
    try {
      const successs = await removeStudent({
        variables: { id: selected as Number },
      });
      if (successs) {
        setSelected(null);
      }
      setOpenDialog(false);
    } catch (e) {
      tracker?.info(e.message);
    }
  };

  return (
    <>
      <TableLayout
        data={!!data}
        loading={loading}
        error={error || removeStudentData.error || createStudentData.error}
        ariaLabel="student list"
      >
        {data?.students?.map(data => (
          <MotionDiv key={data.id}>
            <Student
              student={data}
              selected={selected}
              onDoubleClick={() => setSelected(data.id)}
              onDelete={() => handleOnDeleteStudentConfirmRequest(data.id)}
            ></Student>
          </MotionDiv>
        ))}
      </TableLayout>
      <AddButton
        aria-label="add student"
        onClick={handleCreateStudent}
      ></AddButton>
      <ConfirmDialog
        open={openModal}
        onClose={handleReject}
        onConfirm={handleConfirm}
        title={t('confirmStudentRemoval')}
      />
    </>
  );
};

export default Students;
