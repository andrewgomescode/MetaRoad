import { NextResponse } from "next/server";
import { GraphQLClient, gql } from "graphql-request";

const endpoint =
  process.env.NEXT_PUBLIC_WP_GRAPHQL_ENDPOINT ||
  "http://localhost:8080/graphql";

const REGISTER = gql`
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

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();
    if (!username || !email || !password) {
      return NextResponse.json(
        { ok: false, error: "missing-fields" },
        { status: 400 }
      );
    }

    const client = new GraphQLClient(endpoint);
    const { registerUser } = await client.request(REGISTER, {
      username,
      email,
      password,
    });

    return NextResponse.json({ ok: true, user: registerUser?.user });
  } catch (e: any) {
    return NextResponse.json(
      {
        ok: false,
        error:
          e?.response?.errors?.[0]?.message || e?.message || "register-failed",
      },
      { status: 400 }
    );
  }
}
