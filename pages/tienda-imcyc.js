import Layout from "./components/Layout";
import Bkg from "./components/Bkg";

import { UseEntries } from '../lib/swr-hooks';

export default function tiendaImcyc(){
  const { entries, isLoading } = UseEntries();

  if(isLoading){
    return 'Cargando...';
  };

  console.log(entries);

  return(
    <Layout>
      <Bkg imgx="/images/bkg_tienda.jpg">
        <div>
          <video id='background-video' autoPlay loop muted>
            <source src='/videos/video6.mp4' type='/video/mp4' />
            <source src='/videos/video6.mp4' type="video/ogg" /> 
          </video>
        </div>
        <div className="d-flex flex-column tienda">
          <h1>TIENDA IMCYC</h1>
          <hr/>
          {entries.map((producto) => (
            <div key={producto.id} className="d-flex flex-column">
              <h2>{producto.name}</h2>
            </div>
          ))};
        </div>
      </Bkg>
    </Layout>
  )
}