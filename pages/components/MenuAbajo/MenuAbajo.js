import Link from 'next/link';
import { useRouter } from 'next/router';
import { Bricks, Building, Calendar2Event, Journal, PersonBoundingBox, Book, Cart2, PersonCircle } from 'react-bootstrap-icons';

export default function MenuAbajo() {
  const router = useRouter();
  console.log(router);
  let menucolor = "#fff";
  if(router.pathname === "/gerencia-tecnica/[tipo]"){
    menucolor = "#333"
  }
  return (
    <>
      <div className="menuabajo">
        <div className="menuiconos">
        <div className="MenuItem">
            <Link href="/quienes-somos">
              <a>
                <PersonCircle color={menucolor} />
                <h2 style={{'color': menucolor}}>QUIÉNES SOMOS</h2>
              </a>
            </Link>
          </div>
          <div className="MenuItem">
            <Link href="/cursos">
              <a>
                <Building color={menucolor} />
                <h2 style={{'color': menucolor}}>CURSOS</h2>
              </a>
            </Link>
          </div>
          <div className="MenuItem">
            <Link href="/gerencia-tecnica">
              <a>
                <Bricks color={menucolor} />
                <h2 style={{'color': menucolor}}>GERENCIA TÉCNICA</h2>
              </a>
            </Link>
          </div>
          <div className="MenuItem">
            <Link href="/directorio">
              <a>
                <Calendar2Event color={menucolor} />
                <h2 style={{'color': menucolor}}>EVENTOS</h2>
              </a>
            </Link>
          </div>
          <div className="MenuItem">
            <Link href="/certificaciones">
              <a>
                <Journal color={menucolor} />
                <h2 style={{'color': menucolor}}>CERTIFICACIONES</h2>
              </a>
            </Link>
          </div>
          <div className="MenuItem">
            <Link href="/ocp">
              <a>
                <PersonBoundingBox color={menucolor} />
                <h2 style={{'color': menucolor}}>OCP</h2>
              </a>
            </Link>
          </div>
          <div className="MenuItem">
            <Link href="/tienda-imcyc">
              <a>
                <Book color={menucolor} />
                <h2 style={{'color': menucolor}}>BIBLIOTECA</h2>
              </a>
            </Link>
          </div>
          <div className="MenuItem">
            <Link href="/tienda-imcyc">
              <a>
                <Cart2 color={menucolor} />
                <h2 style={{'color': menucolor}}>TIENDA</h2>
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