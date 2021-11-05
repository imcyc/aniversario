import Layout from "./components/Layout";
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
          <img src="/circulo.svg" alt="imcyc" title="imcyc" className="mb-5" style={{'width':'100px','opacity':'0.7'}} />
          <h2 style={{
            'fontWeight':'100'
          }}>Instituto Mexicano del Cemento y del Concreto A.C.</h2>
        </motion.div>
        <h3>Compartir el Conocimiento</h3>
        <ItemCarousel/>
      </div>
    </Layout>
  )
}
