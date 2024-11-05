import Container from '../custom-ui/Container';
import Button from '../custom-ui/Button';
import Image from 'next/image';
import LogoName from '../shared/LogoName';

const Footer = () => {
  return (
    <div className="bg-accent-dark font-medium text-neutrals-400">
      <Container>
        <Container>
          <div className="flex h-full flex-col justify-between gap-10 border-b-2 border-white/5 py-20 lg:flex-row lg:gap-32">
            <div className="flex-1 space-y-5 text-white">
              <LogoName className="text-neutral-50" />
              <p className="text-white/70">
                Great platform for the job seeker that passionate about
                startups. Find your dream job easier.
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
            <div className="flex-1 space-y-5 text-white/70">
              <h3 className="font-semibold text-white">Get Notifications</h3>
              <p>
                The latest job news, articles and more sent to your inbox
                weekly.
              </p>
              <div className="grid w-full grid-cols-3 gap-2">
                <input
                  className="col-span-2 h-full rounded border border-neutrals-600 bg-transparent px-3 text-sm text-neutral-50 outline-none ring-2 ring-transparent focus:border-transparent focus:ring-primary"
                  type="email"
                  name=""
                  id=""
                  placeholder="example@gmail.com"
                />
                <Button>Subscribe</Button>
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
      </Container>
    </div>
  );
};

export default Footer;
