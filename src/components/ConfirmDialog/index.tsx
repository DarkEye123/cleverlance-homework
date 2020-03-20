import React from 'react';
import {
  Dialog,
  Backdrop,
  DialogTitle,
  DialogActions,
  Button,
  DialogProps,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

type ConfirmCB = {
  onConfirm: {
    (event: {}): void;
  };
};

const ConfirmDialog: React.FC<DialogProps & ConfirmCB> = ({
  open,
  onClose,
  onConfirm,
  title,
}) => {
  const { t } = useTranslation();
  return (
    <Dialog
      aria-labelledby="modal-title"
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <DialogTitle id="modal-title">{title}</DialogTitle>
      <DialogActions>
        <Button onClick={onClose as any} color="secondary">
          {t('disagree')}
        </Button>
        <Button onClick={onConfirm} color="primary">
          {t('agree')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
