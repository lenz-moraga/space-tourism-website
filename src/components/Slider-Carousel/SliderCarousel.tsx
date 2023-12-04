"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classNames from "classnames";
import styles from "./SliderCarousel.module.scss";
import { text } from "stream/consumers";

export type SlidesType = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  // destinations
  description?: string;
  distance?: string;
  travel?: string;
  // crew
  role?: string;
  bio?: string;
};

type SliderCarouselProps = {
  indicatorsType?: "dots" | "text" | "numbers";
  topSlides: React.JSX.Element[];
  thumbnails: string[];
  bottomSlides: React.JSX.Element[];
};

const SliderCarousel = ({
  indicatorsType,
  topSlides,
  thumbnails,
  bottomSlides,
}: SliderCarouselProps) => {
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
    fade: true,
    arrows: false,
    dots: false,
  };

  const handleIndicatorClick = (index: number) => {
    if (!sliderRef && !sliderRef2) return;

    sliderRef.current?.slickGoTo(index);
    sliderRef2.current?.slickGoTo(index);
  };

  const getSlideIndicators = (text: string) => {
    switch (indicatorsType) {
      case "dots":
        return "•";
      case "numbers":
        return activeIndex + 1;
      case "text":
        return text;
      default:
        return thumbnails[activeIndex];
    }
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {topSlides}
      </Slider>

      {/* Indicators */}
      <div className={styles.thumbnails_container}>
        {thumbnails.map((text, index) => (
          <span
            key={index}
            className={classNames(styles.thumbnails, {
              [styles.active]: index === activeIndex,
            })}
            onClick={() => handleIndicatorClick(index)}
          >
            {getSlideIndicators(text)}
          </span>
        ))}
      </div>

      <Slider ref={sliderRef2} {...settings}>
        {bottomSlides}
      </Slider>
    </div>
  );
};

export default SliderCarousel;
