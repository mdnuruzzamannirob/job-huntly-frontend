import Image from 'next/image';
import Link from 'next/link';

const LogoName = () => {
  return (
    <Link href="/" className="flex items-center gap-2 whitespace-nowrap">
      <Image
        src={'https://example.com'}
        alt=""
        width={40}
        height={40}
        className="size-10 rounded-full bg-primary"
      />
      <h1 className="font-RHDisplay text-xl font-bold text-neutrals-700">
        Job Huntly
      </h1>
    </Link>
  );
};

export default LogoName;
