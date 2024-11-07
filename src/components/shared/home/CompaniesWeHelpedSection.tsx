import Container from '@/components/custom-ui/Container';
import Image from 'next/image';

const CompaniesWeHelpedSection = () => {
  return (
    <Container className="py-10 md:py-16 xl:py-20">
      <h4 className="font-medium text-neutrals-500">
        Companies we helped grow
      </h4>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-10 md:gap-5">
        <Image
          src="/root-images/company/amd-logo-1.svg"
          alt=""
          width={50}
          height={32}
          className="h-6 w-auto select-none xl:h-8"
        />
        <Image
          src="/root-images/company/vodafone-2017-logo.svg"
          alt=""
          width={50}
          height={32}
          className="h-6 w-auto select-none xl:h-8"
        />
        <Image
          src="/root-images/company/intel-3.svg"
          alt=""
          width={50}
          height={32}
          className="h-6 w-auto select-none xl:h-8"
        />
        <Image
          src="/root-images/company/talkit 1.svg"
          alt=""
          width={50}
          height={32}
          className="h-6 w-auto select-none xl:h-8"
        />
        <Image
          src="/root-images/company/tesla-9 1.svg"
          alt=""
          width={50}
          height={32}
          className="h-5 w-auto select-none xl:h-7"
        />
      </div>
    </Container>
  );
};

export default CompaniesWeHelpedSection;
