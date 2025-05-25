import { FC, ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container flex-grow px-4 py-8 mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};