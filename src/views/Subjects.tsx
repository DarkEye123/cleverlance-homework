import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  SUBJECTS_QUERY,
  SUBJECTS_QUERY_OUTPUT_SHAPE,
  REMOVE_SUBJECT_MUTATION,
  REMOVE_SUBJECT_MUTATION_OUTPUT_SHAPE,
  CREATE_SUBJECT_MUTATION,
  CREATE_SUBJECT_MUTATION_INPUT_SHAPE,
} from '../resolvers';
import { ConfirmDialog, Subject } from '../components';
import { TableLayout } from '../layouts';
import { useTracker } from '../hooks';
import { useTranslation } from 'react-i18next';
import { AddButton } from '../components/Buttons';
import { MotionDiv } from '../components/motion';

const Subjects: React.FC = () => {
  const { loading, error, data } = useQuery<SUBJECTS_QUERY_OUTPUT_SHAPE>(
    SUBJECTS_QUERY,
  );

  const [removeSubject, removeSubjectData] = useMutation<
    { removeSubject: REMOVE_SUBJECT_MUTATION_OUTPUT_SHAPE },
    { id: Number }
  >(REMOVE_SUBJECT_MUTATION, {
    refetchQueries: [
      {
        query: SUBJECTS_QUERY,
      },
    ],
  });

  const [createSubject, createSubjectData] = useMutation<
    { createSubject: { id: string } },
    CREATE_SUBJECT_MUTATION_INPUT_SHAPE
  >(CREATE_SUBJECT_MUTATION, {
    variables: {
      id: Date.now().toString(),
      name: 'Sport',
    },
    refetchQueries: [
      {
        query: SUBJECTS_QUERY,
      },
    ],
  });

  const [selected, setSelected] = useState<Number | null>(null);
  const [openModal, setOpenDialog] = useState<boolean>(false);
  const tracker = useTracker();
  const { t } = useTranslation();

  const handleOnDeleteSubjectConfirmRequest = async (id: Number) => {
    setSelected(id);
    setOpenDialog(true);
  };

  const handleReject = () => {
    setSelected(null);
    setOpenDialog(false);
  };

  const handleCreateSubject = async () => {
    try {
      await createSubject();
    } catch (e) {
      tracker?.error(e.message);
    }
  };

  const handleConfirm = async () => {
    try {
      const successs = await removeSubject({
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
        error={error || removeSubjectData.error || createSubjectData.error}
        ariaLabel="Subject list"
      >
        {data?.subjects?.map(data => (
          <MotionDiv key={data.id}>
            <Subject
              subject={data}
              selected={selected}
              onDoubleClick={() => setSelected(data.id)}
              onDelete={() => handleOnDeleteSubjectConfirmRequest(data.id)}
            ></Subject>
          </MotionDiv>
        ))}
      </TableLayout>
      <AddButton
        aria-label="add subject"
        onClick={handleCreateSubject}
      ></AddButton>
      <ConfirmDialog
        open={openModal}
        onClose={handleReject}
        onConfirm={handleConfirm}
        title={t('confirmSubjectRemoval')}
      />
    </>
  );
};

export default Subjects;
