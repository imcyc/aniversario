import { useState, useEffect } from "react";
import LayoutCursos from "./components/LayoutCursos";
import Bkg from "./components/Bkg";
import Form from 'react-bootstrap/Form';
import CardProducto from "./components//CardProducto/CardProducto";
import Loader from './components/Loader/Loader';
import { getWhyNextReasons } from "../lib/apiCursos";
import { UseEntries } from '../lib/swr-hooks';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Carousel from "react-multi-carousel";
import { ArrowRightSquareFill, Calendar2Check, ArrowRightCircleFill } from "react-bootstrap-icons";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Cursos({ reasons }) {
  const [ entradas, setEntradas ] = useState();
  const { entries, isLoading } = UseEntries();

  useEffect(() => {
    setEntradas(reasons);
  }, []);

  if (isLoading) {
    return <Loader />;
  };

  if (!entradas) {
    return <Loader />;
  };

  return (
    <LayoutCursos>
      <Container className="tienda">
        <Row>
          <Col sm={3} className="filtros">
            <Form>
              <hr/>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><ArrowRightSquareFill /> Buscar por fecha:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><ArrowRightSquareFill /> Buscar por tema:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><ArrowRightSquareFill /> Buscar por profesor:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><ArrowRightSquareFill /> Buscar por precio:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                FILTRAR
              </Button>
            </Form>
          </Col>
          <Col sm={9}>
          <hr/>
            <h3><ArrowRightCircleFill /> ENERO 2022</h3>
            <Carousel
              responsive={responsive}
            >
              {entradas
                .slice(0, entradas.length - 1)
                .map(({ title, description, autor, precio, imagen }, i) => (
                  <div key={i} className="card net"><h3>{title}</h3></div>
                ))}
            </Carousel>
            <hr/>
            <h3><ArrowRightCircleFill /> FEBRERO 2022</h3>
            <Carousel
              responsive={responsive}>
              {entradas
                .slice(0, entradas.length - 1)
                .map(({ title, description, autor, precio, imagen }, i) => (
                  <div key={i} className="card net"><h3>{title}</h3></div>
                ))}
            </Carousel>
            <hr/>
            <h3><ArrowRightCircleFill /> MARZO 2022</h3>
            <Carousel
              responsive={responsive}>
              {entradas
                .slice(0, entradas.length - 1)
                .map(({ title, description, autor, precio, imagen }, i) => (
                  <div key={i} className="card net"><h3>{title}</h3></div>
                ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </LayoutCursos>
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