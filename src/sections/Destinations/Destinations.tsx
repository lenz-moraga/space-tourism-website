"use client";
import SliderCarousel, {
  SlidesType,
} from "@/components/Slider-Carousel/SliderCarousel";
import React from "react";

import styles from "./Destinations.module.scss";
import useFetchData from "@/hooks/useFetchData/useFetchData";
import Image from "next/image";

import "slick-carousel/slick/slick.css";

const Destinations = () => {
  const { data, loading, error } = useFetchData("/data.json", "destinations");
  const destinations: SlidesType[] = data
    ? data
    : [
        {
          name: "Moon",
          images: {
            png: "./assets/destination/image-moon.png",
            webp: "./assets/destination/image-moon.webp",
          },
          description:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          distance: "384,400 km",
          travel: "3 days",
        },
      ];

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  const topSlides = destinations.map((slide, index) => (
    <div key={index}>
      <picture className={styles.destinations_image}>
        <source srcSet={slide.images.webp} type="image/webp" />
        <source srcSet={slide.images.png} type="image/png" />
        <Image
          alt={slide.name}
          height={170}
          src={slide.images.png}
          width={170}
        />
      </picture>
    </div>
  ));

  const thumbnails = destinations.map((slide) => slide.name);

  const bottomSlides = destinations.map((slide, index) => (
    <div className={styles.destinations_information} key={index}>
      <h3 className={styles.destinations_title}>{slide.name}</h3>
      <p className={styles.destinations_description}>{slide.description}</p>
      <hr className={styles.destinations_divider} />
      <div className={styles.destinations_add_info}>
        <p className={styles.destinations_add_info_value}>
          <span className={styles.destinations_add_info_label}>
            AVG. DISTANCE
          </span>
          {slide.distance}
        </p>
        <p className={styles.destinations_add_info_value}>
          <span className={styles.destinations_add_info_label}>
            AVG. TRAVEL TIME
          </span>
          {slide.travel}
        </p>
      </div>
    </div>
  ));

  return (
    <section className={styles.destinations_container}>
      <h2 className={styles.destinations_section_title}>
        <span>01</span>Pick your destination
      </h2>
      <SliderCarousel
        dots={false}
        topSlides={topSlides}
        thumbnails={thumbnails}
        bottomSlides={bottomSlides}
      />
    </section>
  );
};

export default Destinations;
