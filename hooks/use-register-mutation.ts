// en hooks/mutations/use-register-mutation.ts

import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/services/auth-service";
import { useRouter } from "next/navigation";

export const useRegisterMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      router.push("/");
    },
    onError: (error) => {
      console.error("Fallo el registro:", error);
    },
  });
};
