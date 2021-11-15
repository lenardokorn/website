import Head from 'next/head';
import NavBar from '../navbar';

export default function Layout({ children, router }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lenard Okorn</title>
      </Head>

      <NavBar path={router.asPath} />

      <main className="container pt-[5rem] mx-auto">{children}</main>
    </>
  );
}
