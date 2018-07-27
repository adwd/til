import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

export const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://us1.prisma.sh/masahiro-nishida-fb20bf/todo-app/dev' }),
  cache: new InMemoryCache(),
});

export const GetTodosQuery = gql`
  query getTodos {
    todoes {
    id
    text
    done
    }
  }
`;
