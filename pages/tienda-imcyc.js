import { useState, useEffect } from "react";
import LayoutTienda from "./components/LayoutTienda";
import Bkg from "./components/Bkg";
import Form from 'react-bootstrap/Form';
import CardProducto from "./components//CardProducto/CardProducto";
import Loader from './components/Loader/Loader';
import { getWhyNextReasons } from "../lib/api";
import { UseEntries } from '../lib/swr-hooks';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export default function tiendaImcyc({ reasons }) {
  const { entries, isLoading } = UseEntries();
  const [ productos, setProductos ] = useState();

  useEffect(() => {
    setProductos(reasons);
  });

  if (isLoading) {
    return <Loader />;
  };

  

  console.log(productos);

  return (
    <LayoutTienda>
      <Container className="tienda">
        {/* 
        <Row>
          <Col className="filtros">
            <Form className="buscadorTienda">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Buscar por autor" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        */}
        <Row className="mt-3 pt-3">
          <Col>
            <Row>
              {reasons
                .slice(0, reasons.length - 1)
                .map(({ title, description, autor, precio, imagen }, i) => (
                  <Col key={i} sm={2}>
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