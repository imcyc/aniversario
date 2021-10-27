import { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { ArrowRight } from 'react-bootstrap-icons';;

export default function ItemCarousel() {

  const [ indexer, setIndexer ] = useState(0);
  const [ activoItemIndex, setActivoItemIndex ] = useState(0);
  const [ direction, setDirection ] = useState('next');
  const [ carouselItemCount, setCarouselItemCount ] = useState(4);

  const toggleCarousel = (direction) => {
    setDirection(direction);
    const [min, max] = [0, carouselItemCount - 1]
    if(direction === 'next'){
      setActivoItemIndex(activoItemIndex + 1);
    }
    if(direction === 'prev'){
      setActivoItemIndex(activoItemIndex - 1);
    }
    if(activoItemIndex > max){
      setActivoItemIndex(0);
    }
    if(activoItemIndex < min){
      setActivoItemIndex(activoItemIndex - 1);
    }
  };

  return (
    <>
    <div style={{ "padding": "0 0 15px 15px", "maxWidth": "100%", "margin": "15px 0" }}>
      <ItemsCarousel
        infiniteLoop={true}
        gutter={12}
        activePosition={'center'}
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={true}
        numberOfCards={4}
        slidesToScroll={1}
        outsideChevron={true}
        showSlither={false}
        firstAndLastGutter={true}
        activeItemIndex={activoItemIndex}
        requestToChangeActive={value => setActivoItemIndex({ value })}
        rightChevron={<i className="lni-angle-double-right"></i>}
        leftChevron={<i className="lni-angle-double-left"></i>}
      >
        {Array.from(new Array(10)).map((_, i) =>
          <div
            key={i}
            className="ItemCarousel"
          >
            <div>
              <img src="/logo.svg" alt="Logo" style={{ width: '100px' }} />
            </div>
            <div>
              <h2 onClick={() => toggleCarousel('prev')}>HOLA</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <ArrowRight onClick={() => toggleCarousel('next')} />
            </div>
          </div>
        )}
      </ItemsCarousel>
    </div>
    <style jsx>{`
      .ItemCarousel {
        background: rgba(0,0,0,0.3);
        padding: 10px;
        display: flex;
        flex-direction: row;
        transition: all 1s;
        justify-content: center;
        align-content: center;
        align-items: center;
      }
      
      .ItemCarousel:hover {
        background: rgba(0,0,0,0.8);
      }
      
      i {
        color: #ffffff;
        font-size: 1.3em;
      }
      
      .ItemCarousel h2 {
        font-size: 1.3em;
        text-align: left;
        padding-left: 10px;
        cursor: pointer;
        padding-bottom: 0;
        margin-bottom: 0;
        margin-top: 0;
        padding-top: 0;
      }
      
      .ItemCarousel p {
        font-size: 0.7em;
        color: #ffffff;
        text-align:left;
        padding-left: 10px;
      }
      
      .ItemCarousel i.lni-plus {
        cursor: pointer;
        font-size:1.5em;
        transition: all 1s;
      }
      
      .ItemCarousel i.lni-plus:hover {
        background: #ff0000;
      }
    `}</style>
    </>
  );
}