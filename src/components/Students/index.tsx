import React from 'react';
import {
  Backdrop,
  CircularProgress,
  Grid,
  Container,
  Box,
} from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { STUDENTS_QUERY } from '../../resolvers';
import { Alert } from '../index';
import { STUDENTS_QUERY_TYPEDEF } from '../../resolvers';
import Student from './student';

const Students: React.FC = () => {
  const { loading, error, data } = useQuery<STUDENTS_QUERY_TYPEDEF>(
    STUDENTS_QUERY,
  );
  return (
    <Box component={Container} mt={8}>
      {data && (
        <Grid container direction="column" spacing={1}>
          {data.allStudents?.map(p => (
            <Student {...p}></Student>
          ))}
        </Grid>
      )}
      <Backdrop open={loading}>
        <CircularProgress />
      </Backdrop>
      <Alert error={error} />
    </Box>
  );
};

export default Students;
