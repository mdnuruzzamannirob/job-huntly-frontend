import Footer from '@/components/layouts/footer/Footer';
import Header from '@/components/layouts/header/Header';
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
