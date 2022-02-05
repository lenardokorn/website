import Logo from './logo';
import DarkModeSwitch from './dark-mode-switch';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';
import { useRouter } from 'next/router';

const DropdownItem = ({ href, children }) => {
  return (
    <Link href={href}>
      <a
        className="block rounded-md px-4 py-2 font-normal no-underline hover:bg-lighter dark:hover:bg-darker"
        tabIndex={-1}
      >
        {children}
      </a>
    </Link>
  );
};

const DropdownButton = () => {
  const [isHidden, setHidden] = useState(true);

  const onDropdown = () => {
    setHidden(!isHidden);
  };

  return (
    <div className="relative ml-2 inline-block sm:hidden">
      <button
        className="flex content-center items-center rounded-md border-[0.25px] border-gray-400 p-3 hover:bg-lighter dark:border-gray-700 dark:hover:bg-darker"
        onClick={onDropdown}
      >
        <HiMenu className="h-5 w-5" />
      </button>
      <div
        className={
          (isHidden ? 'hidden ' : ' ') +
          'absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-lightest shadow-lg focus:outline-none dark:bg-darkest'
        }
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1">
          <DropdownItem href="/school">School</DropdownItem>
          <DropdownItem href="/personal-projects">
            Personal Projects
          </DropdownItem>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={
          (isActive ? 'bg-lighter dark:bg-darker ' : '') +
          'rounded-md py-1 px-2 font-normal no-underline hover:bg-lighter dark:hover:bg-darker'
        }
      >
        {children}
      </a>
    </Link>
  );
};

const NavBar = () => {
  return (
    <nav className="fixed z-[1] w-full bg-lightTransp shadow-lg backdrop-blur-md transition-shadow dark:bg-darkTransp dark:shadow-darker">
      <div className="flex flex-wrap items-center p-2">
        <Logo />
        <div className="mt-4 hidden w-full flex-grow flex-col items-center space-x-0 sm:mt-0 sm:flex sm:w-auto sm:flex-row sm:space-x-1">
          <NavItem href="/school">School</NavItem>
          <NavItem href="/personal-projects">Personal Projects</NavItem>
        </div>
        <DarkModeSwitch />
        <DropdownButton />
      </div>
    </nav>
  );
};

export default NavBar;
