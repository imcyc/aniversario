import Layout from "./components/Layout";
import { Container, Row, Col } from "react-bootstrap";

export default function quienesSomos(){
    return(
        <Layout>
            <Container fluid={true} className="d-flex qsomos">
                <Row style={{'width':'100vw'}} style={{'height':'85vh','display':'flex','justifyContent':'center','alignItems':'center'}}>
                    <Col sm={2}>
                        
                    </Col>
                    <Col>
                        <h1>INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</h1>
                        <hr/>
                        <p className="text-justify mr-5"><b>El IMCYC, A.C. es una asociación no lucrativa dedicada a la investigación, enseñanza y difusión de las técnicas de aplicación del cemento y del concreto</b>. Su misión es promover la utilización óptima del cemento y del concreto para satisfacer las necesidades del mercado con calidad, productividad y oportunidad, contribuyendo a mejorar el desempeño profesional, el desarrollo y beneficio económico de la industria, así como de la sociedad.<br/><br/>El IMCYC surgió en 1923 como un «Comité para Propagar el Uso del Cemento Portland». Ya <b>en 1959 se constituyó como Instituto Mexicano del Cemento y del Concreto, A.C., con el objetivo de investigar y promover métodos constructivos y soluciones técnicas que permitan un uso más económico y racional del concreto en la construcción</b>, para ofrecer el concreto al diseñador, al constructor y al propietario como la alternativa más ventajosa frente al empleo de otros materiales, además de crear más y mejores satisfactores para los asociados y sus clientes.<br/><br/>De este modo, se aportan nuevos conocimientos sobre el cemento y el concreto, y se enseña a trabajarlo con calidad, resolviendo los problemas de aplicación en las obras y orientando a los profesionales en sus múltiples oportunidades de utilización. Así mismo, se fortalecen nuestras estructuras, desarrollando al personal, ampliando nuestra presencia nacional e internacional y haciendo más efectivas y eficientes las operaciones. <b>El IMCYC es imagen, voz y representatividad del Sector Cemento y Concreto ante la sociedad, las autoridades nacionales y entidades internacionales, no estando comprometido con ninguna de las empresas del ramo</b>.</p>
                    </Col>
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