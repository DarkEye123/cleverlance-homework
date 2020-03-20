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

const Subject: React.FC<SubjectGraphQL &
  Selected &
  React.HTMLAttributes<HTMLDivElement> & { onDeleteStudent: () => void }> = ({
  id,
  name,
  selected,
  onDeleteStudent,
  ...rest
}) => (
  <ListItem button selected={selected === id} {...rest}>
    <ListItemText primary={name} />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="delete" onClick={onDeleteStudent}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Subject;
