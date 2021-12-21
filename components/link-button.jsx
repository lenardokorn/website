import Link from 'next/link';

export default function LinkButton({ href, newTab, children }) {
  return (
    <Link href={href}>
      <a
        className="bg-darkest hover:bg-darker dark:bg-lightest dark:hover:bg-lighter text-lightest dark:text-darkest focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 font-medium py-1.5 px-3 rounded-lg flex items-center justify-center no-underline transition-colors shadow-sm hover:shadow-md"
        target={newTab ? '_blank' : ''}
      >
        {children}
      </a>
    </Link>
  );
}
