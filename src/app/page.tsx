import Image from "next/image";
import Header from "@/sections/Header/Header";
import Destinations from "@/sections/Destinations/Destinations";
import Crew from "@/sections/Crew/Crew";

export default function Home() {
  return (
    <main>
      <Header />
      <Destinations />
      <Crew />
    </main>
  );
}
