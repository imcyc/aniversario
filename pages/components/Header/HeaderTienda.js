import { useState } from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CartFill, PersonCircle } from "react-bootstrap-icons";

export default function HeaderTienda({buscador}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const functionHandler = (e) => {
    buscador(e.target.value);
  }
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link href="/">
            <img src="/logo.svg" alt="Instituto Mexicano del Cemento y del Concreto A.C." title="Instituto Mexicano del Cemento y del Concreto A.C." style={{ 'width': '8em', 'marginRight': '15px' }} />
          </Link>
          <img src="/images/logo_aniversario.png" alt="Instituto Mexicano del Cemento y del Concreto A.C." title="Instituto Mexicano del Cemento y del Concreto A.C." style={{ 'width': '2em', 'marginRight': '15px' }} onClick={handleShow} />
          <Link href="/proveedor-ensayos-de-aptitud">
            <img src="/images/logo15aniversario.svg" alt="Instituto Mexicano del Cemento y del Concreto A.C." title="Instituto Mexicano del Cemento y del Concreto A.C." style={{ 'width': '2em', 'marginRight': '15px' }} />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='header-tienda'>
          <Nav className="mr-auto">
            <Nav.Link href="/quienes-somos"></Nav.Link>
            
              <Nav.Link href="/cursos">Cursos</Nav.Link>
              <Nav.Link href="/gerencia-tecnica">Gerencia Técnica</Nav.Link>
              <Nav.Link href="/historia">Historia</Nav.Link>
              <Nav.Link href="/membresias">Membresías</Nav.Link>
              <Nav.Link href="/directorio">Directorio</Nav.Link>
              <Nav.Link href="/tienda-imcyc">Tienda</Nav.Link>
              <Nav.Link href="/ubicacion">Ubicación</Nav.Link>
          
          </Nav>
          <div className='d-flex align-items-center carritoprod'>
            <Form className="buscador" inline="true">
              <FormControl type="text" placeholder="BUSCAR PRODUCTO" className="mr-sm-2" onChange={(e) => functionHandler(e)} />
            </Form>
            <PersonCircle />
            <CartFill />
          </div>
        </Navbar.Collapse>

        <Offcanvas show={show} onHide={handleClose} placement='bottom'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
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