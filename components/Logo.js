import Link from 'next/link';
import Image from 'next/image';
// TODO: Different logo depending on theme
import logo from '../public/images/logo-background.png';

const LogoBox = () => {
  return (
    <span className="group font-medium text-xl inline-flex items-center h-8 p-3">
      <Image
        src={logo}
        alt=":)"
        className="group-hover:rotate-[-20deg] transition-transform"
        width={20}
        height={20}
      />
      Lenard Okorn
    </span>
  );
};

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox />
      </a>
    </Link>
  );
};

export default Logo;
