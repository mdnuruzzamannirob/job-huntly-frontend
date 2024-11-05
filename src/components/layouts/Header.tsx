'use client';

import Container from '@/components/custom-ui/Container';
import LogoName from '@/components/shared/LogoName';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ResponsiveDrawer } from './Drawer';
import { homeMenu } from '@/constants/menuItems';
import Button from '../custom-ui/Button';
import { Avatar, AvatarFallback, AvatarImage } from '../shadcn-ui/avatar';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentScrollY, setCurrentScrollY] = useState(0);

  const user = true;
  const pathname = usePathname();

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
        <LogoName />

        {/* menu */}
        <div className="hidden items-center gap-5 xl:flex">
          {homeMenu.map((menu) => (
            <Link
              href={menu.value}
              key={menu.value}
              className={`duration-200 ease-linear ${pathname === menu.value ? 'font-semibold text-primary' : 'font-medium text-neutrals-600 hover:text-black'}`}
            >
              {menu.label}
            </Link>
          ))}
        </div>

        {user ? (
          <div className="hidden items-center gap-10 xl:flex">
            <Link
              href="/applicant"
              className="font-medium text-neutrals-600 duration-200 ease-linear hover:text-black"
            >
              Dashboard
            </Link>
            <button className="flex size-10 min-w-10 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </button>
          </div>
        ) : (
          <div className="hidden items-center gap-3 whitespace-nowrap xl:flex">
            <Link href="/signup">
              <Button variant="ghost" className="py-[6px] text-base">
                Login
              </Button>
            </Link>
            <Link href="/signup" className="hidden whitespace-nowrap xl:block">
              <Button>Sign Up</Button>
            </Link>
          </div>
        )}
        <ResponsiveDrawer />
      </Container>
    </div>
  );
};

export default Header;
