import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function HomeCarousel({ data }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container mt-2 shadow p-0 rounded">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((slide) => {
          return (
            <Carousel.Item key={slide.id}>
              <img
                className="d-block w-100"
                src={slide.image}
                alt="slider image"
                style={{ objectFit: 'cover', height: 500, borderRadius: '8px 8px 0 0' }}
              />
              <Carousel.Caption className="text-dark bg-light rounded-bottom p-3">
                <h5 className="p-0 m-0">{slide.ADI}</h5>
                <p className="p-0 m-0">
                  {slide.MAHALLE}-{slide.ILCE}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
export default HomeCarousel;

