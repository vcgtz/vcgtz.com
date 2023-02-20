import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Header />
          { children }
          <Footer />
        </div>
      </div>
    </>
  );
}
