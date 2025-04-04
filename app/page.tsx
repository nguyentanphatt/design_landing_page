import AboutSection from "@/section/AboutSection";
import CTASection from "@/section/CTASection";
import FAQSection from "@/section/FAQSection";
import FooterSection from "@/section/FooterSection";
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
      <AboutSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
