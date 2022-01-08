import Link from 'next/link';
import { HiMail, HiHeart } from 'react-icons/hi';
import { BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';

const FooterLink = ({ href, children, blank }) => {
  return (
    <Link href={href}>
      <a
        target={blank ? '_blank' : ''}
        className="mx-2 no-underline font-normal text-darkest hover:text-darker dark:text-lightest dark:hover:text-lighter"
      >
        {children}
      </a>
    </Link>
  );
};

export default function Footer() {
  return (
    <div className="w-full mt-auto">
      <div className="mt-10 py-6 flex flex-col items-center bg-lightTransp dark:bg-darkTransp backdrop-blur-md z-[1] shadow-top-lg dark:shadow-darker transition-shadow">
        <div className="w-full sm:w-[580px] md:w-[720px] lg:w-[980px] xl:w-[1200] px-8 sm:px-4 flex flex-col items-center">
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
            <HiHeart className="inline-block group-hover:text-red-600 group-hover:animate-ping group-hover:scale-125 transition-transform" />{' '}
            by Lenard Okorn
          </div>

          <hr className="my-2" />

          <div className="flex flex-wrap items-center justify-center">
            <span className="w-fit mx-2 group">
              <span className="group-hover:font-bold">No one</span> is illegal.
            </span>
            <span className="w-fit mx-2 hover:text-lightest hover:bg-black rounded-md hover:px-2">
              Black Lives Matter.
            </span>
            <span className="w-fit mx-2 rainbow">Love is love.</span>
            <span className="w-fit mx-2 trans-rights dark:hover:text-transparent dark:hover:bg-clip-text rounded-md hover:px-2 dark:hover:px-0">
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
