import Head from 'next/head';
import Image from 'next/image';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0, z: 100 },
  enter: { opacity: 1, x: 0, y: 0, z: 0 },
  exit: { opacity: 0, x: 0, y: 0, z: -100 },
}

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <title>Instituto Mexicano del Cemento y del Concreto A.C.</title>
        <meta name="description" content="Instituto Mexicano del Cemento y del Concreto A.C." />
        <link rel="shortcut icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300;700&family=Oswald:wght@200;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <motion.main
        variants={variants} // Pass the variant object into Framer Motion 
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: 'linear' }} // Set the transition to linear
        className=""
      >
        {children}
      </motion.main>

      <Footer />

    </div>
  )
}
