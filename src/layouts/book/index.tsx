import React from 'react';
import {
  Container,
  Box,
  Paper,
  Grid,
  Avatar,
  Typography,
  List,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';
import { StudentGraphQL } from '../../resolvers';

const useStyles = makeStyles(() =>
  createStyles({
    large: {
      width: '10rem',
      height: '10rem',
    },
  }),
);

const Layout: React.FC<Omit<StudentGraphQL, 'id'>> = ({
  firstName,
  surname,
  avatar,
  children,
}) => {
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <Box component={Container} mt={8} p={4} maxWidth="65%">
      <Box component={Paper} p={4}>
        <Grid justify="flex-start" alignItems="center" container spacing={8}>
          <Grid xs={12} sm={6} md={4} item>
            <Avatar
              alt={`${firstName} ${surname}`}
              className={classes.large}
              src={avatar}
            >
              <AccountCircle />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography variant="h4">{`${firstName} ${surname}`}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box component={Paper} mt={4} p={4}>
        <Grid container spacing={8}>
          <Grid item>
            <List aria-label="list of subjects">{children}</List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Layout;
