import Head from 'next/head';
import NavBar from '../navbar';
import Footer from '../footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lenard Okorn</title>
        <link
          rel="shortcut icon"
          href={isDark ? '/svg/logo-white.svg' : '/svg/logo.svg'}
          type="image/x-icon"
        />
      </Head>

      <div className="flex h-screen flex-col">
        <NavBar />

        <motion.div
          key={router.route}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={{
            hidden: {
              opacity: 0,
              x: 0,
              y: 20,
            },
            enter: {
              opacity: 1,
              x: 0,
              y: 0,
            },
            exit: {
              opacity: 0,
              x: 0,
              y: 20,
            },
          }}
          transition={{
            ease: 'easeOut',
          }}
        >
          <main className="mx-auto w-full px-8 pt-[5rem] sm:w-[580px] sm:px-4 md:w-[720px] lg:w-[980px] xl:w-[1200]">
            {children}
          </main>
        </motion.div>

        <Footer />
      </div>
    </>
  );
}
