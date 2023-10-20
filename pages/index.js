import { Inter } from "next/font/google";
import Header from "@/components/navbars/Header";
import FooterWithLogo from "@/components/Footer";
import Hero from "@/components/main/Hero";
import RideCab from "@/components/main/RideCab";

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
