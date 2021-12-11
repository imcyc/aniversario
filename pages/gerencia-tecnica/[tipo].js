import Layout from "../components/Layout";
import { useRouter } from 'next/router';
import {Container, Col, Row} from 'react-bootstrap';

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
            'subcategoria': 'Agreagdos para concreto',
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
                        <h2 style={{'textTransform':'uppercase'}}>{titulo}</h2>
                    </Row>
                    <Row>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit tristique ligula, sit amet finibus nisi pulvinar sed. Nam nec quam magna. Maecenas vitae posuere risus. Praesent ut augue vestibulum, convallis purus ac, feugiat neque. Sed sit amet posuere neque. Donec at felis convallis ipsum mollis faucibus eu ut est. Maecenas eget euismod dui. Suspendisse eu mi nisl. Sed vitae est enim. Vestibulum tristique auctor ipsum a iaculis. Nunc luctus mauris erat, at posuere dolor gravida eu.</p>
                    </Row>
                </Col>
            </Container>
            
        </Layout>
    )
}