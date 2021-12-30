import { useState } from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link href="/">
            <img src="/logo.svg" alt="Instituto Mexicano del Cemento y del Concreto A.C." title="Instituto Mexicano del Cemento y del Concreto A.C." style={{ 'width': '8em', 'marginRight': '15px' }} />
          </Link>
          <img src="/images/logo_aniversario_blanco.png" alt="Instituto Mexicano del Cemento y del Concreto A.C." title="Instituto Mexicano del Cemento y del Concreto A.C." style={{ 'width': '2.2em', 'marginRight': '5px' }} onClick={handleShow} />
          <Link href="/proveedor-ensayos-de-aptitud">
            <img src="/images/logo15aniversario_blanco.png" alt="Instituto Mexicano del Cemento y del Concreto A.C." title="Instituto Mexicano del Cemento y del Concreto A.C." style={{ 'width': '2.2em', 'marginRight': '5px' }} />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/quienes-somos">somos</Nav.Link>
              <Nav.Link href="/cursos">Cursos</Nav.Link>
              <Nav.Link href="/gerencia-tecnica">Gerencia Técnica</Nav.Link>
              <Nav.Link href="/historia">Historia</Nav.Link>
              <Nav.Link href="/membresias">Membresías</Nav.Link>
              <Nav.Link href="/directorio">Directorio</Nav.Link>
              <Nav.Link href="/tienda-imcyc">Tienda</Nav.Link>
              <Nav.Link href="/ubicacion">Ubicación</Nav.Link>
          </Nav>
          <Form className="buscador" inline="true">
            <FormControl type="text" placeholder="BUSCAR" className="mr-sm-2" />
          </Form>
        </Navbar.Collapse>

        <Offcanvas show={show} onHide={handleClose} placement='bottom' style={{
              'background':'#011c2b',
              'color':'#fff',
              'textAlign':'justify'
            }}>
          <Offcanvas.Body>
            <div className="d-flex align-items-center">
              <img src="/images/logo_aniversario.png" alt="" title="" className="img-fluid" style={{
                'width':'200px',
                'marginRight':'50px'
              }} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus lacus sed odio luctus scelerisque. Nullam in sagittis turpis. Fusce eleifend, lacus eget luctus ultricies, lorem mi mattis ligula, sed auctor tellus urna id lorem. Nulla porta, dui et malesuada facilisis, diam velit volutpat quam, a venenatis ex elit ut sem. Proin vitae ante imperdiet nulla gravida aliquam eget sit amet neque. Sed posuere lectus sit amet nisl laoreet, eget cursus turpis eleifend. Duis quis blandit justo. Sed luctus dui ex, finibus commodo metus hendrerit eu. Etiam quam diam, commodo scelerisque consectetur sit amet, ultrices vel est. Proin mi nisi, dignissim eget dolor vitae, scelerisque eleifend lorem. Vestibulum dapibus pretium consequat.</p>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
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