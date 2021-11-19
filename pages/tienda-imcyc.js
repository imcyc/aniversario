import Layout from "./components/Layout";
import Bkg from "./components/Bkg";

import { UseEntries } from '../lib/swr-hooks';

export default function tiendaImcyc(){
  const { entries, isLoading } = UseEntries();

  if(isLoading){
    return 'Cargando';
  };

  console.log(entries);

  return(
    <Layout>
      <Bkg imgx="/images/bkg_tienda.jpg">
        <h1>TIENDA IMCYC</h1>
        <hr/>
        {entries.map((producto) => (
          <div className="d-flex flex-column">
            <h2>{producto.name}</h2>
          </div>
        ))};
      </Bkg>
    </Layout>
  )
}