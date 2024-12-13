import { createContext, useContext, useMemo, useState } from 'react';

interface SignupStepContextType {
  currentSignupStep: number;
  setCurrentSignupStep: (step: number) => void;
}

const SignupStepContext = createContext<SignupStepContextType | undefined>(
  undefined,
);

export const SignupStepProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentSignupStep, setCurrentSignupStep] = useState<number>(1);

  const value = useMemo(
    () => ({ currentSignupStep, setCurrentSignupStep }),
    [currentSignupStep, setCurrentSignupStep],
  );

  return (
    <SignupStepContext.Provider value={value}>
      {children}
    </SignupStepContext.Provider>
  );
};

export const useSignUpStep = () => {
  const context = useContext(SignupStepContext);
  if (!context) {
    throw new Error('useSignUpStep must be used within a StepProvider');
  }
  return context;
};
