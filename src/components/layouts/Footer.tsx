import Container from '../custom-ui/Container';
import Button from '../custom-ui/Button';
import Image from 'next/image';
import LogoName from '../shared/LogoName';

const Footer = () => {
  return (
    <footer className="bg-accent-dark font-medium text-neutrals-400">
      <Container>
        <div className="grid grid-cols-2 gap-5 border-b-2 border-white/5 py-10 md:grid-cols-3 md:py-16 lg:grid-cols-5 xl:grid-cols-7 xl:py-20 2xl:gap-10">
          <div className="col-span-full mb-5 space-y-5 text-white xl:col-span-2 xl:mb-0">
            <LogoName className="text-neutral-50" />
            <p className="text-white/70">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">About</h3>
            <h3 className="cursor-pointer duration-200 ease-linear hover:text-neutrals-100">
              Companies
            </h3>
            <h3 className="cursor-pointer duration-200 ease-linear hover:text-neutrals-100">
              Pricing
            </h3>
            <h3 className="cursor-pointer duration-200 ease-linear hover:text-neutrals-100">
              Terms
            </h3>
            <h3 className="cursor-pointer duration-200 ease-linear hover:text-neutrals-100">
              Advice
            </h3>
            <h3 className="cursor-pointer duration-200 ease-linear hover:text-neutrals-100">
              Privacy Policy
            </h3>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">About</h3>
            <h3 className="cursor-pointer duration-200 ease-linear hover:text-neutrals-100">
              Companies
            </h3>
            <h3 className="cursor-pointer duration-200 ease-linear hover:text-neutrals-100">
              Pricing
            </h3>
            <h3 className="cursor-pointer duration-200 ease-linear hover:text-neutrals-100">
              Terms
            </h3>
            <h3 className="cursor-pointer duration-200 ease-linear hover:text-neutrals-100">
              Advice
            </h3>
            <h3 className="cursor-pointer duration-200 ease-linear hover:text-neutrals-100">
              Privacy Policy
            </h3>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Resources</h3>
            <h3 className="cursor-pointer duration-200 ease-linear hover:text-neutrals-100">
              Help Docs
            </h3>
            <h3 className="cursor-pointer duration-200 ease-linear hover:text-neutrals-100">
              Guide
            </h3>
            <h3 className="cursor-pointer duration-200 ease-linear hover:text-neutrals-100">
              Updates
            </h3>
            <h3 className="cursor-pointer duration-200 ease-linear hover:text-neutrals-100">
              Contact Us
            </h3>
          </div>
          <div className="col-span-full mt-5 space-y-5 text-white/70 lg:col-span-2 xl:mt-0">
            <h3 className="font-semibold text-white">Get Notifications</h3>
            <p>
              The latest job news, articles and more sent to your inbox weekly.
            </p>
            <div className="grid w-full grid-cols-5 gap-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-3">
              <input
                className="col-span-3 h-full rounded border border-neutrals-600 bg-transparent px-3 text-sm text-neutral-50 outline-none ring-2 ring-transparent focus:border-transparent focus:ring-primary md:col-span-1 lg:col-span-3 2xl:col-span-2"
                type="email"
                name=""
                id=""
                placeholder="example@gmail.com"
              />
              <Button className="col-span-2 md:col-span-1 lg:col-span-2 2xl:col-span-1">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-5 py-6 lg:flex-row">
          <p className="font-Epilogue text-sm">
            2024 @ Job Huntly. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Image
              className="cursor-pointer rounded-full bg-white/70 p-1 duration-200 ease-linear hover:bg-white"
              src="icon/Name=facebook.svg"
              alt=""
              width={25}
              height={25}
            />
            <Image
              className="cursor-pointer rounded-full bg-white/70 p-1 duration-200 ease-linear hover:bg-white"
              src="icon/Name=Instagram.svg"
              alt=""
              width={25}
              height={25}
            />
            <Image
              className="cursor-pointer rounded-full bg-white/70 p-1 duration-200 ease-linear hover:bg-white"
              src="icon/Name=Web.svg"
              alt=""
              width={25}
              height={25}
            />
            <Image
              className="cursor-pointer rounded-full bg-white/70 p-1 duration-200 ease-linear hover:bg-white"
              src="icon/Name=linkedin.svg"
              alt=""
              width={25}
              height={25}
            />
            <Image
              className="cursor-pointer rounded-full bg-white/70 p-1 duration-200 ease-linear hover:bg-white"
              src="icon/Name=twitter.svg"
              alt=""
              width={25}
              height={25}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
