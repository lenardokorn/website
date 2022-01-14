import Link from 'next/link';

const LogoBox = () => {
  return (
    <span className="group font-medium text-3xl inline-flex items-center mr-7">
      <svg
        className="fill-current"
        width="40"
        height="40"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M575 994.412C815.563 958.226 1000 750.652 1000 500C1000 223.858 776.142 0 500 0C249.348 0 41.7738 184.437 5.58752 425H158.054C192.388 267.741 332.444 150 500 150C693.3 150 850 306.7 850 500C850 667.556 732.259 807.612 575 841.945V994.412ZM425 1000H0V575H150V850H425V1000Z"
        />
      </svg>
      <span className="ml-3 hidden sm:inline-flex">Lenard Okorn</span>
    </span>
  );
};

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex items-center no-underline">
        <LogoBox />
      </a>
    </Link>
  );
};

export default Logo;
