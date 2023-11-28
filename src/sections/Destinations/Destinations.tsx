"use client";
import SliderCarousel from "@/components/Slider-Carousel/SliderCarousel";
import React from "react";

import styles from "./Destinations.module.scss";
import useFetchData from "@/hooks/useFetchData/useFetchData";
import Image from "next/image";

const Destinations = () => {
  const { data, loading, error } = useFetchData("/data.json", "destinations");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  const destinationsData = (
    <>
      <Image alt="destination image" src="" width={300} height={200} />
      <>Indicators</>
      <>Carousel title</>
      <>Carousel desc</>
      <>divider</>
      <>AVG Dist</>
      <>Dist</>
      <>Travel Time</>
      <>Days</>
    </>
  );

  return (
    <section className={styles.destinations_container}>
      <h2 className={styles.destinations_title}>
        <span>01</span>Pick your destination
      </h2>
      <SliderCarousel />
      <SliderCarousel />
    </section>
  );
};

export default Destinations;
