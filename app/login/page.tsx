import { AuthLayout } from "@/components/auth/auth-layout";
import { LoginForm } from "@/components/auth/login-form";
import type React from "react";

export default function SignInPageDemo() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
