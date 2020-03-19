import React from 'react';
import { Backdrop, CircularProgress, Grid } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { PUPILS_QUERY } from '../../resolvers';
import { Alert } from '../index';

const Pupils = () => {
  const { loading, error, data } = useQuery(PUPILS_QUERY);
  console.log(data);
  return (
    <>
      {data && (
        <Grid container direction="column" spacing={1}>
          {data.allPupils.map((p: any) => (
            <div>{p.firstName}</div>
          ))}
        </Grid>
      )}
      <Backdrop open={loading}>
        <CircularProgress />
      </Backdrop>
      <Alert error={error} />
    </>
  );
};

export default Pupils;
