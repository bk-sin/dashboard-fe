import { FC } from "react";
import { Button } from "../ui/button";

interface FormNavigationProps {
  currentStep: number;
  isPending: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export const FormNavigation: FC<FormNavigationProps> = ({
  currentStep,
  isPending,
  onBack,
  onNext,
  onSubmit,
}) => {
  return (
    <div className="flex gap-4">
      {currentStep === 2 && (
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="flex-1"
          disabled={isPending}
        >
          Atrás
        </Button>
      )}
      {currentStep === 1 ? (
        <Button type="button" onClick={onNext} className="flex-1">
          Continuar
        </Button>
      ) : (
        <Button
          type="button"
          isLoading={isPending}
          className="flex-1"
          onClick={onSubmit}
        >
          Crear Cuenta
        </Button>
      )}
    </div>
  );
};
