import { Hero } from "./components/Hero";
import { ImageStrip, TrustStrip } from "./components/IntroStrips";

export default function Home() {
  return (
    <main>
      <Hero />
      <ImageStrip />
      <TrustStrip />
    </main>
  );
}
