import Head from 'next/head';
import Image from 'next/image';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <title>Instituto Mexicano del Cemento y del Concreto A.C.</title>
        <meta name="description" content="Instituto Mexicano del Cemento y del Concreto A.C." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {children}

      <Footer />

    </div>
  )
}
