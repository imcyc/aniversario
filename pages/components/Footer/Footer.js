import Image from 'next/image';

import { Container, Row, Col } from 'react-bootstrap';

export default function Footer(){
  return(
    <div className="Footer">
        <Container className="d-flex justify-content-center patrocinios">
          <Row>
            <Col>
              <img src="/images/asociados/logo_cemex.svg" alt="" title="" style={{'width':'70px'}} />
            </Col>
            <Col>
              <img src="/images/asociados/logo_moctezuma.svg" alt="" title="" style={{'width':'90px'}} />
            </Col>
            <Col>
              <img src="/images/asociados/logo_fortaleza.svg" alt="" title="" style={{'width':'50px'}} />
            </Col>
            <Col>
              <img src="/images/asociados/logo_chihuahua.svg" alt="" title="" style={{'width':'70px'}} />
            </Col>
            <Col>
              <img src="/images/asociados/logo_holcim.svg" alt="" title="" style={{'width':'70px'}} />
            </Col>
            <Col>
              <img src="/images/asociados/logo_cruzazul.svg" alt="" title="" style={{'width':'70px'}} />
            </Col>
          </Row>
        </Container>
        <h2><b>Instituto Mexicano del Cemento y del Concreto A.C.</b><br/>Av. Insurgentes Sur # 1846 Col. Florida, C.P. 01030, México, CDMX. | (55) 5322 5740 | <b>imcyc@imcyc.com</b></h2>
        <style jsx>{`
          .Footer {
            width: 100%;
            text-align: center;
            background: #fff;
            padding-top:20px;
            z-index:1000000000000;
          }
          .patrocinios {
            background: #fff;
          }
          .Footer h2 {
            font-weight: 100;
            font-size: 0.9em;
            color: #333;
            margin: 0;
            padding: 10px 0;
          }
        `}</style>
    </div>
  )
}