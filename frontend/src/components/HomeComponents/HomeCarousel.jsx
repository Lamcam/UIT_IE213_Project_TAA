import { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import banner1 from 'assets/Image/Banners/1.png';
import banner2 from 'assets/Image/Banners/2.png';
import banner3 from 'assets/Image/Banners/3.png';

function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={2500}>
      <Carousel.Item>
        <Image src={banner1} fluid />
      </Carousel.Item>

      <Carousel.Item>
        <Image src={banner2} fluid />
      </Carousel.Item>

      <Carousel.Item>
        <Image src={banner3} fluid />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
