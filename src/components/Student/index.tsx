import React from 'react';
import { StudentGraphQL } from '../../resolvers';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  IconButton,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import { AccountCircle, Delete as DeleteIcon } from '@material-ui/icons';
import { Selected } from '../../types';

const Student: React.FC<{ student: StudentGraphQL } & Selected &
  React.HTMLAttributes<HTMLDivElement> & { onDeleteStudent: () => void }> = ({
  student: { id, firstName, surname, avatar },
  selected,
  onDeleteStudent,
  ...rest
}) => (
  <ListItem button selected={selected === id} {...rest}>
    <ListItemAvatar>
      <Avatar alt={`${firstName} ${surname}`} src={avatar}>
        <AccountCircle />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={`${firstName} ${surname}`} />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="delete" onClick={onDeleteStudent}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Student;
