interface Props {
  currentStep: number;
  setStep: (step: number) => void;
  stepsValidation: boolean[];
}

const steps = [
  "Company Info",
  "Founding Info",
  "Social Media Profile",
  "Contact",
];

export const TabsHeader: React.FC<Props> = ({
  currentStep,
  setStep,
  stepsValidation,
}) => {
  return (
    <div className="flex justify-center pb-2 mb-4 space-x-4 border-b ">
      {steps.map((label, index) => (
        <button
          key={label}
          disabled={!stepsValidation.slice(0, index).every(Boolean)}
          onClick={() => setStep(index)}
          className={`px-4 py-2 rounded ${
            currentStep === index
              ? "border-b border-blue-600 text-blue-600 font-semibold"
              : "text-gray-500"
          } ${
            stepsValidation.slice(0, index).every(Boolean)
              ? "cursor-pointer"
              : "cursor-not-allowed text-gray-300"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
