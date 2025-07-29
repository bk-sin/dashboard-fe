import React from "react";
import { Button } from "../ui/button";
import { SiGoogle } from "@icons-pack/react-simple-icons";

export function LoginFormSocial({
  onGoogleSignIn,
}: {
  onGoogleSignIn?: () => void;
}) {
  return (
    <Button onClick={onGoogleSignIn} className="w-full" variant="outline">
      <SiGoogle size={20} />
      Continue with Google
    </Button>
  );
}
