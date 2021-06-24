import {
    ApolloClient,
    InMemoryCache,
    HttpLink
  } from "@apollo/client";


const cache = new InMemoryCache()

export const customClient = (path: string) => {
    return new ApolloClient({
        link: new HttpLink({ uri: 'http://localhost:8080/graphql/' + path }),
        cache
      });
}