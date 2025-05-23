import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatWidget from "../components/chat/ChatWidget";

import HeroSection from "../components/landing/HeroSection";
import FeatureHighlights from "../components/landing/FeatureHighlights";
import SuggestedCommands from "../components/chat/SuggestedCommands";
import CallToAction from "../components/landing/CallToAction";
// Optional
import OnboardingSteps from "../components/landing/OnboardingSteps";
import Testimonials from "../components/landing/Testimonials";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="container py-5">
        <HeroSection />
        <FeatureHighlights />
        <OnboardingSteps />
        <SuggestedCommands />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
