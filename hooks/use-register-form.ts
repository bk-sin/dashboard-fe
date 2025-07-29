import { useState } from "react";
import { useForm } from "react-hook-form";
import { ZodSchema } from "zod"; // Importamos ZodSchema
import {
  step1Schema,
  step2Schema,
  type RegisterFormT,
} from "@/schemas/auth.schema";
import { useRegisterMutation } from "./use-register-mutation";

const step1Fields: (keyof RegisterFormT)[] = ["firstName", "lastName", "phone"];

export const useRegisterForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { mutate: register, isPending, error } = useRegisterMutation();

  const form = useForm<RegisterFormT>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      agreeToTerms: false,
    },
  });

  const validateSchema = (schema: ZodSchema) => {
    const result = schema.safeParse(form.getValues());
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        form.setError(issue.path[0] as keyof RegisterFormT, {
          message: issue.message,
        });
      });
    }
    return result;
  };

  const handleNext = () => {
    const result = validateSchema(step1Schema);
    if (result.success) {
      form.clearErrors(step1Fields);
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const processForm = () => {
    const finalSchema = step1Schema.merge(step2Schema);
    const result = validateSchema(finalSchema);
    if (result.success) {
      register(result.data as RegisterFormT);
    }
  };

  return {
    form,
    currentStep,
    handleNext,
    handleBack,
    processForm,
    isPending,
    error,
  };
};
