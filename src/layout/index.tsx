import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from './footer';
import { Header } from './header';

interface LayoutProps {}

export const Layout: FC<LayoutProps> = ({}) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
