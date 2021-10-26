import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export default function Header(){
    return (
      <>
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img src="/logo.svg" alt="" title="" style={{'width':'8em'}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Quiénes Somos</Nav.Link>
              <Nav.Link href="#features">Cursos</Nav.Link>
              <Nav.Link href="#pricing">Gerencia Técnica</Nav.Link>
              <Nav.Link href="#pricing">Historia</Nav.Link>
              <Nav.Link href="#pricing">Membresías</Nav.Link>
              <Nav.Link href="#pricing">Directorio</Nav.Link>
              <Nav.Link href="#pricing">Tienda</Nav.Link>
              <Nav.Link href="#pricing">Ubicación</Nav.Link>
            </Nav>
            <Form className="buscador" inline>
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