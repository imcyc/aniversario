import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function Aniversario(){
  return(
    <Container className="aniversaio-badges">
      <Row>
        <Col md={3}>
          <Link href="/">
            <img src="/images/logo_aniversario.png" alt="" title="" className="img-fluid"/>
          </Link>
        </Col>
        <Col md={3}>
          <Link href="/">
            <img src="/images/logo15aniversario.svg" alt="" title="" className="img-fluid"/>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}