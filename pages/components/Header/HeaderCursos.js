import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export default function HeaderGerencia(){
    return (
      <>
        <Navbar expand="lg" className="header-gerencia">
          <Navbar.Brand>
            <Link href="/">
              <img src="/logo.svg" alt="" title="" style={{'width':'8em'}} />
            </Link>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="mr-auto">
              <Nav.Link href="/quienes-somos"></Nav.Link>
              {/* 
              <Nav.Link href="/gerencia-tecnica/concreto" style={{'color':'#333'}}>Concreto</Nav.Link>
              <Nav.Link href="/gerencia-tecnica/cemento">Cemento</Nav.Link>
              <Nav.Link href="/gerencia-tecnica/metrologia">Metrología</Nav.Link>
              <Nav.Link href="/gerencia-tecnica/asesorias-tecnicas">Asesorías Técnicas</Nav.Link>
              <Nav.Link href="/gerencia-tecnica/sistemas-de-calidad">Sistemas de calidad</Nav.Link>
              <Nav.Link href="/gerencia-tecnica/ensayos de aptitud">Ensayos de aptitud</Nav.Link>
              <Nav.Link href="/gerencia-tecnica/ocp">OCP</Nav.Link>
              */}
            </Nav>
            
            <Form className="buscador" inline="true">
              <FormControl type="text" placeholder="BUSCAR" className="mr-sm-2" />
            </Form>
          </Navbar.Collapse>
          
        </Navbar>
        <style jsx>{`
          .navbar {
            width: 100%;
            margin-top: 20px;
          }
          .bg-dark {
            background-color: transparent !important;
          }
          .navbar-light .navbar-nav .nav-link {
            color: #ffffff !important;
            font-size: 0.6em;
            transition: all 1s;
            text-transform: uppercase;
          }
          .navbar-light .navbar-nav .nav-link:hover {
            background: #006380;
            color: #ffffff !important;
          }
          .form-control {
            font-size: 0.7em !important;
            background-color: rgba(255,255,255,0.7) !important;
          }
          .btn {
            font-size: 0.7em !important;
          }
          .navbar-collapse {
            justify-content: space-between;
          }
          .navbar-light .navbar-nav .nav-link {
            color: #fff;
          }
        `}</style>
      </>
    );
}