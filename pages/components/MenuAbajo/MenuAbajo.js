import Link from 'next/link';
import { Bricks, Building, Calendar2Event, Journal, PersonBoundingBox, Book, Cart2, PersonCircle } from 'react-bootstrap-icons';

export default function MenuAbajo() {
  return (
    <>
      <div className="menuabajo">
        <div className="menuiconos">
        <div className="MenuItem">
            <Link href="/quienes-somos">
              <a>
                <PersonCircle />
                <h2>QUIÉNES SOMOS</h2>
              </a>
            </Link>
          </div>
          <div className="MenuItem">
            <Link href="/gerencia-tecnica">
              <a>
                <Bricks />
                <h2>GERENCIA TÉCNICA</h2>
              </a>
            </Link>
          </div>
          <div className="MenuItem">
            <Link href="/cursos">
              <a>
                <Building />
                <h2>CURSOS</h2>
              </a>
            </Link>
          </div>
          <div className="MenuItem">
            <Link href="/directorio">
              <a>
                <Calendar2Event />
                <h2>EVENTOS</h2>
              </a>
            </Link>
          </div>
          <div className="MenuItem">
            <Link href="/certificaciones">
              <a>
                <Journal />
                <h2>CERTIFICACIONES</h2>
              </a>
            </Link>
          </div>
          <div className="MenuItem">
            <Link href="/membresias">
              <a>
                <PersonBoundingBox />
                <h2>OCP</h2>
              </a>
            </Link>
          </div>
          <div className="MenuItem">
            <Link href="/tienda-imcyc">
              <a>
                <Book />
                <h2>BIBLIOTECA</h2>
              </a>
            </Link>
          </div>
          <div className="MenuItem">
            <Link href="/tienda-imcyc">
              <a>
                <Cart2 />
                <h2>TIENDA</h2>
              </a>
            </Link>
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