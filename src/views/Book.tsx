import * as React from 'react';
import { BookLayout } from '../layouts';
import { useParams } from 'react-router-dom';
import { useQuery, ApolloError } from '@apollo/client';
import { BOOK_QUERY, BOOK_QUERY_OUTPUT_SHAPE } from '../resolvers';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { Alert, BookEntry } from '../components';
import { useTranslation } from 'react-i18next';
import { MotionDiv } from '../components/motion';

const BookView: React.FC = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery<
    BOOK_QUERY_OUTPUT_SHAPE,
    { id: number }
  >(BOOK_QUERY, {
    variables: {
      id: Number(id),
    },
  });

  const { t } = useTranslation();
  if (loading) {
    return (
      <Backdrop open={loading}>
        <CircularProgress />
      </Backdrop>
    );
  }

  if (
    (!loading && error && !Array.isArray(data?.students)) ||
    data?.students.length === 0
  ) {
    return (
      <Alert
        error={error || ({ message: t('userNotFound') } as ApolloError)}
      ></Alert>
    );
  }

  const [student] = data!.students;

  return (
    <>
      <BookLayout
        avatar={student.avatar}
        firstName={student.firstName}
        surname={student.surname}
      >
        {student.book.map(bookEntry => (
          <MotionDiv key={bookEntry.id}>
            <BookEntry bookEntry={bookEntry} selected={0}></BookEntry>
          </MotionDiv>
        ))}
      </BookLayout>
      <Alert error={error}></Alert>
    </>
  );
};

export default BookView;
