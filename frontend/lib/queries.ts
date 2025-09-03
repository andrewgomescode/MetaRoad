export const GET_POSTS = /* GraphQL */ `
  query GetPosts($first: Int = 10) {
    posts(first: $first) {
      nodes {
        id
        title
        slug
        excerpt
      }
    }
  }
`;
