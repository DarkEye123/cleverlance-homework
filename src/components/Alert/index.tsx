import React, { useState } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Close as CloseIcon } from '@material-ui/icons';
import { Zoom, Fade, IconButton } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { ApolloError } from '@apollo/client';
import { motion } from 'framer-motion';

type Message = { message?: string; id: number };
interface CloseHandler {
  onClose: (id: number) => void;
}
interface ResultShape {
  result?: {
    errors: Message[];
  };
}

type NetworkError = {
  networkError?: (ResultShape & Error) | null;
} & ApolloError;

const messagesWithIDs = (list: Message[]): Message[] =>
  list?.map(({ message }, i) => ({ message, id: i }));

const ErrorAlert = ({ message, id, onClose }: Message & CloseHandler) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(true);
  const [isClosed, setIsClosed] = useState(false);
  return (
    (!isClosed && message && (
      <Fade
        in={visible}
        timeout={500}
        onExited={() => {
          onClose(id);
          setIsClosed(true);
        }}
      >
        <div>
          <Zoom timeout={500} in={visible}>
            <Alert
              onClick={() => {
                setVisible(false);
              }}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setVisible(false);
                  }}
                >
                  <CloseIcon />
                </IconButton>
              }
              severity="error"
              data-testid="graphql-error"
            >
              <AlertTitle>{t('problem')}!</AlertTitle>
              {message}
            </Alert>
          </Zoom>
        </div>
      </Fade>
    )) ||
    null
  );
};

export default ({ error }: { error: NetworkError | undefined }) => {
  if (!error) return null;
  const [errors, setErrors] = useState(
    messagesWithIDs(
      (error?.networkError?.result?.errors || [error]) as Message[],
    ),
  );
  let items = errors.map(({ message, id }) => (
    <motion.div positionTransition key={id}>
      {console.log(error)}
      <ErrorAlert
        message={message}
        id={id}
        // eslint-disable-next-line eqeqeq
        onClose={(id: number) => setErrors(errors.filter(e => e.id != id))}
      />
    </motion.div>
  ));
  return <>{items}</>;
};
