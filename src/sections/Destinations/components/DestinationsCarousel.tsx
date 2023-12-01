import Image from "next/image";
import React, { useRef, useState } from "react";
import Slider from "react-slick";

import styles from "../Destinations.module.scss";
import { SlidesType } from "../Destinations";

type DestinationsCarouselProps = {
  destinations: SlidesType[];
};

const DestinationsCarousel = ({ destinations }: DestinationsCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const sliderRef2 = useRef<Slider>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: any, next: React.SetStateAction<number>) =>
      setActiveIndex(next),
    arrows: false,
    fade: true,
    dots: false,
  };

  const handleIndicatorClick = (index: number) => {
    if (!sliderRef && !sliderRef2) return;
    sliderRef.current?.slickGoTo(index);
    sliderRef2.current?.slickGoTo(index);
  };

  return (
    <div className={styles.destinations_slider}>
      <Slider ref={sliderRef} {...settings}>
        {destinations?.map((slide, index) => (
          <div key={index} className={styles.destinations_image}>
            <Image
              src={slide.images.png}
              alt={slide.name}
              width={170}
              height={170}
            />
          </div>
        ))}
      </Slider>

      {/* Indicators */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {destinations?.map((text, index) => (
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
            {text.name}
          </span>
        ))}
      </div>

      <Slider ref={sliderRef2} {...settings}>
        {destinations?.map((slide, index) => (
          <div className={styles.destinations_information} key={index}>
            <h3>{slide.name}</h3>
            <p>{slide.description}</p>
            <hr />
            <p>
              AVG. DISTANCE
              <span>{slide.distance}</span>
            </p>
            <p>
              EST. TRAVEL TIME
              <span>{slide.travel}</span>
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DestinationsCarousel;
