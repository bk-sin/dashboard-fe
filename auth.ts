import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";
import { ApiLoginResponse } from "./next-auth";

declare module "next-auth" {
  interface User {
    errorType?: string;
  }
}

const authCallbacks: NextAuthConfig["callbacks"] = {
  jwt({ token, user }) {
    if (user) {
      return { ...token, ...user };
    }
    return token;
  },
  session({ session, token }) {
    session.user = {
      id: token.id,
      firstName: token.firstName,
      lastName: token.lastName,
      email: token.email,
      role: token.role,
      emailVerified: token.emailVerified,
    };
    session.accessToken = token.accessToken;
    return session;
  },
};

const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;
        try {
          const res = await axios.post<ApiLoginResponse>(
            url,
            {
              email: credentials.email,
              password: credentials.password,
            },
            {
              headers: { "Content-Type": "application/json" },
            },
          );
          const data = res.data;

          if (data && data.access_token) {
            return {
              id: String(data.id),
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              role: data.role,
              accessToken: data.access_token,
              emailVerified: data.emailVerified,
            };
          }
          return null;
        } catch (error) {
          if (axios.isAxiosError(error)) {
            if (error.response?.status === 403) {
              return {
                id: "403",
                firstName: "",
                lastName: "",
                email: credentials.email as string,
                role: "",
                accessToken: "",
                emailVerified: null,
                errorType: "FORBIDDEN",
              };
            }
          }
          return null;
        }
      },
    }),
  ],
  callbacks: {
    ...authCallbacks,
    signIn({ user }) {
      if (
        user?.errorType === "FORBIDDEN" ||
        user?.errorType === "UNAUTHORIZED"
      ) {
        return false;
      }
      return true;
    },
  },

  pages: {
    signIn: "/login",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
