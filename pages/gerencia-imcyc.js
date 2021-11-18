import Layout from "./components/Layout";
import Bkg from "./components/Bkg";

export default function gerenciaImcyc(){
  return(
    <Layout>
      <Bkg imgx="/images/bkg_gerencia.jpg">
        <div>
          <video id='background-video' autoPlay loop muted>
            <source src='/videos/video1.mp4' type='/video/mp4' />
            <source src='/videos/video1.mp4' type="video/ogg" /> 
          </video>
        </div>
        <h1>GERENCIA IMCYC</h1>
      </Bkg>
    </Layout>
  )
}