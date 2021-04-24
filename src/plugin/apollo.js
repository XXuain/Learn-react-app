import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const ErrorLogLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) console.log('graphQLErrors: ', graphQLErrors);
  graphQLErrors.map(({ message, locations, path }) =>
    console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
  );
  if (networkError) {
    console.log('networkError: ', networkError.statusCode);
    console.log(`[Network error]: ${networkError}`);
  }
});

//
const RequestLink = new HttpLink({
  // uri: process.env.REACT_APP_APOLLO_SERVER_URL,
  uri: 'https://plp0mopxq.sse.codesandbox.io/'
});

const CusApolloProvider = ({ children, ...props }) => {
  // server 連線
  const client = new ApolloClient({
    link: from([ErrorLogLink, RequestLink]),
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client} {...props}>
      {children}
    </ApolloProvider>
  );
};

export default CusApolloProvider;
