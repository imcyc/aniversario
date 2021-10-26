import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function Header(){
    return (
      <>
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img src="/logo.svg" alt="" title="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Quiénes Somos</Nav.Link>
                <Nav.Link href="#features">Cursos</Nav.Link>
                <Nav.Link href="#pricing">Gerencia Técnica</Nav.Link>
                <Nav.Link href="#pricing">Historia</Nav.Link>
                <Nav.Link href="#pricing">Membresías</Nav.Link>
                <Nav.Link href="#pricing">APPS</Nav.Link>
                <Nav.Link href="#pricing">Directorio</Nav.Link>
                <Nav.Link href="#pricing">Tienda</Nav.Link>
                <Nav.Link href="#pricing">Ubicación</Nav.Link>
              </Nav>
            <Form inline>
              <FormControl type="text" placeholder="BUSCAR" className="mr-sm-2" />
              <Button variant="outline-dark">BUSCAR</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
}