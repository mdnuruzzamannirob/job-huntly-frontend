'use client';

import Container from '@/components/custom-ui/Container';
import LogoName from '@/components/shared/LogoName';
import { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentScrollY, setCurrentScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setCurrentScrollY(currentScrollY);

    if (currentScrollY > 300) {
      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide the header
        setShowHeader(false);
      } else {
        // Scrolling up - show the header
        setShowHeader(true);
      }
    } else {
      // If near the top of the page, always show the header
      setShowHeader(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`bg-white border  fixed w-full h-16 xl:h-20 z-[99] duration-500 ease-out ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } ${currentScrollY ? 'border-black/10' : 'border-transparent'}`}
    >
      <Container>
        <LogoName />
      </Container>
    </div>
  );
};

export default Header;
