// components/auth/register-form.tsx (versión mejorada)
"use client";
import { FC } from "react";
import { useRegisterForm } from "@/hooks/use-register-form";
import { RegisterStep1 } from "./register-step1";
import { RegisterStep2 } from "./register-step2";
import { Form, FormDescription } from "@/components/ui/form";
import { ProgressIndicator } from "./progress-indicator";
import { FormNavigation } from "./form-navigation";

export const RegisterForm: FC = () => {
  const {
    form,
    currentStep,
    handleNext,
    handleBack,
    processForm,
    isPending,
    error,
  } = useRegisterForm();

  return (
    <div className="w-full max-w-md">
      <h1 className="text-4xl font-semibold">Crear Cuenta</h1>
      <p className="text-muted-foreground mt-2">
        Comencemos tu viaje con nosotros.
      </p>
      <ProgressIndicator currentStep={currentStep} totalSteps={2} />
      <Form {...form}>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {currentStep === 1 && <RegisterStep1 />}
          {currentStep === 2 && <RegisterStep2 />}
          {error && (
            <FormDescription
              id="login-error-message"
              className="text-center text-red-500"
              role="alert"
            >
              {error.message}
            </FormDescription>
          )}
          <FormNavigation
            currentStep={currentStep}
            isPending={isPending}
            onBack={handleBack}
            onNext={handleNext}
            onSubmit={processForm}
          />
        </form>
      </Form>
    </div>
  );
};
