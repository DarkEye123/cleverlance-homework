import * as React from 'react';
import { BookLayout } from '../layouts';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { BOOK_QUERY, StudentGraphQL, SubjectGraphQL } from '../resolvers';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { Alert } from '../components';

const BookView: React.FC = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery<
    StudentGraphQL & { subjects: SubjectGraphQL[] },
    { id: number }
  >(BOOK_QUERY, {
    variables: {
      id: Number(id),
    },
  });
  if (loading) {
    return (
      <Backdrop open={loading}>
        <CircularProgress />
      </Backdrop>
    );
  }
  return (
    <>
      <BookLayout
        avatar={data!.avatar}
        subjects={data!.subjects}
        firstName={data!.firstName}
        surname={data!.surname}
      ></BookLayout>
      <Alert error={error}></Alert>
    </>
  );
};

export default BookView;
