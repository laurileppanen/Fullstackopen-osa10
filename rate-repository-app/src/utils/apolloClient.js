import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://130.232.224.107:4000/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
