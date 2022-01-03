import Link from 'next/link';
import { Binoculars, Bricks, Building, Calendar2Event, Journal, PersonBoundingBox, Book, Cart2, PersonCircle } from 'react-bootstrap-icons';

export default function Programa() {
  return (
    <>
      <div className="programaeap">
        <h3>PROVEEDOR DE ENSAYOS DE APTITUD 2022</h3>
        <p>El Instituto Mexicano del Cemento y del Concreto A.C. invita a todos los laboratorios interesados a particicar en los programas de ensayos de aptitud que se llevarán acabo durante 2022</p>
        <Link href="">CONSULTAR PROGRAMA DE ENSAYOS DE APTITUD 2022 AQUÍ</Link>
      </div>
      <style jsx>{`
          .programaeap {
            position: fixed;
            top: 70px !important;
            width: 200px;
            background: #222;
            right: 0;
          }
          h3 {
            color: #fff;
            text-align: center;
            font-size: 1rem;
            padding: 10px;
          }
          p {
            color: #fff;
            font-size: 0.5rem;
            text-align: center;
          }
        `}</style>
    </>
  );
}