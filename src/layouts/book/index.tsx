import React from 'react';
import {
  Container,
  Box,
  Paper,
  Grid,
  Avatar,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { AccountCircle } from '@material-ui/icons';
import { StudentGraphQL, SubjectGraphQL } from '../../resolvers';

const useStyles = makeStyles(() =>
  createStyles({
    large: {
      width: '10rem',
      height: '10rem',
    },
  }),
);

const Layout: React.FC<Omit<StudentGraphQL, 'id' | '__typename'> & {
  subjects: SubjectGraphQL[] | [] | undefined;
}> = ({ firstName, surname, avatar, subjects }) => {
  const classes = useStyles();
  return (
    <Box component={Container} mt={8} p={4} maxWidth="65%">
      <Box component={Paper} p={4}>
        <Grid justify="flex-start" alignItems="center" container spacing={8}>
          <Grid xs={3} item>
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
    </Box>
  );
};

export default Layout;
