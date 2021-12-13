import Head from 'next/head';
import NavBar from '../navbar';
import { motion } from 'framer-motion';

export default function Layout({ children, router }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lenard Okorn</title>
      </Head>

      <NavBar path={router.asPath} />

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
        <main className="w-full sm:w-[580px] md:w-[720px] lg:w-[980px] xl:w-[1200] pt-[5rem] mx-auto px-8 sm:px-4">
          {children}
        </main>
      </motion.div>
    </>
  );
}
