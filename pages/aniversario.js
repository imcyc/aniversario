import Layout from "./components/Layout";
import { Container } from "react-bootstrap";
import Bkg from "./components/Bkg";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, ArrowDownSquare } from 'react-bootstrap-icons';

export default function aniversario(){
  return(
    <Layout>
      <Bkg 
        imgx="/images/bkg_aniversario.jpg"
        flexer="column"
      >
        <div>
          <video id='background-video' autoPlay loop muted>
            <source src='/videos/video.mp4' type='/video/mp4' />
            <source src='/videos/video.mp4' type="video/ogg" /> 
          </video>
        </div>
        <Container className="pagina-aniversario">
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ ease: "easeIn", duration: 5 }}
          >
            <img src="/images/logo_aniversario.png" alt="imcyc" title="imcyc" className="mb-5" style={{'width':'350px','opacity':'0.7'}} />
          </motion.div>
          <h1>25 AÑOS CONSTRUYENDO EXPERIENCIAS DIGITALES</h1>
          <hr/>
          <p><b>El INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</b><br/>es una asociación no lucrativa dedicada a la investigación, enseñanza y difusión de las técnicas de aplicación del cemento y del concreto. Su misión es <br/><b>promover la utilización óptima del cemento y del concreto para satisfacer las necesidades del mercado con calidad, productividad y oportunidad</b>,<br/> contribuyendo a mejorar el desempeño profesional, el desarrollo y beneficio económico de la industria, así como de la sociedad.</p>
          <ArrowDownSquare size={30} color={'#fff'}/>
        </Container>
      </Bkg>
    </Layout>
  )
}