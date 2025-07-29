"use client";

import { FC } from "react";
import { LoginFormTitle } from "./login-form-title";
import { LoginFormDivider } from "./login-form-divider";
import { LoginFormRegister } from "./login-form-register";
import { Button } from "../ui/button";
import { Form, FormDescription } from "../ui/form";
import { useLoginForm } from "@/hooks/use-login-form";
import { ControlledFormField } from "../ui/controlled-form-field";
import { LoginFormT } from "@/schemas/auth.schema";
import { LoginFormSocial } from "./login-form-social";

export const LoginForm: FC = () => {
  const { form, onSubmit, isPending, error } = useLoginForm();
  const onGoogleSignIn = () => console.log("Google Sign In clicked");

  return (
    <div className="flex flex-col gap-6">
      <LoginFormTitle />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
          aria-describedby={error ? "login-error-message" : undefined}
        >
          <ControlledFormField<LoginFormT>
            name="email"
            label="Email"
            type="email"
            placeholder="Ingresa tu email"
            disabled={isPending}
          />

          <ControlledFormField<LoginFormT>
            name="password"
            label="Contraseña"
            type="password"
            placeholder="Ingresa tu contraseña"
            disabled={isPending}
          />

          {error && (
            <FormDescription
              id="login-error-message"
              className="text-center text-red-500"
              role="alert"
            >
              {error.message}
            </FormDescription>
          )}
          <Button type="submit" className="w-full" isLoading={isPending}>
            Login
          </Button>
        </form>
      </Form>
      <LoginFormDivider />
      <LoginFormSocial onGoogleSignIn={onGoogleSignIn} />
      <LoginFormRegister />
    </div>
  );
};
