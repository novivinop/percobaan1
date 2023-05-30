import React, { useState, useEffect } from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Iklan = () => {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const getCarouselImageWidth = () => {
    if (windowWidth >= 992) {
      return '100%'; // Full width on screens larger than or equal to 992px
    } else if (windowWidth >= 768) {
      return '75%'; // 75% width on screens larger than or equal to 768px
    } else {
      return '50%'; // 50% width on screens smaller than 768px
    }
  };

  return (
    <div className="centered-container">
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 reduce-height caousel"
            src="/image/img_raya1.png"
            alt="First slide"
            style={{ width: getCarouselImageWidth() }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 reduce-height"
            src="/image/img_iklan2.png"
            alt="Second slide"
            style={{ width: getCarouselImageWidth() }}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
    </div>
  );
};

export default Iklan;
