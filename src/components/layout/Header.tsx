/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useProgress } from "../../contexts/ProgressContext";
import { Logo } from "./Logo";

export const Header = () => {
  const location = window.location.pathname;
  const { currentStep, stepValidation } = useProgress();
  const [maxProgress, setMaxProgress] = useState(0);

  const currentProgress = stepValidation[currentStep]
    ? ((currentStep + 1) / 4) * 100
    : 0;

  useEffect(() => {
    if (currentProgress > maxProgress) {
      setMaxProgress(currentProgress);
    }
  }, [currentProgress]);

  console.log(location);

  console.log(
    "Current:",
    currentProgress,
    "Max:",
    maxProgress,
    "Step:",
    currentStep,
    "Validation:",
    stepValidation
  );

  return (
    <header className="sticky top-0 z-10 flex items-center justify-around w-full py-2 bg-white sm:px-6 xl:px-32">
      <div className="w-1/2 px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-1/3 px-10 space-y-2">
        {location === "/" && (
          <>
            <div className="flex justify-between mb-2">
              <p className="text-sm text-gray-500">Setup Progress</p>
              {maxProgress > 0 && (
                <p className="text-sm font-medium text-blue-600">
                  {`${Math.round(maxProgress)}% Completed`}
                </p>
              )}
            </div>

            <div className="w-full h-2 bg-gray-200 rounded">
              <div
                className={`h-2 rounded transition-all duration-300 ${
                  maxProgress > 0 ? "bg-blue-600" : "bg-blue-100"
                }`}
                style={{
                  width: `${Math.round(maxProgress)}%`,
                }}
              ></div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
