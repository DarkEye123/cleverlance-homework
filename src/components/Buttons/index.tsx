import React from 'react';
import { IconButton } from '@material-ui/core';
import { Theme, styled } from '@material-ui/core/styles';
import { AddCircleRounded } from '@material-ui/icons';

const StyledAddButton = styled(IconButton)(({ theme }: { theme: Theme }) => ({
  color: theme.palette.primary.main,
  '& :hover': {
    color: theme.palette.success.light,
  },
}));

export const AddButton = ({ ...props }) => (
  <StyledAddButton {...props}>
    <AddCircleRounded />
  </StyledAddButton>
);
