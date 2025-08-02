import HeroBanner from "@/components/home/components/hero-section/HeroSection";
import HomePage from "@/components/home/Home";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <HomePage />
      </div>
    </>
  );
}
