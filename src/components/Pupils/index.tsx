import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { PUPILS_QUERY } from '../../resolvers';

const Pupils = () => {
  const { loading, error, data } = useQuery(PUPILS_QUERY);
  return (
    <Backdrop open={loading}>
      <CircularProgress />
    </Backdrop>
  );
};

export default Pupils;
