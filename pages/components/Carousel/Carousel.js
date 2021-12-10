import Carousel from 'react-bootstrap/Carousel';

export default function InicioCarousel(){
    return (
      <>
      <Carousel 
        indicators={false} 
        fade={true} 
        controls={false}
      >
        <Carousel.Item interval={4000}>
          <h2 style={{
            'position':'fixed',
            'fontWeight':'100',
            'color':'#fff',
            'top':'30%',
            'fontSize':'3rem',
            'lineHeight':'3rem',
            'width':'100%',
            'textAlign':'center'
          }}>Instituto Mexicano del Cemento y del Concreto A.C.</h2>
          <img
            className="d-block w-100 min-vh-100"
            src="/images/bkg_ubicacion.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          {/* 
          <h1 style={{
            'position':'fixed',
            'fontWeight':'100',
            'color':'#fff',
            'top':'35%',
            'padding': '10px 45px',
            'fontSize':'7rem',
            'lineHeight':'6rem'
          }}>Compartiendo<br/>el Conocimiento</h1>
          */}
          <img
            className="d-block w-100 min-vh-100"
            src="/images/bkg15.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 min-vh-100"
            src="/images/bkg16.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 min-vh-100"
            src="/images/bkg17.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 min-vh-100"
            src="/images/bkg18.jpg"
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