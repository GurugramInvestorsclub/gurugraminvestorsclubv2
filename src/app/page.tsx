import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { FeaturedEvent } from "@/components/FeaturedEvent";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { FeaturedInsights } from "@/components/FeaturedInsights";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <FeaturedEvent />
      <UpcomingEvents />
      <FeaturedInsights />
      <Testimonials />
    </>
  );
}
