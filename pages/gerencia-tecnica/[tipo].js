import Layout from "../components/Layout";
import { useRouter } from 'next/router';
import {Container, Col, Row} from 'react-bootstrap';
import { BoxArrowRight } from "react-bootstrap-icons";

export default function Tipo(){
    const router = useRouter();
    const { tipo } = router.query;
    let titulo = tipo;
    if(tipo){
        titulo = tipo.replace("-", " ");
    }
    const sectores = [
        {
            'categoria': 'concreto',
            'subcategoria': 'Agregados para concreto',
            'descripcion': 'Pruebas físicas de muestra de grava o arena. Incluye: granulometría, masa específica, absorción, masas volumétricas suelta y varillada, materia orgánica y pérdida por lavado.',
            'lista': ['Prueba de abrasión, máquina de los Ángeles (NMX-C-196-ONNCCE-2010)','Límites de consistencia y contracción lineal (NMX-C-416-ONNCCE-2003)','Equivalente de arena (NMX-C-416-ONNCCE-2003)','Coeficiente de forma (NMX-C-436-ONNCCE-2004)','Partículas planas y alargadas (ASTM-D-4791-99)','Efecto de materia orgánica (NMX-C-088-1997-ONNCCE)'],
            'determinacion': 'DETERMINACIÓN DE PROPIEDADES FÍSICAS DE AGREGADOS (NMX-C-030-ONNCCE-2004, NMX-C-073-ONNCCE-2004, NMX-C-077-1997-ONNCCE, NMX-C-084-ONNCCE-2006, NMX-C-088-1997-ONNCCE, NMX-C-164-ONNCCE-2002, NMX-C-165-ONNCCE-2004, NMX-C-166-ONNCCE-2006, NMX-C-170-1997-ONNCCE)'
        }
    ]
    return(
        <Layout>
            <Container>
                <Col className="gerencia">
                    <Row>
                        
                    </Row>
                    <Row className="text-left">
                        {sectores.filter(tipo => tipo.categoria === titulo).map((tip, i) => (
                            <div key={i}>
                                <h4>{tip.categoria}</h4>
                                <h2 style={{'textTransform':'uppercase'}}><BoxArrowRight /> {tip.subcategoria}</h2>
                                <p className="text-justify">{tip.descripcion}</p>
                                <ul>
                                    {tip.lista.map((lit, i) => (
                                        <li key={i}>{lit}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </Row>
                </Col>
            </Container>
            
        </Layout>
    )
}