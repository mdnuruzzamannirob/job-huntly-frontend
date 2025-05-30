import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../shadcn-ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../shadcn-ui/popover';
import Link from 'next/link';
import { IoIosLogOut } from 'react-icons/io';
import { CiSettings } from 'react-icons/ci';
import { ImProfile } from 'react-icons/im';

const UserProfile = ({ currentScrollY }: { currentScrollY: number }) => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(false);

  useEffect(() => {
    if (currentScrollY) {
      setIsOpen(false);
    }
  }, [currentScrollY]);

  const username = {
    name: 'Md. Nuruzzaman',
    email: 'mduruzzaman@gmail.com',
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger
        asChild
        className="flex size-10 min-w-10 cursor-pointer items-center justify-center rounded-full bg-primary/10 text-2xl text-primary"
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent align="end" className="z-100 flex w-52 flex-col gap-3">
        <div className="">
          <p className="size-10 rounded-full bg-secondary"></p>
          <h3 className="font-semibold">{username.name}</h3>
          <p className="text-sm">{username.email}</p>
        </div>
        <Link
          href="/applicant"
          className="group flex items-center justify-between font-medium text-neutrals-600 outline-hidden duration-200 ease-linear hover:text-black"
        >
          Profile{' '}
          <ImProfile className="text-neutrals-400 duration-200 ease-linear group-hover:text-neutrals-500" />
        </Link>
        <Link
          href="/applicant"
          className="flex items-center justify-between font-medium text-neutrals-600 outline-hidden duration-200 ease-linear hover:text-black"
        >
          Settings <CiSettings className="text-lg" />
        </Link>
        <button className="flex items-center justify-between font-medium text-neutrals-600 outline-hidden duration-200 ease-linear hover:text-black">
          Logout <IoIosLogOut />
        </button>
      </PopoverContent>
    </Popover>
  );
};

export default UserProfile;
