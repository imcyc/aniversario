import { useState } from "react";
import Layout from "./components/Layout";
import Bkg from "./components/Bkg";
import { Container, Row } from "react-bootstrap";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { ArrowRightCircle } from "react-bootstrap-icons";

export default function ocp() {
  const [estado, setEstado] = useState('CERTIFICACIÓN INICIAL DE PRODUCTO')

  const activo = (e)=>{
    setEstado(e)
  }

  return (
    <Layout>
      <div className="ocp-layout">
        <h2>Organismo de Certificación de Producto</h2>
        <h1>{estado}</h1>
        <Tabs
          defaultActiveKey="CERTIFICACIÓN INICIAL DE PRODUCTO"
          transition={false}
          id="noanim-tab-example"
          onSelect={activo}
        >
          <Tab eventKey="CERTIFICACIÓN INICIAL DE PRODUCTO" title="CERTIFICACIÓN INICIAL DE PRODUCTO">
            <Container>
              <h3><ArrowRightCircle/> CERTIFICACIÓN INICIAL DE PRODUCTO</h3>
              <hr/>
            </Container>
          </Tab>
          <Tab eventKey="VISITA DE SEGUIMIENTO" title="VISITA DE SEGUIMIENTO">
            <Container>
              <h3><ArrowRightCircle/> VISITA DE SEGUIMIENTO</h3>
              <hr/>
            </Container>
          </Tab>
          <Tab eventKey="ALCANCES DE LA CERTIFICACIÓN" title="ALCANCES">
            <Container>
              <h3><ArrowRightCircle/> ALCANCES</h3>
              <hr/>
            </Container>
          </Tab>
          <Tab eventKey="RENOVACIÓN DE LA CERTIFICACIÓN" title="RENOVACIÓN DE LA CERTIFICACIÓN">
            <Container>
              <h3><ArrowRightCircle/> RENOVACIÓN DE LA CERTIFICACIÓN</h3>
              <hr/>
            </Container>
          </Tab>
        </Tabs>
        <p className="clausulas pt-3">En caso de estar interesado en la certificación de su producto, lo invitamos a que descargue las<br />Condiciones de certificación y Solicitud de certificación; llenarlas, fírmarlas y enviarlas por correo a los datos de contacto.</p>
      </div>
    </Layout>
  )
}