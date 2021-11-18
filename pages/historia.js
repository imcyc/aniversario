import Layout from "./components/Layout";
import Bkg from "./components/Bkg";

export default function historia(){
  return(
    <Layout>
      <Bkg imgx="/images/bkg_historia.jpg">
        <div>
          <video id='background-video' autoPlay loop muted>
            <source src='/videos/video5.mp4' type='/video/mp4' />
            <source src='/videos/video5.mp4' type="video/ogg" /> 
          </video>
        </div>
        <h1>HISTORIA IMCYC</h1>
      </Bkg>
    </Layout>
  )
}