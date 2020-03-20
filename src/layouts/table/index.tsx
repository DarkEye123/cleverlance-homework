import React from 'react';
import {
  Container,
  Box,
  Backdrop,
  CircularProgress,
  Grid,
} from '@material-ui/core';
import { Alert } from '../../components';
import { NetworkError } from '../../types';

interface TableLayout {
  loading: boolean;
  error: NetworkError | undefined;
  data: boolean;
}

const Layout: React.FC<TableLayout> = ({ loading, error, data, children }) => (
  <Box component={Container} mt={8} border={1} p={4}>
    {data && (
      <Grid container direction="column" spacing={1}>
        {children}
      </Grid>
    )}
    <Backdrop open={loading}>
      <CircularProgress />
    </Backdrop>
    <Alert error={error} />
  </Box>
);

export default Layout;
