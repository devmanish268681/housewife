//components
import HeroBanner from "@/components/home/components/hero-section/HeroSection";
import HomePage from "@/components/home/Home";

//utils
import ClientGeoLocation from "./ClientGeoLocation";
import { pingExternalServerOnce } from "../lib/ping-once";

export default async function Home() {
  await pingExternalServerOnce();
  return (
    <>
      <HeroBanner />
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <HomePage />
      </div>
      <ClientGeoLocation />
    </>
  );
}
