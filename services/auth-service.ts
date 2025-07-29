import axios from "axios";
import { signIn } from "next-auth/react";
import { RegisterFormT, type LoginFormT } from "@/schemas/auth.schema";

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

export const registerUser = async (data: RegisterFormT) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/register`;
    console.log(process.env.NEXT_PUBLIC_API_URL);
    await axios.post(url, data);

    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result && result.error) {
      throw new Error("Error al iniciar sesión después del registro.");
    }

    return result;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorData = error.response.data as { message?: string };
      const errorMessage =
        errorData && typeof errorData.message === "string"
          ? errorData.message
          : "Ocurrió un error durante el registro.";
      throw new Error(errorMessage);
    }

    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Ocurrió un error inesperado.");
  }
};
