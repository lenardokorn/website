import Link from 'next/link';
import { HiMail, HiHeart } from 'react-icons/hi';
import { BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';

const FooterLink = ({ href, children, blank }) => {
  return (
    <Link href={href}>
      <a
        target={blank ? '_blank' : ''}
        className="mx-2 font-normal text-darkest no-underline hover:text-darker dark:text-lightest dark:hover:text-lighter"
      >
        {children}
      </a>
    </Link>
  );
};

export default function Footer() {
  return (
    <div className="mt-auto w-full">
      <div className="z-[1] mt-10 flex flex-col items-center bg-lightTransp py-6 shadow-top-lg backdrop-blur-md transition-shadow dark:bg-darkTransp dark:shadow-darker">
        <div className="flex w-full flex-col items-center px-8 sm:w-[580px] sm:px-4 md:w-[720px] lg:w-[980px] xl:w-[1200]">
          <div className="flex flex-wrap items-center justify-center">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/#about">About</FooterLink>
            <FooterLink href="mailto:lenardokorn@gmail.com">
              <HiMail className="inline-block" /> E-Mail
            </FooterLink>
            <FooterLink href="https://www.github.com/lenardokorn" blank>
              <BsGithub className="inline-block" /> Github
            </FooterLink>
            <FooterLink href="https://twitter.com/1tzL3nny" blank>
              <BsTwitter className="inline-block" /> Twitter
            </FooterLink>
            <FooterLink href="https://www.instagram.com/itz.lenny" blank>
              <BsInstagram className="inline-block" /> Instagram
            </FooterLink>
          </div>

          <hr className="my-2" />

          <div className="group">
            © built with{' '}
            <HiHeart className="inline-block transition-transform group-hover:scale-125 group-hover:animate-ping group-hover:text-red-600" />{' '}
            by Lenard Okorn
          </div>

          <hr className="my-2" />

          <div className="flex flex-wrap items-center justify-center">
            <span className="group mx-2">
              <span className="group-hover:font-bold">No one</span> is illegal.
            </span>
            <span className="mx-2 rounded-md hover:bg-black hover:px-2 hover:text-lightest">
              Black Lives Matter.
            </span>
            <span className="rainbow mx-2">Love is love.</span>
            <span className="trans-rights mx-2 rounded-md hover:px-2 dark:hover:bg-clip-text dark:hover:px-0 dark:hover:text-transparent">
              Trans rights are human rights.
            </span>
          </div>

          <style jsx>{`
            .rainbow:hover {
              background-image: linear-gradient(
                to right,
                #e50000,
                #ff8d00,
                #ffee00,
                #008121,
                #004cff,
                #760188
              );
              -webkit-background-clip: text;
              color: transparent;
            }

            .trans-rights:hover {
              background-image: linear-gradient(
                to right,
                #5ccffb,
                #f5abb9,
                white,
                #f5abb9,
                #5ccffb
              );
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
