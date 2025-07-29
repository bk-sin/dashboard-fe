import { signIn } from "next-auth/react";
import { type LoginFormT } from "@/schemas/auth.schema";

export const loginUser = async (credentials: LoginFormT) => {
  const result = await signIn("credentials", {
    ...credentials,
    redirect: false,
  });

  if (result && result.error) {
    throw new Error("Email o contraseña incorrectos.");
  }

  return result;
};
