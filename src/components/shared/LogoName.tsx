import Image from 'next/image';

const LogoName = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={'https://example.com'}
        alt=""
        width={40}
        height={40}
        className="size-10 rounded-full bg-primary"
      />
      <h1 className="font-RHDisplay text-2xl font-bold text-neutral-700">
        Job Huntly
      </h1>
    </div>
  );
};

export default LogoName;
