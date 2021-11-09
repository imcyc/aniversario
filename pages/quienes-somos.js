import Layout from "./components/Layout";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

export default function quienesSomos() {
    return (
        <Layout>
            <Container fluid={true} className="d-flex qsomos">
                <Row style={{ 'width': '100vw', 'height': '85vh', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"><ArrowRight/> QUIÉNES SOMOS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second"><ArrowRight/> SERVICIOS DE LABORATORIO</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third"><ArrowRight/> ASESORÍAS TÉCNICAS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth"><ArrowRight/> CURSOS Y SEMINARIOS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth"><ArrowRight/> PUBLICACIONES</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="seventh"><ArrowRight/> BIBLIOTECA</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="eigth"><ArrowRight/> CRECIMIENTO SOSTENIDO</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <h1><b><ArrowRight/> INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</b></h1>
                                    <hr />
                                    <p className="text-justify mr-5"><b>El IMCYC, A.C. es una asociación no lucrativa dedicada a la investigación, enseñanza y difusión de las técnicas de aplicación del cemento y del concreto</b>. Su misión es promover la utilización óptima del cemento y del concreto para satisfacer las necesidades del mercado con calidad, productividad y oportunidad, contribuyendo a mejorar el desempeño profesional, el desarrollo y beneficio económico de la industria, así como de la sociedad.<br /><br />El IMCYC surgió en 1923 como un «Comité para Propagar el Uso del Cemento Portland». Ya <b>en 1959 se constituyó como Instituto Mexicano del Cemento y del Concreto, A.C., con el objetivo de investigar y promover métodos constructivos y soluciones técnicas que permitan un uso más económico y racional del concreto en la construcción</b>, para ofrecer el concreto al diseñador, al constructor y al propietario como la alternativa más ventajosa frente al empleo de otros materiales, además de crear más y mejores satisfactores para los asociados y sus clientes.<br /><br />De este modo, se aportan nuevos conocimientos sobre el cemento y el concreto, y se enseña a trabajarlo con calidad, resolviendo los problemas de aplicación en las obras y orientando a los profesionales en sus múltiples oportunidades de utilización. Así mismo, se fortalecen nuestras estructuras, desarrollando al personal, ampliando nuestra presencia nacional e internacional y haciendo más efectivas y eficientes las operaciones. <b>El IMCYC es imagen, voz y representatividad del Sector Cemento y Concreto ante la sociedad, las autoridades nacionales y entidades internacionales, no estando comprometido con ninguna de las empresas del ramo</b>.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h1><b><ArrowRight/> SERVICIOS DE LABORATORIO</b></h1>
                                    <hr />
                                    <p className="text-justify mr-5"><b>La institución cuenta con equipo especializado, personal altamente capacitado y funcionales instalaciones para realizar los estudios de verificación de calidad del concreto en obras y plantas productoras</b>, así como para la evaluación de estructuras dañadas, proyectos de reparación y estudios sobre propiedades físicas, químicas y mecánicas de materiales para construcción.<br /><br />El IMCYC cuenta con cuatro laboratorios especializados: <b>Concreto, Cemento, Metrología y Geotecnia</b>.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <h1><b><ArrowRight/> ASESORÍAS TÉCNICAS</b></h1>
                                    <hr />
                                    <p className="text-justify mr-5">La solución de los problemas técnicos complejos que se pueden presentar durante la ejecución de las obras civiles, así como la rehabilitación de daños en los elementos estructurales requiere del apoyo de asesores especializados en diversos campos de la ingeniería.<br /><br />El IMCYC cuenta con una amplia red de consultores con diversas especialidades que le ayudarán a resolver problemas técnicos, ya sea en materia de diseño y control de ejecución, o bien, en el diagnóstico, evaluación y tratamiento de elementos que presentan daño estructural causado por agentes físicos o químicos. En casos de controversia, el IMCYCes frecuentemente consultado y brinda servicios de tercerías que garantizan una opinión neutral en sus dictámenes y una estricta confidencialidad en favor de las partes involucradas.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <h1><b><ArrowRight/> CURSOS Y SEMINARIOS</b></h1>
                                    <hr />
                                    <p className="text-justify mr-5">Las actividades de enseñanza del IMCYC están encaminadas fundamentalmente a fomentar las actualizaciones de conocimientos y la especialización de los profesionales en el campo de la construcción y la competencia laboral, a través de conferencias técnicas, cursos básicos y de certificación, seminarios nacionales e internacionales, diplomados, simposios y congresos, los cuales cuentan con el apoyo y la participación de los más reconocidos profesores, ponentes y conferencistas, líderes mundiales en la teoría y la práctica de la construcción con concreto.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                    <h1><b><ArrowRight/> PUBLICACIONES</b></h1>
                                    <hr />
                                    <p className="text-justify mr-5">La tarea de difusión del IMCYC se realiza a través de dos grandes medios:la revista especializada «Construcción y Tecnología en Concreto», que ofrece un foro abierto, amplio y directo de vinculación con los profesionales de la construcción, y el Fondo Editorial IMCYC, colección con múltiples libros técnicos especializados, la más completa de su tipo en Latinoamérica. El IMCYC, gracias a su vinculación con importantes instituciones en el extranjero, posee los derechos de traducción y comercialización de sus publicaciones para beneficio de todos los profesionales hispanoparlantes.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seventh">
                                    <h1><b><ArrowRight/> BIBLIOTECA</b></h1>
                                    <hr />
                                    <p className="text-justify mr-5">Considerado como el Centro de Información más importante en América Latina, atiende las necesidades de los profesionales de la construcción con un gran acervo, que puede ser consultado de manera física o virtual.<br /><br />Los títulos disponibles superan los siete mil libros especializados, además de las revistas internacionales, normas y reglamentos.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="eigth">
                                    <h1><b><ArrowRight/> CRECIMIENTO SOSTENIDO</b></h1>
                                    <hr />
                                    <p className="text-justify mr-5">El IMCYC surgió en 1923 como un «Comité para Propagar el Uso del Cemento Portland». Ya en 1959 se constituyó como Instituto Mexicano del Cemento y del Concreto, AC, con el objetivo de investigar y promover métodos constructivos y soluciones técnicas que permitan un uso más económico y racional del concreto en la construcción, para ofrecer el concreto al diseñador, al constructor y al propietario como la alternativa más ventajosa frente al empleo de otros materiales, además de crear más y mejores satisfactores para los asociados y sus clientes.<br /><br />De este modo, se aportan nuevos conocimientos sobre el cemento y el concreto, y se enseña a trabajarlo con calidad, resolviendo los problemas de aplicación en las obras y orientando a los profesionales en sus múltiples oportunidades de utilización. Así mismo, se fortalecen nuestras estructuras, desarrollando al personal, ampliando nuestra presencia nacional e internacional y haciendo más efectivas y eficientes las operaciones. El IMCYC es imagen, voz y representatividad del Sector Cemento y Concreto ante la sociedad, las autoridades nacionales y entidades internacionales, no estando comprometido con ninguna de las empresas del ramo.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Tab.Container>
                </Row>
            </Container>
            <style jsx>{`
                p {
                    text-align: justify;
                    margin-right: 50px;
                }
            `}</style>
        </Layout>
    )
}