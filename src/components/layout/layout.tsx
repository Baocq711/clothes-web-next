import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import React from 'react';

const Layout = ({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) => {
  return (
    <div className='w-full min-h-screen'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
