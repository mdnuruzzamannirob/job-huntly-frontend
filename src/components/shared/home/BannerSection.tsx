import Container from '@/components/custom-ui/Container';
import Image from 'next/image';
import SearchBar from '../SearchBar';

const BannerSection = () => {
  return (
    <div className="relative overflow-hidden">
      <Container className="relative flex min-h-dvh items-center justify-between py-20">
        <div className="relative w-full">
          <h1 className="select-none text-5xl font-extrabold md:text-6xl 2xl:text-7xl">
            Discover <br />{' '}
            <span className="font-Epilogue font-semibold">more than</span>{' '}
            <br /> <span className="text-primary">5000+</span> Jobs
          </h1>
          <Image
            src="/root-images/Vector.svg"
            alt=""
            width={350}
            height={35}
            className="w-40 select-none md:w-52 2xl:w-60"
          />
          <p className="mb-12 mt-8 text-lg font-medium text-neutrals-600 md:mb-[156px] md:text-xl">
            Great platform for the job seeker that searching for new career
            <span className="md:block">
              {' '}
              heights and passionate about startups.
            </span>
          </p>

          <div className="bottom-0 left-0 z-10 w-full rounded md:absolute lg:w-[700px] 2xl:w-[800px]">
            <SearchBar className="bg-neutrals-100 md:h-20" />
            <p className="mt-5 text-sm font-medium text-neutrals-600 md:text-base">
              Popular :{' '}
              <span className="font-bold">
                UI Designer, UX Researcher, Android, Admin
              </span>
            </p>
          </div>
        </div>

        <div className="hidden min-h-[400px] min-w-[400px] items-center justify-center xl:flex">
          <Image
            src="/root-images/banner-img.png"
            alt=""
            width={500}
            height={500}
            className="size-full select-none"
          />
        </div>
      </Container>

      <div className="absolute -right-28 top-0 -z-10 h-full w-auto opacity-50 xl:opacity-100 2xl:right-0">
        <Image
          src="/root-images/banner-pattern.png"
          alt=""
          width={2000}
          height={1500}
          className="size-full select-none"
        />
      </div>
    </div>
  );
};

export default BannerSection;
