import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl ${className}`}>
      {children}
    </div>
  );
};