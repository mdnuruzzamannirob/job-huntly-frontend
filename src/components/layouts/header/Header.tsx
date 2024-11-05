'use client';

import Container from '@/components/custom-ui/Container';
import LogoName from '@/components/shared/LogoName';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentScrollY, setCurrentScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setCurrentScrollY(currentScrollY);

    if (currentScrollY > 600) {
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
      className={`fixed z-[99] h-16 w-full border bg-white font-RHDisplay duration-500 ease-out xl:h-20 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } ${currentScrollY ? 'border-black/10' : 'border-transparent'}`}
    >
      <Container className="flex h-full items-center justify-between">
        <div className="flex items-center gap-10">
          <LogoName />
          <div className="flex items-center gap-5">
            <Link href={'/'}>Find Jobs</Link>
            <Link href={'/'}>Browse Companies</Link>
            <Link href={'/'}>About Us</Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Link href={'/'}>Login</Link>
          <Link href={'/'}>Sign Up</Link>
        </div>
      </Container>
    </div>
  );
};

export default Header;
