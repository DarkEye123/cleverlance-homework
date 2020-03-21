import React from 'react';
import {
  ListItem,
  IconButton,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';
import { Selected } from '../../types';
import { BookEntry } from '../../resolvers/types';

const BookEntryComponent: React.FC<{ bookEntry: BookEntry } & Selected &
  React.HTMLAttributes<HTMLDivElement>> = ({
  bookEntry: { id, subject, scores },
  selected,
  ...rest
}) => (
  <ListItem button selected={selected === (id as Number)} {...rest}>
    <ListItemText primary={subject.name} secondary={scores} />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="edit book entry">
        <EditIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default BookEntryComponent;
