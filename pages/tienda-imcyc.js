import Layout from "./components/Layout";
import Bkg from "./components/Bkg";
import { getWhyNextReasons } from "../lib/api";

import { UseEntries } from '../lib/swr-hooks';

export default function tiendaImcyc({ reasons }){
  const { entries, isLoading } = UseEntries();

  if(isLoading){
    return 'Cargando...';
  };

  console.log(entries);

  return(
    <Layout>
      <Bkg imgx="/images/bkg_tienda_.jpg">
        <div className="d-none">
          <video id='background-video' autoPlay loop muted>
            <source src='/videos/video6.mp4' type='/video/mp4' />
            <source src='/videos/video6.mp4' type="video/ogg" /> 
          </video>
        </div>
        <div className="d-flex flex-column tienda">
          <h1>TIENDA IMCYC</h1>
          <hr/>
          <div className="grid grid-cols-1 grid-cols-2 grid-cols-3 gap-4">
            {reasons
              .slice(0, reasons.length - 1)
              .map(({ title, description, href }) => (
                <>
                  <h3 className="font-bold mb-2">{title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                  <span className="text-blue-600 hover:text-blue-400 hover:underline mt-4 block">
                    Documentation →
                  </span>
                </>
              ))}
          </div>
          <hr/>
          {/*entries.map((producto) => (
            <div key={producto.id} className="d-flex flex-column">
              <h2>{producto.name}</h2>
            </div>
          ))*/};
        </div>
      </Bkg>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const reasons = await getWhyNextReasons();

  return {
    props: {
      reasons,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}