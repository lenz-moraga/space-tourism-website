"use client";
import SliderCarousel, {
  SlidesType,
} from "@/components/Slider-Carousel/SliderCarousel";
import useFetchData from "@/hooks/useFetchData/useFetchData";
import React from "react";

import styles from "./Crew.module.scss";
import Image from "next/image";

const Crew = () => {
  const { data, loading, error } = useFetchData("/data.json", "crew");
  const crew: SlidesType[] = data
    ? data
    : [
        {
          name: "Douglas Hurley",
          images: {
            png: "/assets/crew/image-douglas-hurley.png",
            webp: "/assets/crew/image-douglas-hurley.webp",
          },
          role: "Commander",
          bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        },
      ];

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  const topSlides = crew.map((slide, index) => (
    <div key={index}>
      <picture
        className={styles.crew_image}
        style={{ minHeight: "150px", position: "relative", display: "block" }}
      >
        <source srcSet={slide.images.webp} type="image/webp" />
        <source srcSet={slide.images.png} type="image/png" />
        <Image
          alt={slide.name}
          src={slide.images.png}
          fill
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </picture>
    </div>
  ));

  const thumbnails = crew.map((slide) => slide.name);

  const bottomSlides = crew.map((slide, index) => (
    <div className={styles.crew_information} key={index}>
      <h3 className={styles.crew_role}>{slide.role}</h3>
      <h4 className={styles.crew_name}>{slide.name}</h4>
      <p className={styles.crew_bio}>{slide.bio}</p>
    </div>
  ));

  return (
    <section className={styles.crew_container}>
      <h2 className={styles.crew_section_title}>
        <span>02</span>Meet your crew
      </h2>
      <SliderCarousel
        indicatorsType={"dots"}
        topSlides={topSlides}
        thumbnails={thumbnails}
        bottomSlides={bottomSlides}
      />
    </section>
  );
};

export default Crew;
