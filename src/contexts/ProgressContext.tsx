import { createContext, useContext, useState } from "react";

interface ProgressContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  stepValidation: boolean[];
  setStepValidation: (validation: boolean[]) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(
  undefined
);

export const ProgressProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepValidation, setStepValidation] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  return (
    <ProgressContext.Provider
      value={{ currentStep, setCurrentStep, stepValidation, setStepValidation }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};
