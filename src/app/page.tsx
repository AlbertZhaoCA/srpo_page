import { HeroSectionOne } from "@/components/HeroSection";
import { AbstractSection } from "@/components/AbstractSection";
import { IntroductionSection } from "@/components/IntroductionSection";
import { ExperimentSection } from "@/components/ExperimentSection";
import { ConclusionSection } from "@/components/ConclusionSection";
import { CiteUsBox } from "@/components/cite-us";
import AlgorithmSection from "@/components/AlgorithmSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center px-8">
      <HeroSectionOne />
      <AbstractSection />
      <AlgorithmSection />
      <IntroductionSection />
      {/* <MethodSection /> */}
      <ExperimentSection />
      <ConclusionSection />
      <CiteUsBox />
    </div>
  );
}
