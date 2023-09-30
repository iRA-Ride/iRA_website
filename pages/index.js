import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import FooterWithLogo from "@/components/Footer";
import Hero from "@/components/Hero";
import Download from "@/components/Download";
import RideCab from "@/components/RideCab";
import Demo from "@/components/Demo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <RideCab />
      <Demo />
      <Download type="iRA Cabs" medium="Ride" />
      <FooterWithLogo />
    </main>
  );
}
