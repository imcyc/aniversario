import Image from 'next/image';

import { Container, Row, Col } from 'react-bootstrap';

export default function Footer(){
  return(
    <div className="Footer">
        <Container className="d-flex justify-content-center">
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
        <h2><b>Instituto Mexicano del Cemento y del Concreto A.C.</b><br/>Av. Insurgentes Sur # 1846 Col. Florida, C.P. 01030, México, CDMX. (55) 5322 5740 imcyc@imcyc.com</h2>
        <style jsx>{`
          .Footer {
            width: 100%;
            text-align: center;
            position: fixed;
            bottom: 0;
            z-index: 1000;
          }
          .Footer h2 {
            font-weight: 100;
            font-size: 0.7em;
            padding: 10px;
            color: #ffffff;
          }
        `}</style>
    </div>
  )
}