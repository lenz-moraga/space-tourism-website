import Image from "next/image";
import Header from "@/sections/Header/Header";
import Destinations from "@/sections/Destinations/Destinations";

export default function Home() {
  return (
    <main>
      <Header />
      <Destinations />
    </main>
  );
}
