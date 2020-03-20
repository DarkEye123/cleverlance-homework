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

const Students = () => {
  const { loading, error, data } = useQuery(STUDENTS_QUERY);
  return (
    <Box component={Container} mt={8}>
      {data && (
        <Grid container direction="column" spacing={1}>
          {data.allStudents.map((p: any) => (
            <div>{p.firstName}</div>
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
