import "next-auth";
import "next-auth/jwt";

export type ApiLoginResponse = {
  id: number;
  email: string;
  role: string;
  access_token: string;
  firstName?: string;
  lastName?: string;
  emailVerified: Date | null;
};

declare module "next-auth" {
  interface User {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
    role: string;
    accessToken?: string;
    emailVerified?: Date | null;
  }

  interface Session {
    accessToken: string;
    user: {
      id: string;
      firstName?: string;
      lastName?: string;
      email: string;
      role: string;
      emailVerified: Date | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
    role: string;
    accessToken: string;
    emailVerified: Date | null;
  }
}
