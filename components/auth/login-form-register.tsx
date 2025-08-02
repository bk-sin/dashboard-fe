import Link from "next/link";
import React from "react";

export function LoginFormRegister() {
  return (
    <p className="text-center text-sm text-muted-foreground">
      New to our platform?{" "}
      <Link
        href="/auth/register"
        className="text-accent-foreground hover:underline"
      >
        Create Account
      </Link>
    </p>
  );
}
