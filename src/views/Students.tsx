import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  STUDENTS_QUERY,
  STUDENTS_QUERY_TYPEDEF,
  REMOVE_STUDENT_MUTATION,
  REMOVE_STUDENT_MUTATION_TYPEDEF,
} from '../resolvers';
import { Student } from '../components';
import { TableLayout } from '../layouts';
import { useTracker } from '../hooks';
import {
  Backdrop,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const Students: React.FC = () => {
  const { loading, error, data } = useQuery<STUDENTS_QUERY_TYPEDEF>(
    STUDENTS_QUERY,
  );
  const [removeStudent, removeStudentData] = useMutation<
    { removeStudent: REMOVE_STUDENT_MUTATION_TYPEDEF },
    { id: string }
  >(REMOVE_STUDENT_MUTATION);

  const [selected, setSelected] = useState<string | null>(null);
  const [openModal, setOpenDialog] = useState<boolean>(false);
  const tracker = useTracker();
  const { t } = useTranslation();

  const handleOnDeleteStudentConfirmRequest = async (id: string) => {
    setSelected(id);
    setOpenDialog(true);
  };

  const handleReject = () => {
    setSelected(null);
    setOpenDialog(false);
  };

  const handleConfirm = async () => {
    try {
      const successs = await removeStudent({
        variables: { id: selected as string },
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
        error={error || removeStudentData.error}
        ariaLabel="student list"
      >
        {data?.allStudents?.map(data => (
          <Student
            {...data}
            selected={selected}
            key={data.id}
            onDoubleClick={() => setSelected(data.id)}
            onDeleteStudent={() => handleOnDeleteStudentConfirmRequest(data.id)}
          ></Student>
        ))}
      </TableLayout>
      <Dialog
        aria-labelledby="modal-title"
        open={openModal}
        onClose={() => {
          setSelected(null);
          setOpenDialog(false);
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <DialogTitle id="modal-title">{t('confirmStudentRemoval')}</DialogTitle>
        <DialogActions>
          <Button onClick={handleReject} color="secondary">
            {t('disagree')}
          </Button>
          <Button onClick={handleConfirm} color="primary">
            {t('agree')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Students;
