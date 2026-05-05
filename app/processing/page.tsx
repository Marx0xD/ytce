import { SectionDivider } from "../components/EditorialBlock";
import { ProcessSection } from "../components/ProcessSection";
import { QualitySection, ServicesSection } from "../components/ServicesSection";
import { WhySection } from "../components/WhySection";

export default function ProcessingPage() {
  return (
    <main className="page-main">
      <ProcessSection />
      <ServicesSection />
      <QualitySection />
      <SectionDivider label="Why Partner with Us" />
      <WhySection />
    </main>
  );
}
