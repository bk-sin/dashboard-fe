import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormT } from "@/schemas/auth.schema";
import { useLoginMutation } from "./use-login-mutation";

export const useLoginForm = () => {
  const form = useForm<LoginFormT>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const { mutate: login, isPending, error } = useLoginMutation();
  const onSubmit = (values: LoginFormT) => login(values);

  return { form, onSubmit, isPending, error };
};
