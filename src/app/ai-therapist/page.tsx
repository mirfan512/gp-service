import type { Metadata } from "next";
import { cookies } from "next/headers";

import { NavBar } from "./_components/NavBar";
import { HeroSection } from "./_components/HeroSection";
import { StatsBar } from "./_components/StatsBar";
import { ChatDemoSection } from "./_components/ChatDemoSection";
import { FeaturesSection } from "./_components/FeaturesSection";
import { HowItWorksSection } from "./_components/HowItWorksSection";
import { TestimonialsSection } from "./_components/TestimonialsSection";
import { PricingSection } from "./_components/PricingSection";
import { FaqSection } from "./_components/FaqSection";
import { CtaBannerSection } from "./_components/CtaBannerSection";
import { DisclaimerFooter } from "./_components/DisclaimerFooter";
import { TherapistDashboard } from "./_components/TherapistDashboard";

export const metadata: Metadata = {
  title: "AI Therapist | Online GP Services",
  description:
    "Private AI-powered mental wellness support from Online GP Services, available any time for guided reflection, stress support, and wellbeing exercises.",
};

export default async function AiTherapistPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const isAuthenticated = !!token;

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", color: "#1a1a1a", background: "#fff" }}>
      <NavBar />
      <main>
        {isAuthenticated ? (
          <TherapistDashboard />
        ) : (
          <>
            <HeroSection />
            <StatsBar />
            <ChatDemoSection />
            <FeaturesSection />
            <HowItWorksSection />
            <TestimonialsSection />
            <PricingSection />
            <FaqSection />
            <CtaBannerSection />
          </>
        )}
      </main>
      {!isAuthenticated && <DisclaimerFooter />}
    </div>
  );
}
