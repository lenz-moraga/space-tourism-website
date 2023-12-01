"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classNames from "classnames";
import styles from "./SliderCarousel.module.scss";

export type SlidesType = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};

type SliderCarouselProps = {
  dots?: boolean;
  topSlides: React.JSX.Element[];
  thumbnails: string[];
  bottomSlides: React.JSX.Element[];
};

const SliderCarousel = ({
  dots,
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
            {dots ? "•" : text}
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
