import React from 'react';
import {
  Container,
  Box,
  Backdrop,
  CircularProgress,
  Grid,
  List,
} from '@material-ui/core';
import { Alert } from '../../components';
import { NetworkError } from '../../types';

interface TableLayout {
  loading: boolean;
  error: NetworkError | undefined;
  data: boolean;
  ariaLabel: string;
}

const Layout: React.FC<TableLayout> = ({
  loading,
  error,
  data,
  children,
  ariaLabel,
}) => (
  <>
    <Box component={Container} mt={8} border={1} p={4} maxWidth="sm">
      {data && (
        <Grid container direction="column" spacing={1}>
          <List aria-label={ariaLabel}>{children}</List>
        </Grid>
      )}
      <Backdrop open={loading}>
        <CircularProgress />
      </Backdrop>
    </Box>
    <Alert error={error} />
  </>
);

export default Layout;
