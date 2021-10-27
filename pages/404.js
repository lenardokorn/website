import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-center">
      <h1 className="font-mono">404: Not found {'>.<'}</h1>
      <div className="text-xl">
        <p className="font-light my-3">
          The page you were looking for could not be found.
        </p>
        <Link href="/">
          <a>Bring me back home!</a>
        </Link>
      </div>
    </div>
  );
}
