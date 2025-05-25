import { FC } from 'react';

export const LoadingSpinner: FC = () => {
  return (
    <div className="flex items-center justify-center h-full min-h-[200px]">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};