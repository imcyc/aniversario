import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NumberFormat from 'react-number-format';

export default function CardProducto({titulo, descripcion, autor, precio, imagen}){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const pago = () => {

  }

  return(
    <>
    <Card>
      <div className='imgproducto' onClick={handleShow}>
        <Card.Img variant="top" src={imagen} />
      </div>
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          <h4><NumberFormat value={precio} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
          {/*<div dangerouslySetInnerHTML={{ __html: descripcion }} />*/}
          <p className="autor">{autor}</p>
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>VER DETALLES</Button>
      </Card.Body>
    </Card>

    <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body className='detalleProdu'>
          <img src={imagen} alt={titulo} title={titulo} className='img-fluid' />
          <Offcanvas.Title className='mt-3'>{titulo}</Offcanvas.Title>
          <hr/>
          <h4><NumberFormat value={precio} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
          <hr/>
          <div dangerouslySetInnerHTML={{ __html: descripcion }} />
          <Button variant="primary" onClick={pago}>COMPRAR AHORA</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}