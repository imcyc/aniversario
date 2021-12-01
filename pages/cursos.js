import LayoutTienda from "./components/LayoutTienda";
import Bkg from "./components/Bkg";
import CardProducto from "./components//CardProducto/CardProducto";
import Loader from './components/Loader/Loader';
import { getWhyNextReasons } from "../lib/apiCursos";
import { UseEntries } from '../lib/swr-hooks';
import { Container, Row, Col } from "react-bootstrap";

export default function cursos({ reasons }){
  const { entries, isLoading } = UseEntries();

  if(isLoading){
    return <Loader/>;
  };

  return(
    <LayoutTienda>
      <Container className="tienda">
        <Row>
          <Col sm={2} className="filtros">
            <h2>FILTROS</h2>
          </Col>
          <Col>
          <Row>
            {reasons
              .slice(0, reasons.length - 1)
              .map(({ title, description, autor, precio, imagen }, i) => (
                <Col key={i} sm={6}>
                  <CardProducto 
                    titulo={title}
                    descripcion={description}
                    autor={autor}
                    precio={precio}
                    imagen={imagen}
                  />
                </Col>
              ))}
          </Row>
          {/*entries.map((producto) => (
            <div key={producto.id} className="d-flex flex-column">
              <h2>{producto.name}</h2>
            </div>
          ))*/}
          </Col>
        </Row>
      </Container>
    </LayoutTienda>
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