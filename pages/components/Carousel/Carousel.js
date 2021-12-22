import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';

export default function InicioCarousel(){
    return (
      <>
      
      <Carousel 
        indicators={false} 
        fade={true} 
        controls={false}
      >
        <Carousel.Item interval={5000}>
          <div className='filtrocarousel'></div>
          <h3 className="videobanner">Instituto Mexicano del Cemento y del Concreto A.C.</h3>
          <h2 className="videobanner">Compartir el Conocimiento</h2>
          <img
            className="d-block w-100 min-vh-100"
            src="/images/bkg19.jpg"
            alt="Third slide"
            style={{'zIndex':'1'}}
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          {/* 
          <video id='background-video' autoPlay loop muted>
            <source src='/videos/video8.mp4' type='/video/mp4' />
            <source src='/videos/video8.mp4' type="video/ogg" /> 
          </video>
          */}
          <div className='filtrocarousel'></div>
          <h3 className="videobanner">Instituto Mexicano del Cemento y del Concreto A.C.</h3>
          <h2 className="videobanner">Cursos y Certificaciones</h2>
          
          <img
            className="d-block w-100 min-vh-100"
            src="/images/bkg20.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className='filtrocarousel'></div>
          <h3 className="videobanner">Instituto Mexicano del Cemento y del Concreto A.C.</h3>
          <h2 className="videobanner">Eventos y Encuentros</h2>
          <img
            className="d-block w-100 min-vh-100"
            src="/images/bkg21.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className='filtrocarousel'></div>
          <h3 className="videobanner">Instituto Mexicano del Cemento y del Concreto A.C.</h3>
          <h2 className="videobanner">Certificación de productos</h2>
          <img
            className="d-block w-100 min-vh-100"
            src="https://images.adsttc.com/media/images/61b7/a626/f91c/81ad/ae00/0022/slideshow/Barclay___Crousse__La_escondida_House__%C2%A9Erieta_Attali.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <style jsx>{`
          .carousel {
            position: fixed !important;
            width: 100%;
            z-index: -1;
            top: 0;
          }
          
          .carousel-caption {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100vh;
            justify-content: center;
          }
          
          .introx {
            background: rgb(48,82,121);
            background: -moz-radial-gradient(circle, rgba(48,82,121,1) 45%, rgba(0,0,0,1) 100%);
            background: -webkit-radial-gradient(circle, rgba(48,82,121,1) 45%, rgba(0,0,0,1) 100%);
            background: radial-gradient(circle, rgba(48,82,121,1) 45%, rgba(0,0,0,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#305279",endColorstr="#000000",GradientType=1);
            display: flex !important;
            justify-content: center;
            flex-direction: column;
            text-align: center;
          }
        `}</style>
      </>
    );  
}