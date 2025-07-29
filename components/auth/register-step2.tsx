import { FC } from "react";
import Link from "next/link";
import { type RegisterFormT } from "@/schemas/auth.schema";
import { ControlledFormField } from "@/components/ui/controlled-form-field";

export const RegisterStep2: FC = () => {
  return (
    <>
      <ControlledFormField<RegisterFormT>
        name="email"
        label="Email"
        type="email"
        placeholder="Ingresa tu email"
      />

      <ControlledFormField<RegisterFormT>
        name="password"
        label="Contraseña"
        type="password"
        placeholder="Crea una contraseña segura"
      />

      <ControlledFormField<RegisterFormT>
        name="agreeToTerms"
        type="checkbox"
        label={
          <>
            Acepto los{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Términos de Servicio
            </Link>{" "}
            y la{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Política de Privacidad
            </Link>
            .
          </>
        }
      />
    </>
  );
};
