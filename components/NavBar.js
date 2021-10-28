import Logo from './Logo';
import Link from 'next/link';

const NavItem = ({ href, path, children }) => {
  const isActive = path === href;

  return (
    <Link href={href}>
      <a
        className={
          (isActive ? 'text-darker dark:text-lighter ' : ' ') +
          'hover:text-darker dark:hover:text-lighter transition-colors'
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
      className="fixed w-full bg-lightTransp dark:bg-darkTransp backdrop-blur-xl z-[1]"
      {...props}
    >
      <div className="flex flex-wrap items-center justify-between p-2">
        <Logo />
        <ul className="hidden sm:flex flex-col sm:flex-row w-full sm:w-auto items-center flex-grow mt-4 sm:mt-0 space-x-0 sm:space-x-4">
          <NavItem href="/school" path={path}>
            School
          </NavItem>
          <NavItem href="/personal-projects" path={path}>
            Personal Projects
          </NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
