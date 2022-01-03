import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from './Header/Header';
import HeaderGerencia from './Header/HeaderGerencia';
import HeaderOcp from './Header/HeaderOcp';
import Footer from './Footer/Footer';
import { motion } from "framer-motion";
import MenuAbajo from './MenuAbajo/MenuAbajo';
import Aniversario from './Header/Aniversario';

const variants = {
  hidden: { opacity: 0, x: 0, y: -100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
}

export default function Layout({children}) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Instituto Mexicano del Cemento y del Concreto A.C.</title>
        <meta name="description" content="Instituto Mexicano del Cemento y del Concreto A.C." />
        <link rel="shortcut icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300;700&family=Oswald:wght@200;700&display=swap" rel="stylesheet" />
      </Head>
      
      {router.route == "/" ? <Header/> : ''}
      {router.route == "/quienes-somos" ? <Header/> : ''}
      {router.route == "/gerencia-tecnica" ? <HeaderGerencia/> : ''}
      {router.route == "/gerencia-tecnica/[tipo]" && <HeaderGerencia/>}
      {router.route == "/cursos" && <HeaderGerencia/>}
      {router.route == "/ocp" ? <HeaderOcp/> : ''}
      {router.route == "/ocp/alcance-de-acreditacion" ? <HeaderOcp/> : ''}
      {router.route == "/ocp/organizaciones-certificadas" ? <HeaderOcp/> : ''}

      {/*<Aniversario />*/}

      {children}
      
      {/* 
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion 
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 100,
        }} // Set the transition to linear
        className=""
      >
        {children}
      </motion.main>
      */}
      <MenuAbajo />

      <Footer />

    </div>
  )
}
