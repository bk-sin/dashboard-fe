import { loginUser } from "@/services/auth-service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useLoginMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      router.replace("/");
    },
    onError: (error) => {
      console.error("Error en el login:", error);
    },
  });
};
