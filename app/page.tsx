import HeroSection from "@/components/HeroSection";
import HomeRecommendations from "@/components/HomeRecommendations";
import NewCollection from "@/components/NewCollection";
import Offers from "@/components/Offers";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <NewCollection />
      <HomeRecommendations />
      <Offers />
    </div>
  );
}
