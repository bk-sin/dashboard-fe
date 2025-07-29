import z from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "Ingresa un email válido" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
});

export const step1Schema = z.object({
  firstName: z.string().min(1, "El nombre es requerido."),
  lastName: z.string().min(1, "El apellido es requerido."),
  phone: z
    .string()
    .min(10, "El número de teléfono debe ser válido.")
    .regex(
      /^\+?[\d\s\-()]{10,}$/,
      "Por favor, ingresa un número de teléfono válido.",
    ),
});

export const step2Schema = z.object({
  email: z.email("Por favor, ingresa un email válido."),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres."),
  agreeToTerms: z
    .boolean()
    .refine((val) => val === true, {
      message: "Debes aceptar los términos y condiciones.",
    })
    .optional(),
});

export type RegisterFormT = z.infer<typeof step1Schema> &
  z.infer<typeof step2Schema>;
export type LoginFormT = z.infer<typeof loginSchema>;
