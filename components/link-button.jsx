import Link from 'next/link';

export default function LinkButton({ href, newTab, children }) {
  return (
    <Link href={href}>
      <a
        className="flex items-center justify-center rounded-lg bg-darkest py-1.5 px-3 font-medium text-lightest no-underline shadow-sm hover:bg-darker hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 dark:bg-lightest dark:text-darkest dark:hover:bg-lighter dark:focus:ring-gray-700 dark:focus:ring-offset-gray-900"
        target={newTab ? '_blank' : ''}
      >
        {children}
      </a>
    </Link>
  );
}
