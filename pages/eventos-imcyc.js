import LayoutCursos from "./components/LayoutCursos";
import Bkg from "./components/Bkg";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function eventosImcyc(){
  return(
    <LayoutCursos>
      <div className="net">
        <h2 className="dirtit">EVENTOS IMCYC</h2>
        <Carousel
          responsive={responsive}>
            <div className="card net">
              aaaa
            </div>
            <div className="card net"><h1>HOLA</h1></div>
            <div className="card net"><h1>HOLA</h1></div>
            <div className="card net"><h1>HOLA</h1></div>
        </Carousel>
        <h2 className="dirtit">EVENTOS IMCYC</h2>
        <Carousel
          responsive={responsive}>
            <div className="card net"><h1>HOLA</h1></div>
            <div className="card net"><h1>HOLA</h1></div>
            <div className="card net"><h1>HOLA</h1></div>
            <div className="card net"><h1>HOLA</h1></div>
        </Carousel>
      </div>
    </LayoutCursos>
  )
}