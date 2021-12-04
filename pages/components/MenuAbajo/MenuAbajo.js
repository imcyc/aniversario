import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Binoculars, Bricks, Building, Calendar2Event, Journal, PersonBoundingBox, Book, Cart2, PersonCircle } from 'react-bootstrap-icons';

export default function MenuAbajo() {
  return (
    <>
      <div className="menuabajo">
        <div className="menuiconos">
        <div className="MenuItem">
            <Link href="">
              <PersonCircle />
            </Link>
            <h2>QUIÉNES SOMOS</h2>
          </div>
          <div className="MenuItem">
            <Link href="">
              <Bricks />
            </Link>
            <h2>GERENCIA TÉCNICA</h2>
          </div>
          <div className="MenuItem">
            <Link href="">
              <Building />
            </Link>
            <h2>CURSOS</h2>
          </div>
          <div className="MenuItem">
            <Link href="">
              <Calendar2Event />
            </Link>
            <h2>EVENTOS</h2>
          </div>
          <div className="MenuItem">
            <Link href="">
              <Journal />
            </Link>
            <h2>CERTIFICACIONES</h2>
          </div>
          <div className="MenuItem">
            <Link href="">
              <PersonBoundingBox />
            </Link>
            <h2>OCP</h2>
          </div>
          <div className="MenuItem">
            <Link href="">
              <Book />
            </Link>
            <h2>BIBLIOTECA</h2>
          </div>
          <div className="MenuItem">
            <Link href="/tienda-imcyc">
              <Cart2 />
            </Link>
            <h2>TIENDA</h2>
          </div>
        </div>
      </div>
      <style jsx>{`
          .menuabajo {
            position: fixed;
            botton: 0 !important;
          }
          .h2 {
            width: 100%;
            margin-top: 20px;
          }
        `}</style>
    </>
  );
}