import Layout from "../components/Layout";
import { useRouter } from 'next/router';
import {Container, Col, Row} from 'react-bootstrap';
import { ArrowRightCircle } from "react-bootstrap-icons";

export default function Tipo(){
    const router = useRouter();
    const { tipo } = router.query;
    let titulo = tipo;
    if(tipo){
        titulo = tipo.replace("-", " ");
    }
    const informes = [
        {
            'categoria': 'concreto',
            'personas': [
                {
                    'nombre': 'Ing. Mario Alberto Hernández Hernández',
                    'puesto': 'Gerente Técnico',
                    'mail': 'mhernandez@mail.imcyc.com',
                    'telefono': '5276-7200 Ext.121'
                },
                {
                    'nombre': 'Ing. Héctor Germán López Andraca',
                    'puesto': 'Coordinador del Laboratorio de Concreto',
                    'mail': 'hlopez@mail.imcyc.com',
                    'telefono': '5276-7200 Ext.152'
                }
            ],
            'acreditaciones': [
                {
                    'nombre': 'Entidad Mexicana de Acreditación, A.C. (EMA)',
                    'acreditacion': 'No. C-053-039/11',
                    'vigencia': 'Vigente a partir del: 2011-03-24',
                    'norma': '(NMX-EC-17025-IMNC-2006)(CONSTRUCCIÓN)'
                },
                {
                    'nombre': 'Entidad Mexicana de Acreditación, A.C. (EMA)',
                    'acreditacion': 'No. MM-0227-020/10',
                    'vigencia': 'Vigente a partir del: 2013-12-11',
                    'norma': '(NMX-EC-17025-IMNC-2006)(METAL MECÁNICA)'
                }
            ]
        }
    ]
    const sectores = [
        {
            'categoria': 'concreto',
            'subcategoria': 'Agregados para concreto',
            'descripcion': 'Pruebas físicas de muestra de grava o arena. Incluye: granulometría, masa específica, absorción, masas volumétricas suelta y varillada, materia orgánica y pérdida por lavado.',
            'lista': ['Prueba de abrasión, máquina de los Ángeles (NMX-C-196-ONNCCE-2010)','Límites de consistencia y contracción lineal (NMX-C-416-ONNCCE-2003)','Equivalente de arena (NMX-C-416-ONNCCE-2003)','Coeficiente de forma (NMX-C-436-ONNCCE-2004)','Partículas planas y alargadas (ASTM-D-4791-99)','Efecto de materia orgánica (NMX-C-088-1997-ONNCCE)'],
            'determinacion': 'DETERMINACIÓN DE PROPIEDADES FÍSICAS DE AGREGADOS (NMX-C-030-ONNCCE-2004, NMX-C-073-ONNCCE-2004, NMX-C-077-1997-ONNCCE, NMX-C-084-ONNCCE-2006, NMX-C-088-1997-ONNCCE, NMX-C-164-ONNCCE-2002, NMX-C-165-ONNCCE-2004, NMX-C-166-ONNCCE-2006, NMX-C-170-1997-ONNCCE)'
        },
        {
            'categoria': 'concreto',
            'subcategoria': 'Ensayes al concreto en estado fresco',
            'descripcion': 'Ensayes al concreto en estado fresco.',
            'lista': ['Determinación del revenimiento (NMX-C-156-ONNCCE-2010)','Determinación de la masa unitaria (NMX-C-162-ONNCCE-2010)','Determinación del contenido de aire (NMX-C-157-ONNCCE-2006)','Elaboración de especímenes cilíndricos y prismáticos (NMX-C-160-ONNCCE-2004)']
        },
        {
            'categoria': 'concreto',
            'subcategoria': 'Ensayes al concreto en estado endurecido',
            'descripcion': 'Ensayes al concreto en estado endurecido.',
            'lista': ['Determinación de la resistencia a la compresión de cilindros de concreto (NMX-C-083-ONNCCE-2002)','Estudio petrográfico en muestras de concreto endurecido (ASTM-C-856-04)','Módulo de elasticidad con extensómetro (NMX-C-128-1997-ONNCCE)','Módulo de elasticidad con strain-gages (NMX-C-128-1997-ONNCCE)','Determinación de la contracción por secado en barras de concreto (NMX-C-173-ONNCCE-2010)','Determinación del coeficiente de deformación diferida (ASTM-C-512-02)','Ensaye a la flexión de vigas de concreto (NMX-C-191-ONNCCE-2004)','Resistencia a la tensión por compresión diametral de cilindros de concreto (NMX-C-163-1997-ONNCCE)','Determinación del contenido de cemento en muestras de concreto endurecido (ASTM-C-1084-02)','"Prueba para determinar la adherencia de las capas superficiales del concreto utilizando el dispositivo conocido como ""Pull off"" (ASTM-C-1583-04)"','Pruebas de permeabilidad al agua ( UNE-EN-12390-8)']
        },
        {
            'categoria': 'concreto',
            'subcategoria': 'Pruebas no destructivas',
            'descripcion': 'Pruebas no destructivas.',
            'lista': ['"Determinación del índice de rebote utilizando el dispositivo conocido como esclerómetro (NMX-C-192-ONNCCE-2006)"','Determinación de la velocidad de pulso; método del ultrasonido (NMX-C-275-ONNCCE-2004)','Localización del acero de refuerzo en trabes, columnas y losas utilizando un detector de acero de refuerzo (Pachómetro)','Instrumentación de pruebas de carga en elementos estructurales horizontales (trabes y losas) de acuerdo al Capítulo XI Art. 239 y 240 del Reglamento de Construcciones del D.F.']
        }
    ]
    return(
        <Layout>
            <Container fluid={true}>
                <Col className="gerencia secciones">
                    <Row className="text-left">
                        <Col xs={4}>
                            {informes.filter(tipo => tipo.categoria === titulo).map((tip, i) => (
                                <div className="p-0 m-0 labteam" key={i}>
                                    <h4 style={{'textTransform':'uppercase'}}>{tip.nombre}</h4>
                                    <ul className="list-style-none">
                                        {tip.personas.map((lit, i) => (
                                            <li key={i}>
                                                <h4><ArrowRightCircle/> {lit.nombre}</h4>
                                                <h6>{lit.puesto}</h6>
                                                <p>{lit.mail}</p>
                                                <p>{lit.telefono}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </Col>
                        <Col>
                            {sectores.filter(tipo => tipo.categoria === titulo).map((tip, i) => (
                                <div className="p-0 m-0" key={i}>
                                    {/*<h4>{tip.categoria}</h4>*/}
                                    <h2 style={{'textTransform':'uppercase'}}><ArrowRightCircle/> {tip.subcategoria}</h2>
                                    <p className="text-justify">{tip.descripcion}</p>
                                    <ul>
                                        {tip.lista.map((lit, i) => (
                                            <li key={i}>{lit}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Col>
            </Container>
            
        </Layout>
    )
}