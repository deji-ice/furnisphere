import CTA from "@/components/CTA";
import FAQs from "@/components/FAQs";
import HeroSection from "@/components/HeroSection";
import HomeRecommendations from "@/components/HomeRecommendations";
import NewCollection from "@/components/NewCollection";
import Offers from "@/components/Offers";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <NewCollection />
      <HomeRecommendations />
      <Offers />
      <Testimonials />
      <FAQs />
      <CTA />
    </div>
  );
}
