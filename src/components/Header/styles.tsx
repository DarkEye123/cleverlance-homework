import React from 'react';
import { Theme, styled } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { Omit } from '@material-ui/types';

const Lang = styled('div')({
  position: 'absolute',
  display: 'flex',
  top: '110%',
  right: 0,
});

interface OmitProps {
  active: boolean;
}

const LangButton = styled(
  ({ active, ...others }: OmitProps & Omit<ButtonProps, keyof OmitProps>) => (
    <Button {...others}></Button>
  ),
)(({ active, theme }: { theme: Theme } & OmitProps) => ({
  color: active ? theme.palette.primary.main : 'grey',
}));

const NavBar = styled('nav')({
  flexGrow: 1,
  display: 'flex',
  '& a': {
    display: 'flex',
    alignSelf: 'center',
    color: 'white',
  },
  '& h1': {
    flexGrow: 1,
    fontSize: '4rem',
    textTransform: 'uppercase',
  },
});

export { LangButton, Lang, NavBar };
