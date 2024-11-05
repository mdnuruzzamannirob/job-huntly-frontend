'use client';

import Container from '@/components/custom-ui/Container';
import LogoName from '@/components/shared/LogoName';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ResponsiveDrawer } from './Drawer';
import { homeMenu } from '@/constants/menuItems';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentScrollY, setCurrentScrollY] = useState(0);

  const user = false;

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
      className={`fixed z-[99] h-16 w-full border bg-white duration-500 ease-out xl:h-20 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } ${currentScrollY ? 'border-black/10' : 'border-transparent'}`}
    >
      <Container className="flex h-full items-center justify-between gap-10">
        <LogoName />

        {/* menu */}
        <div className="hidden w-full items-center gap-5 xl:flex">
          {homeMenu.map((menu) => (
            <Link href={menu.value} key={menu.value}>
              {menu.label}
            </Link>
          ))}
        </div>

        {user ? (
          <div className="hidden size-10 min-w-10 xl:block">
            <button className="size-full rounded-full bg-primary"></button>
          </div>
        ) : (
          <div className="hidden items-center gap-5 whitespace-nowrap xl:flex">
            <Link href={'/'}>Login</Link>
            <Link href={'/'}>Sign Up</Link>
          </div>
        )}
        <ResponsiveDrawer />
      </Container>
    </div>
  );
};

export default Header;
