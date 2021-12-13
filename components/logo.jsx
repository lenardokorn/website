import Link from 'next/link';
import Image from 'next/image';
// TODO: Different logo depending on theme
import logo from '../public/images/logo-background.png';

const LogoBox = () => {
  return (
    <span className="group font-medium text-3xl inline-flex items-center mr-7">
      <Image
        src={logo}
        alt=":)"
        className="group-hover:rotate-[-20deg] transition-transform"
        width={40}
        height={40}
      />
      <span className="ml-3 hidden sm:inline-flex">Lenard Okorn</span>
    </span>
  );
};

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex items-center">
        <LogoBox />
      </a>
    </Link>
  );
};

export default Logo;
