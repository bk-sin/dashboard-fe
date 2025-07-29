import z from "zod";

export type LoginFormT = z.infer<typeof loginSchema>;

export const loginSchema = z.object({
  email: z.email({ message: "Ingresa un email válido" }),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});
