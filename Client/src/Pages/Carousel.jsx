import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselImg({ product }) {
  const [images, setImages] = useState([]);
  const [hide, setHide] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    setImages(product.imgURLs);
  }, [product]);

  // Default image source
  const defaultImageSrc = "/path-to-default-image.png"; // Replace with the actual path to your default image

  return (
    <div className="rounded-2xl overflow-hidden">
      <Carousel
        onMouseEnter={() => setHide(true)}
        onMouseLeave={() => setHide(false)}
        interval={null}
        indicators={!hide}
        controls={hide}
      >
        {images.map((image) => (
          <Carousel.Item key={image}>
            <div className="w-96 h-72">
              <img
                className="h-full w-full object-cover"
                src={`http://localhost:3000/uploads/${image}`}
                onError={(e) => {
                  // Set the source to the default image if the actual image fails to load
                  e.target.src =
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjIfEB_B6s7r1X-dzBA_qWayfL0kloIDmuA&usqp=CAU";
                }}
                alt="Slide"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselImg;
