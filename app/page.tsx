import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import NewCollection from "@/components/NewCollection";

const HomeRecommendations = dynamic(
  () => import("@/components/HomeRecommendations"),
  {
    loading: () => (
      <div className="h-32 animate-pulse rounded-lg bg-gray-100" />
    ),
  }
);

const Offers = dynamic(() => import("@/components/Offers"), {
  loading: () => <div className="h-32 animate-pulse rounded-lg bg-gray-100" />,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="h-32 animate-pulse rounded-lg bg-gray-100" />,
});

const FAQs = dynamic(() => import("@/components/FAQs"), {
  loading: () => <div className="h-32 animate-pulse rounded-lg bg-gray-100" />,
});

const CTA = dynamic(() => import("@/components/CTA"), {
  loading: () => <div className="h-32 animate-pulse rounded-lg bg-gray-100" />,
});

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
