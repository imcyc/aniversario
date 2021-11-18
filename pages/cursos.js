import Layout from "./components/Layout";
import Bkg from "./components/Bkg";

export default function cursos(){
  return(
    <Layout>
      <Bkg imgx="/images/bkg_cursos.jpg">
        <div>
          <video id='background-video' autoPlay loop muted>
            <source src='/videos/video2.mp4' type='/video/mp4' />
            <source src='/videos/video2.mp4' type="video/ogg" /> 
          </video>
        </div>
        <h1>CURSOS, SEMINARIOS Y SEMINARIOS</h1>
      </Bkg>
    </Layout>
  )
}