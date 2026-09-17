import { ArcRevealHero } from "@/components/ruixen/arc-reveal-hero";
import { MultiMediaTestimonialDemo } from "@/components/ruixen/multi-media-testimonial-demo";
import { AIWorkflowSection } from "@/components/landing/AIWorkflowSection";
import ContactSection from "@/components/landing/ContactSection";
import HeroSection from "@/components/landing/HeroSection";
import ProcessSection from "@/components/landing/ProcessSection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata("home");

export default function Home() {
  return (
    <ArcRevealHero
      greetings={[
        { text: "Hello", lang: "en" },
        { text: "你好", lang: "zh" },
        { text: "Bonjour", lang: "fr" },
        { text: "やあ", lang: "ja" },
        { text: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ", lang: "pa" },
      ]}
      storageKey="home-intro"
    >
      <main id="main-content" role="main">
        <HeroSection />
        <MultiMediaTestimonialDemo />
        <div className="mx-auto max-w-6xl">
          <AIWorkflowSection />
          <ProcessSection />
          <TestimonialSection />
          <ContactSection />
        </div>
      </main>
    </ArcRevealHero>
  );
}
