import Header from "@/components/navbars/Header";
import FooterWithLogo from "@/components/Footer";
import Hero from "@/components/main/Hero";
import RideCab from "@/components/main/RideCab";
import TestimonialSection from "@/components/main/TestimonialSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TestimonialSection />
      <RideCab />
      <FooterWithLogo />
    </main>
  );
}
