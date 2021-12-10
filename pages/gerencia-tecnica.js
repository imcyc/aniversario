import Layout from "./components/Layout";
import Bkg from "./components/Bkg";
import { Container, Row, Col } from "react-bootstrap";

export default function gerenciaImcyc(){
  return(
    <Layout>
      <div className="gerencia">
        <Container>
          <Row>
            <Col>
              <h1>GERENCIA TÉCNICA</h1>
              <hr/>
              <p>Es una de las áreas del Instituto para apoyo a los diseñadores, a los constructores y a los propietarios de una obra o proyecto, para investigar y definir procedimientos constructivos que permitan la utilización óptima del cemento Portland y del concreto hidráulico; así también, se refuerzan las actividades de enseñanza del instituto para un mayor conocimiento del cemento Portland y del concreto para beneficio de la industria de la construcción que redunda en el bienestar de la Sociedad.<br/><br/>Para lo anterior, la Gerencia coordina las actividades de los departamentos que la integran y que son: Asesorías Técnicas de Estructuras, de Tecnología del Concreto y de Sistemas y de Control de Calidad; Laboratorio de Cemento, Laboratorio de Concreto y Laboratorio de Metrología, para lograr la óptima realización y la logística de los servicios que se ofrecen.<br/><br/>Planea y dirige las actividades de servicio al cliente para que sean congruentes con los objetivos del IMCYC, vigilando la observancia de las Políticas y Normas orientadas a lograr la plena satisfacción del cliente. Representa al Instituto en aquellas actividades congruentes con su función, en que se invita al Instituto a participar.</p>
            </Col>
          </Row>
        </Container>
        
        <div>
          <video id='background-video' autoPlay loop muted>
            <source src='/videos/video1.mp4' type='/video/mp4' />
            <source src='/videos/video1.mp4' type="video/ogg" /> 
          </video>
        </div>
        
        
      </div>
    </Layout>
  )
}