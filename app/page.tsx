import HeroSection from "@/components/HeroSection";
import HomeRecommendations from "@/components/HomeRecommendations.tsx";
import NewCollection from "@/components/NewCollection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <NewCollection />
      <HomeRecommendations/>
    </div>
  );
}
