"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: any, next: React.SetStateAction<number>) =>
      setActiveIndex(next),
    arrows: false,
  };

  const handleIndicatorClick = (index: number) => {
    if (!sliderRef) return;

    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        <div>
          {/* Your carousel content for slide 1 */}
          Slide 1
        </div>
        <div>
          {/* Your carousel content for slide 2 */}
          Slide 2
        </div>
        <div>
          {/* Your carousel content for slide 3 */}
          Slide 3
        </div>
        {/* Add more slides as needed */}
      </Slider>

      {/* Indicators */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {["Indicator 1", "Indicator 2", "Indicator 3"].map((text, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              padding: "5px",
              margin: "0 5px",
              border: "1px solid gray",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: index === activeIndex ? "bold" : "normal",
            }}
            onClick={() => handleIndicatorClick(index)}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SliderCarousel;
