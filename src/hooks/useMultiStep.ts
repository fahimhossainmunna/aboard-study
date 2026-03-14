import { useState } from "react";

interface UseMultiStepReturn {
  currentStep: number;
  totalSteps: number;
  progress: number;
  isFirst: boolean;
  isLast: boolean;
  submitted: boolean;
  handleNext: () => void;
  handleBack: () => void;
  handleSubmit: () => void;
  goToStep: (step: number) => void;
}

export function useMultiStep(totalSteps: number): UseMultiStepReturn {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep((p) => p + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((p) => p - 1);
  };

  const handleSubmit = () => setSubmitted(true);

  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) setCurrentStep(step);
  };

  return {
    currentStep,
    totalSteps,
    progress,
    isFirst: currentStep === 1,
    isLast: currentStep === totalSteps,
    submitted,
    handleNext,
    handleBack,
    handleSubmit,
    goToStep,
  };
}