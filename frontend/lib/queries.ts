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

export const GET_POSTS_BY_CATEGORY = /* GraphQL */ `
  query GetPostsByCategory($slug: [String], $first: Int = 6) {
    posts(where: { categoryNameIn: $slug }, first: $first) {
      nodes {
        id
        title
        slug
        excerpt
      }
    }
  }
`;

export const LOGIN_MUTATION = /* GraphQL */ `
  mutation Login($username: String!, $password: String!) {
    login(
      input: {
        clientMutationId: "login"
        username: $username
        password: $password
      }
    ) {
      authToken
      refreshToken
      user {
        id
        name
        username
        email
      }
    }
  }
`;

export const REGISTER_USER_MUTATION = /* GraphQL */ `
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(
      input: { username: $username, email: $email, password: $password }
    ) {
      user {
        id
        username
        email
      }
    }
  }
`;
