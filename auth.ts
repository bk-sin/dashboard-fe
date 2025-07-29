import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";

declare module "next-auth" {
  interface User {
    accessToken?: string;
  }
  interface Session {
    accessToken?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;
        try {
          const res = await axios.post(
            url,
            {
              email: credentials?.email,
              password: credentials?.password,
            },
            {
              headers: { "Content-Type": "application/json" },
            },
          );

          type LoginResponse = { access_token: string };
          const data = res.data as LoginResponse;
          if (data && data.access_token) {
            return {
              id: "jwt",
              accessToken: data.access_token,
              email: credentials.email as string,
            } as { id: string; accessToken: string; email: string };
          }
          return null;
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    session({ session, token }) {
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
});
