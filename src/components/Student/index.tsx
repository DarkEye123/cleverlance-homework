import React from 'react';
import { STUDENTS_QUERY_allStudents_TYPEDEF } from '../../resolvers';
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

const Student: React.FC<STUDENTS_QUERY_allStudents_TYPEDEF &
  Selected &
  React.HTMLAttributes<HTMLDivElement> & { onDeleteStudent: () => void }> = ({
  id,
  firstName,
  surname,
  avatar,
  selected,
  onDeleteStudent,
  ...rest
}) => (
  <ListItem button selected={selected === id} {...rest}>
    <ListItemAvatar>
      <Avatar>
        <AccountCircle />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Single-line item" />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="delete" onClick={onDeleteStudent}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Student;
