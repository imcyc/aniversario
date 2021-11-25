import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CardProducto({titulo, descripcion, autor, precio, imagen}){
  return(
    <Card>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          <h4>$ {precio}.00</h4>
          <div dangerouslySetInnerHTML={{ __html: descripcion }} />
          <p className="autor">{autor}</p>
        </Card.Text>
        <Button variant="primary">COMPRAR AQUÍ</Button>
      </Card.Body>
    </Card>
  )
}