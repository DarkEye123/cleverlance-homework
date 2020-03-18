import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.REACT_APP_BACKEND_URL,
  }),
});

export default client;
