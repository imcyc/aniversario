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
        },
        {
            'categoria': 'cemento',
            'personas': [
                {
                    'nombre': 'Ing. Mario Alberto Hernández Hernández',
                    'puesto': 'Gerente Técnico',
                    'mail': 'mhernandez@mail.imcyc.com',
                    'telefono': '5276-7200 Ext.121'
                },
                {
                    'nombre': 'Ing. Marco A. Gómez Solano',
                    'puesto': 'Coordinador del Laboratorio de Cemento',
                    'mail': 'mgomez@mail.imcyc.com',
                    'telefono': '5276-7200 Ext.116'
                }
            ],
            'acreditaciones': [
                {
                    'nombre': 'Entidad Mexicana de Acreditación, A.C. (EMA)',
                    'acreditacion': 'No. C-053-039/11',
                    'vigencia': 'Vigente a partir del: 2011-03-24',
                    'norma': '(NMX-EC-17025-IMNC-2018)(CONSTRUCCIÓN)'
                }
            ]
        },
        {
            'categoria': 'metrologia',
            'personas': [
                {
                    'nombre': 'Ing. Vicente Gómez Bezares',
                    'puesto': 'Jefe de Laboratorio de Calibración',
                    'mail': 'vgomez@mail.imcyc.com',
                    'telefono': '5276-7200 Ext.131'
                }
            ],
            'acreditaciones': [
                {
                    'nombre': 'Entidad Mexicana de Acreditación, A.C. (EMA)',
                    'acreditacion': 'No. C-053-039/11',
                    'vigencia': 'Vigente a partir del: 2011-03-24',
                    'norma': '(NMX-EC-17025-IMNC-2018)(CONSTRUCCIÓN)'
                }
            ]
        },
        {
            'categoria': 'asesorias tecnicas',
            'personas': [
                {
                    'nombre': 'Ing. Benito Pérez Alto',
                    'puesto': 'Asistente de Asesorías Técnicas en Estructuras',
                    'mail': 'bperez@mail.imcyc.com',
                    'telefono': '(01 55) 5276 7200 Ext.110'
                }
            ],
            'acreditaciones': []
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
        },
        {
            'categoria': 'cemento',
            'subcategoria': 'Laboratorio de cemento',
            'descripcion': 'Laboratorio de cemento.',
            'lista': ['Análisis físico-químico de cemento. En conformidad con NMX C 414, ASTM C 150, C 595, C 1157 en vigor','Análisis físico-químico de cal hidratada. En conformidad con la Norma NMX C 005, ASTM C 141 en vigor','Análisis físico-químico de puzolanas. En conformidad con ASTM C 618 en vigor','Análisis químico de minerales no metálicos (arcilla, calizas, yesos, puzolanas etc). En conformidad con NMX C 131 y ASTM C 114 en vigor','Determinación de las propiedades físicas de morteros de cemento. En conformidad con NMX C 21 y ASTM C 91 en vigor','Análisis petrográficos de minerales no metálicos, rocas y agregados. En conformidad con ASTM C 295 en vigor','Análisis físico-químico de agua. En conformidad con NMX C 122 en vigor','Análisis físico-químico de yeso. En Conformidad con ASTM C 473 y C 472 en vigor','Análisis físico-químico de grout. En conformidad con CDR, en vigor','Análisis físico de adhesivos. En conformidad con NMX-C-420-ONNCCE, en vigor y con ANSI A 118., ANSI A 118. 4 Y ANSI A 118. 6','Determinación del calor de hidratación de cemento. En conformidad con NMX C 151 y ASTM C 186 en vigor','Determinación del contenido de cemento en muestras de concreto endurecido en conformidad con NMX C 154 y ASTM C 1084 en vigor','Determinación del índice de actividad de las adiciones en conformidad con NMX C 273 en vigor','Determinación de la retención de la humedad por medio de compuestos líquidos que forman membrana para el curado de concreto','En conformidad con ASTM C 156 y C 309 en vigor']
        },
        {
            'categoria': 'metrologia',
            'subcategoria': 'Calibración de máquinas uniaxiales',
            'descripcion': 'Calibración de máquinas uniaxiales.',
            'lista': ['Ensaye a compresión (cilindros, vigas y núcleos de concreto, cubos de mortero, prefabricados, etc)','Prueba de VRS y Marshall','Prueba Porter','Máquinas Universales','Máquinas de Ensaye de acero, cartón, etc.']
        },
        {
            'categoria': 'metrologia',
            'subcategoria': 'Calibración de dispositivos probadores de fuerza',
            'descripcion': 'Calibración de dispositivos probadores de fuerza.',
            'lista': ['Celdas de Carga','Anillos de Carga','Gatos Hidráulicos']
        },
        {
            'categoria': 'metrologia',
            'subcategoria': 'Mantenimiento preventivo',
            'descripcion': 'El mantenimiento preventivo es una actividad programada de inspecciones, tanto de funcionamiento como de seguridad, ajustes, reparaciones, limpieza, lubricación, calibración, que deben llevarse a cabo en forma periódica en base a un plan establecido. El propósito es prever averías o desperfectos en su estado inicial y corregirlas para mantener la instalación en completa operación a los niveles y eficiencia óptimos.',
            'lista': ['Limpieza general','Lubricación','Cambio de aceite','Ajuste','Reparaciones','Cambio de refacciones','Cumplimientos con normatividad']
        },
        {
            'categoria': 'metrologia',
            'subcategoria': 'Calibración de instrumentos para pesar de funcionamiento no automático de bajo alcance de medición',
            'descripcion': 'Algunos aspectos importantes que se deben conocer son:',
            'lista': ['La calibración nos permite determinar las desviaciones (errores) de indicación del instrumento para pesar con respecto al valor verdadero','Nuestro Alcance para la Calibración de Instrumentos para pesar es hasta 200 kg, estos instrumentos pueden ser: balanzas electrónicas, mecánicas, analíticas, microbalanzas, basculas de plataforma, etc. El servicio se realiza en el sitio donde se encuentre instalado el instrumento para pesar por ejemplo en Plantas de Concreto, Cemento, Laboratorios fijos, Laboratorios Móviles, Obras en desarrollo, Industrias Manufactureras, etc','Contamos con Juegos de pesas patrón Clase E2, F1 y M1','Se debe asegurar que el intervalo de calibración del instrumento para pesar cubra el intervalo de mediciones generalmente usado en las pruebas asegurando así la trazabilidad','Los periodos de calibración, son establecidos de acuerdo al sistema de confirmación metrológica, pero es importante considerar la calibración cuando se realizan reparaciones, mantenimiento, cuando se cambia de ubicación el instrumento para pesar o se tienen dudas en los resultados obtenidos']
        },
        {
            'categoria': 'asesorias tecnicas',
            'subcategoria': 'Asesorías técnicas en estructuras',
            'descripcion': 'Antecedentes:',
            'lista': ['La solución de los problemas técnicos complejos que se pueden presentar durante la ejecución o durante la vida útil de las obras civiles, así como los estudios de evaluación y/o rehabilitación de las estructuras requieren del apoyo de especialistas en diversos campos de la ingeniería civil','El dominio de las Estructuras es muy variado, amplio y complejo, para ello el IMCYC le ofrece los servicios de asesoría más completos, que puedan brindarle, un mejor apoyo dentro de este campo de la Ingeniería Civil','Los alcances cubren desde la estructura más simple como puede ser una viga, una losa o una columna hasta estructuras complejas como son: edificios de oficinas, residenciales, escolares, industriales y de estacionamientos; silos; torres de enfriamiento; tanques subterráneos, superficiales y elevados; puentes peatonales, carreteros y urbanos; naves y pisos industriales; así como túneles','Estos servicios pueden regirse en sus diferentes niveles de cálculo (análisis, diseño, revisión, evaluación) conforme a los Reglamentos vigentes en cada uno de los Estados de la República Mexicana, así como a otras normativas análogas: ACI 318, Normas AASHTO, Eurocódigos, UBC, etc','EL IMCYC ofrece para obras de concreto (armado o presforzado), mixtas (acero estructural-concreto), mampostería y acero estructural los siguientes servicios']
        },
        {
            'categoria': 'asesorias tecnicas',
            'subcategoria': '',
            'descripcion': 'Servicios:',
            'lista': ['DICTAMEN O INFORME TÉCNICO EN ESTABILIDAD Y SEGURIDAD ESTRUCTURAL','PERITAJES Y TERCERÍAS','DESARROLLO, INTERPRETACIÓN Y EVALUACIÓN DE PRUEBAS, DESTRUCTIVAS, SEMIDESTRUCTIVAS','ASESORÍAS Y CAPACITACIÓN EN TEMAS DE PATOLOGÍAS, REPRESENTACIÓN Y PRUEBAS','DICTAMEN O INFORME TÉCNICO EN DURABILIDAD DE CONSTRUCCIÓN','VISITAS DE INSPECCIÓN Y ASESORÍAS TÉCNICAS','SERVICIOS DE AUSCULTACIÓN DEL ACERO DE REFUERZO EN ELEMENTOS DE CONCRETO REFORZADO','REVISIÓN ESTRUCTURAL','ELABORACIÓN DE PROYECTOS ESTRUCTURALES','INSPECCIÓN Y LEVANTAMIENTO CUALITATIVO DE DAÑOS']
        },
        {
            'categoria': 'asesorias tecnicas',
            'subcategoria': '',
            'descripcion': 'Nuestros clientes:',
            'lista': ['']
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
                            {sectores.filter(tipo => tipo.categoria == titulo).map((tip, i) => (
                                <div className="p-0 m-0 labitems" key={i}>
                                    <h2 style={{'textTransform':'uppercase'}}>{tip.subcategoria}</h2>
                                    <hr/>
                                    <p className="text-justify">{tip.descripcion}</p>
                                    <ul className="pruebas">
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