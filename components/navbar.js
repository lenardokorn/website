import Logo from './logo';
import DarkModeSwitch from './dark-mode-switch';
import Link from 'next/link';
import { MenuIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const DropdownItem = ({ href, children }) => {
  return (
    <Link href={href}>
      <a
        className="block px-4 py-2 hover:bg-lighter dark:hover:bg-darker rounded-md"
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
        className="flex items-center content-center p-3 border-[0.25px] border-lighter rounded-md hover:bg-lighter dark:hover:bg-darker"
        onClick={onDropdown}
      >
        <MenuIcon className="h-5" />
      </button>
      <div
        className={
          (isHidden ? 'hidden ' : ' ') +
          'origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-lightest dark:bg-darkest focus:outline-none'
        }
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <ul className="py-1">
          <DropdownItem href="/school">School</DropdownItem>
          <DropdownItem href="/personal-projects">
            Personal Projects
          </DropdownItem>
        </ul>
      </div>
    </div>
  );
};

const NavItem = ({ href, path, children }) => {
  const isActive = path === href;

  return (
    <Link href={href}>
      <a
        className={
          (isActive ?? 'bg-lighter dark:bg-darker ') +
          'hover:bg-lighter dark:hover:bg-darker rounded-lg transition-colors p-1'
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
      className="fixed w-full bg-lightTransp dark:bg-darkTransp backdrop-blur-xl z-[1] shadow-lg"
      {...props}
    >
      <div className="flex flex-wrap items-center p-2">
        <Logo />
        <ul className="hidden sm:flex flex-col sm:flex-row w-full sm:w-auto items-center flex-grow mt-4 sm:mt-0 space-x-0 sm:space-x-4">
          <NavItem href="/school" path={path}>
            School
          </NavItem>
          <NavItem href="/personal-projects" path={path}>
            Personal Projects
          </NavItem>
        </ul>
        <DarkModeSwitch />
        <DropdownButton />
      </div>
    </nav>
  );
};

export default NavBar;
