import { Inter } from "next/font/google";
import Header from "@/components/navbars/Header";
import FooterWithLogo from "@/components/Footer";
import Hero from "@/components/Hero";
import RideCab from "@/components/RideCab";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <RideCab />
      <FooterWithLogo />
    </main>
  );
}
