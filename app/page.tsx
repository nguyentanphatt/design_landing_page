import CTASection from "@/section/CTASection";
import Hero from "@/section/Hero";
import PriceSection from "@/section/PriceSection";
import ProcessSection from "@/section/ProcessSection";


export default function Home() {
  return (
    <div>
      <Hero />
      <CTASection />
      <ProcessSection />
      <PriceSection />
    </div>
  );
}
