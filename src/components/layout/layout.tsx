import Header from '@/components/header/header';
import React from 'react';

const Layout = ({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
