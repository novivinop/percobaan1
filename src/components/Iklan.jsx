import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';

const Iklan = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)};
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 reduce-height"
          src="/image/img_raya1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Kemudahan dalam berinternet</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 reduce-height"
          src="/image/img_coba.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Kemudahan dalam berinternet</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 reduce-height"
          src="/image/img_happy.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Kemudahan dalam berinternet</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Iklan;