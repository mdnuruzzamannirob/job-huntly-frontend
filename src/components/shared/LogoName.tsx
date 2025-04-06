import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const LogoName = ({ className = '' }) => {
  return (
    <Link href="/" className="flex items-center gap-2 whitespace-nowrap">
      <Image
        src="/web-logo/favIcon.png"
        alt=""
        width={40}
        height={40}
        className="size-8 rounded-full bg-primary xl:size-10"
      />
      <h1
        className={cn(
          'font-RHDisplay text-lg font-bold text-neutrals-700 xl:text-xl',
          className,
        )}
      >
        Job Huntly
      </h1>
    </Link>
  );
};

export default LogoName;
