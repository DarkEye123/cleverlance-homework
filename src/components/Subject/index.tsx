import React from 'react';
import { SubjectGraphQL } from '../../resolvers';
import {
  ListItem,
  IconButton,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { Selected } from '../../types';

const Subject: React.FC<{ subject: SubjectGraphQL } & Selected &
  React.HTMLAttributes<HTMLDivElement> & { onDeleteStudent: () => void }> = ({
  subject: { id, name },
  selected,
  onDeleteStudent,
  ...rest
}) => (
  <ListItem button selected={selected === (id as Number)} {...rest}>
    <ListItemText primary={name} />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="delete" onClick={onDeleteStudent}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Subject;
