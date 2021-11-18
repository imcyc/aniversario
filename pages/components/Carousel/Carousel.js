import Carousel from 'react-bootstrap/Carousel';

export default function InicioCarousel(){
    return (
      <>
      <Carousel 
        indicators={false} 
        fade={true} 
        controls={false}
      >
        <Carousel.Item interval={20000}>
          <img
            className="d-block w-100 min-vh-100"
            src="/images/bkg_aniversario.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 min-vh-100"
            src="/images/bkg_aniversario.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 min-vh-100"
            src="/images/bkg4.jpg"
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