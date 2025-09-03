import { GraphQLClient } from "graphql-request";

const endpoint =
  process.env.NEXT_PUBLIC_WP_GRAPHQL_ENDPOINT ||
  "http://localhost:8080/graphql";

export const graphqlClient = new GraphQLClient(endpoint);
