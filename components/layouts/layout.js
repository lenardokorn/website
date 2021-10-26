import Head from 'next/head';

export default function Layout({ children, router }) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Lenard Okorn's personal website" />
        <title>Lenard Okorn</title>
      </Head>
      <main>{children}</main>
    </div>
  );
}