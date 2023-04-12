import { Inter } from "next/font/google";
import {
  TopHeader,
  HeroHeader,
  AboutCards,
  WhyAvalanche,
  ContactComp,
  SlidesCard,
  FooterSocial,
} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <TopHeader />
      <HeroHeader />
      <AboutCards />
      <WhyAvalanche />
      <SlidesCard />
      <FooterSocial />
    </main>
  );
}
