import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Bricks, Building, Calendar2Event, Journal, PersonBoundingBox, Book, Cart2, PersonCircle } from 'react-bootstrap-icons';

export default function MenuAbajo() {
  const router = useRouter();
  const [abajo, setAbajo] = useState('block');
  useEffect(() => {
    window.onscroll = function(ev) {
      const bottom = window.scrollHeight - window.scrollTop === document.clientHeight;
      if (bottom) {
        setAbajo('none');
      } else {
        setAbajo('block');
      }
    };
  })
  
  let menucolor = "#fff";
  let posicion = "fixed";
  let back = "#fff";
  if(router.pathname === "/" || router.pathname === "/quienes-somos"){
    back = "transparent"
  }
  if(router.pathname === "/gerencia-tecnica/[tipo]" || router.pathname === "/cursos" || router.pathname === "/gerencia-tecnica" || router.pathname === "/eventos-imcyc"){
    menucolor = "#016380"
  }
  if(router.pathname === "/ocp"){
    posicion = "relative",
    menucolor = "#fff",
    back = "#080E2E"
  }
  return (
    <>
      <div className="menuabajo" style={{'display': abajo, 'position': posicion, 'background': back}}>
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
            <Link href="/ocp">
              <a>
                <PersonBoundingBox color={menucolor} />
                <h2 style={{'color': menucolor}}>OCP</h2>
              </a>
            </Link>
          </div>
          <div className="MenuItem">
            <Link href="/eventos-imcyc">
              <a>
                <Calendar2Event color={menucolor} />
                <h2 style={{'color': menucolor}}>EVENTOS</h2>
              </a>
            </Link>
          </div>
          {/* 
          <div className="MenuItem">
            <Link href="/certificaciones">
              <a>
                <Journal color={menucolor} />
                <h2 style={{'color': menucolor}}>CERTIFICACIONES</h2>
              </a>
            </Link>
          </div>
          */}
          <div className="MenuItem">
            <Link href="/tienda-imcyc">
              <a>
                <Book color={menucolor} />
                <h2 style={{'color': menucolor}}>WEBINARS</h2>
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