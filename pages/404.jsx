import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-5rem)] flex-col items-center justify-center text-center">
      <h1 className="font-mono">404: Not found {'>.<'}</h1>
      <div className="text-xl">
        <p className="my-3 font-light">
          The page you were looking for could not be found.
        </p>
        <Link href="/">
          <a>Bring me back home!</a>
        </Link>
      </div>
    </div>
  );
}
