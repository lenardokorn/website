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
        className="block px-4 py-2 hover:bg-lighter dark:hover:bg-darker rounded-md no-underline font-normal"
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
    <div className="ml-2 inline-block sm:hidden relative">
      <button
        className="flex items-center content-center p-3 border-[0.25px] border-gray-400 dark:border-gray-700 rounded-md hover:bg-lighter dark:hover:bg-darker"
        onClick={onDropdown}
      >
        <HiMenu className="w-5 h-5" />
      </button>
      <div
        className={
          (isHidden ? 'hidden ' : ' ') +
          'origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-lightest dark:bg-darkest focus:outline-none'
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
          'hover:bg-lighter dark:hover:bg-darker rounded-md py-1 px-2 no-underline font-normal'
        }
      >
        {children}
      </a>
    </Link>
  );
};

const NavBar = (props) => {
  const { path } = props;

  return (
    <nav
      className="fixed w-full bg-lightTransp dark:bg-darkTransp backdrop-blur-md z-[1] shadow-lg dark:shadow-darker"
      {...props}
    >
      <div className="flex flex-wrap items-center p-2">
        <Logo />
        <div className="hidden sm:flex flex-col sm:flex-row w-full sm:w-auto items-center flex-grow mt-4 sm:mt-0 space-x-0 sm:space-x-1">
          <NavItem href="/school" path={path}>
            School
          </NavItem>
          <NavItem href="/personal-projects" path={path}>
            Personal Projects
          </NavItem>
        </div>
        <DarkModeSwitch />
        <DropdownButton />
      </div>
    </nav>
  );
};

export default NavBar;
