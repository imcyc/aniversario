import Layout from "./components/Layout";
import Link from "next/dist/client/link";
import { motion } from "framer-motion";
import InicioCarousel from "./components/Carousel/Carousel";
import ItemCarousel from "./components/ItemCarousel/ItemCarousel";

export default function Home() {
  return (
    <Layout>
      <InicioCarousel/>
      <div className="entrada text-center">
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ ease: "easeIn", duration: 3 }}
        >
          <Link href="/aniversario">
            <img src="/images/logo_aniversario.png" alt="imcyc" title="imcyc" className="mb-5" style={{'width':'400px','opacity':'0.7'}} />
          </Link>
        </motion.div>
        <ItemCarousel/>
      </div>
    </Layout>
  )
}
