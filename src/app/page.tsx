import HeroSection from "@/components/sections/HeroSection";
import SuccessMetricsSection from "@/components/sections/SuccessMetricsSection";
import TargetSection from "@/components/sections/TargetSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import SuccessStorySection from "@/components/sections/SuccessStorySection";
import CurriculumSection from "@/components/sections/CurriculumSection";
import InstructorSection from "@/components/sections/InstructorSection";
import BonusSection from "@/components/sections/BonusSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import KakaoChannelButton from "@/components/layout/KakaoChannelButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Success Metrics Section - NEW */}
      <SuccessMetricsSection />

      {/* Target Persona Section */}
      <TargetSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Success Story Section */}
      <SuccessStorySection />

      {/* Curriculum Section */}
      <CurriculumSection />

      {/* Instructor Section */}
      <InstructorSection />

      {/* Bonus Section - NEW */}
      <BonusSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <FinalCTASection />

      {/* Footer - StickyMobileCTA 높이만큼 하단 여백 추가 */}
      <footer className="bg-n-black py-12 pb-32 px-4 border-t border-white/5">
        <div className="container-default text-center">
          <p className="text-n-300 text-sm mb-2">
            &copy; 2025 Grinda AI. All rights reserved.
          </p>
          <p className="text-n-400 text-sm">
            Rinda.ai - AI-Powered Global Sales Platform
          </p>
        </div>
      </footer>

      {/* Floating Components */}
      <StickyMobileCTA />
      <KakaoChannelButton />
    </main>
  );
}
