"use client";
import type { FC } from "react";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressIndicator: FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => (
  <div className="flex items-center justify-center gap-2 my-6">
    {Array.from({ length: totalSteps }, (_, index) => (
      <div key={index} className="flex items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
            index + 1 <= currentStep
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {index + 1}
        </div>
        {index < totalSteps - 1 && (
          <div
            className={`w-12 h-0.5 mx-2 transition-colors ${index + 1 < currentStep ? "bg-primary" : "bg-muted"}`}
          />
        )}
      </div>
    ))}
  </div>
);
