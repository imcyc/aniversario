import Layout from "./components/Layout";
import Bkg from "./components/Bkg";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default function ocp() {
  return (
    <Layout>
      <div className="ocp-layout">
        <h2>Organismo de Certificación de Producto</h2>
        <h1>CERTIFICACIÓN INICIAL DE PRODUCTO</h1>
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="CERTIFICACIÓN INICIAL DE PRODUCTO">
            <h5>CERTIFICACIÓN INICIAL DE PRODUCTO</h5>
          </Tab>
          <Tab eventKey="profile" title="VISITA DE SEGUIMIENTO">
            <h5>VISITA DE SEGUIMIENTO</h5>
          </Tab>
          <Tab eventKey="contact" title="ALCANCES">
            <h5>ALCANCES</h5>
          </Tab>
          <Tab eventKey="contact" title="RENOVACIÓN DE LA CERTIFICACIÓN">
            <h5>RENOVACIÓN DE LA CERTIFICACIÓN</h5>
          </Tab>
        </Tabs>
        <p className="clausulas">En caso de estar interesado en la certificación de su producto, lo invitamos a que descargue las<br />Condiciones de certificación y Solicitud de certificación; llenarlas, fírmarlas y enviarlas por correo a los datos de contacto.</p>
      </div>
    </Layout>
  )
}