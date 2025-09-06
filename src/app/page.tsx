import { Partners, PrizeCarousel, PrizeShowcase } from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <PrizeCarousel />
      <Partners />
      <PrizeShowcase />
    </div>
  );
}
