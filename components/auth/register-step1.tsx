import { FC } from "react";
import { type RegisterFormT } from "@/schemas/auth.schema";
import { ControlledFormField } from "@/components/ui/controlled-form-field";

export const RegisterStep1: FC = () => {
  return (
    <>
      <ControlledFormField<RegisterFormT>
        name="firstName"
        label="Nombre"
        placeholder="Ingresa tu nombre"
      />
      <ControlledFormField<RegisterFormT>
        name="lastName"
        label="Apellido"
        placeholder="Ingresa tu apellido"
      />
      <ControlledFormField<RegisterFormT>
        name="phone"
        label="Teléfono"
        type="tel"
        placeholder="Ingresa tu teléfono"
      />
    </>
  );
};
