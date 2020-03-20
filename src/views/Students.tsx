import React from 'react';
import { useQuery } from '@apollo/client';
import { STUDENTS_QUERY, STUDENTS_QUERY_TYPEDEF } from '../resolvers';
import { Student } from '../components';
import { TableLayout } from '../layouts';

const Students: React.FC = () => {
  const { loading, error, data } = useQuery<STUDENTS_QUERY_TYPEDEF>(
    STUDENTS_QUERY,
  );
  return (
    <TableLayout data={!!data} loading={loading} error={error}>
      {data?.allStudents?.map(p => (
        <Student {...p}></Student>
      ))}
    </TableLayout>
  );
};

export default Students;
