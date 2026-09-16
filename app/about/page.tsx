"use client";

import "@/lib/GSAPAnimations";
import { pageMetadata } from "@/lib/metadata";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Award, CheckCircle2, HeartHandshake, ShieldCheck, Target, Users } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const workplaceContentRef = useRef<HTMLDivElement>(null);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const statsGridRef = useRef<HTMLDivElement>(null);
  const imageGroupRefs = useRef<(HTMLElement | null)[]>([]);

  useGSAP(() => {
    if (heroContentRef.current) {
      gsap.effects.fadeUpOnScroll(heroContentRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    if (workplaceContentRef.current) {
      gsap.effects.fadeUpOnScroll(workplaceContentRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    if (statsSectionRef.current) {
      gsap.effects.fadeUpOnScroll(statsSectionRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    if (statsGridRef.current) {
      gsap.effects.staggerFadeUpOnScroll(statsGridRef.current, {
        duration: 0.6,
        yOffset: 20,
        stagger: 0.1,
        start: "top 85%",
      });
    }

    imageGroupRefs.current.forEach((ref) => {
      if (ref) {
        gsap.effects.fadeUpOnScroll(ref, {
          duration: 0.7,
          yOffset: 25,
          start: "top 80%",
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageMetadata.about.structuredData),
        }}
      />

      <main id="main-content" role="main" className="overflow-hidden">
        <section className="mx-auto max-w-6xl px-4 py-28 md:py-36" aria-labelledby="about-heading">
          <div className="flex flex-col items-center justify-start gap-12 lg:flex-row">
            {/* Left Story Column */}
            <div className="flex w-full flex-col items-start justify-start gap-12 lg:w-1/2">
              <header ref={heroContentRef} className="space-y-6 lg:pr-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>About Veritos Infosolutions</span>
                </div>

                <h1 id="about-heading" className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                  Who We Are
                </h1>

                <p className="text-lg font-semibold text-blue-700 lg:text-xl">
                  Innovative Thoughts. Positive Outcomes. Successful Solutions.
                </p>

                <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                  Veritos Infosolutions Pvt Ltd is a premier IT Service Provider. Identifying and meeting
                  our customer needs is the key to our continued business success. Listening to our customers
                  and partners is what determines our business strategies and drives our culture. We are greatly
                  concerned about the quality of our solutions where cost never compromises performance.
                </p>

                <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                  We employ an efficient team of IT professionals equipped with technical skills to adapt to the
                  latest emerging technologies. Working with hundreds of organizations—including state government
                  departments, educational boards, and corporate enterprises—means Veritos is no stranger to
                  understanding complex, mission-critical operational requirements.
                </p>
              </header>

              <figure
                ref={(el) => {
                  imageGroupRefs.current[0] = el;
                }}
                className="grid w-full grid-cols-2 gap-4"
                role="group"
                aria-label="Veritos team and technology infrastructure"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                  alt="Veritos engineering collaboration"
                  className="aspect-[4/5] w-full rounded-2xl object-cover shadow-md"
                  loading="eager"
                />
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
                  alt="Enterprise system monitoring and operations"
                  className="aspect-[4/5] w-full rounded-2xl object-cover shadow-md"
                  loading="lazy"
                />
              </figure>
            </div>

            {/* Right Vision & Culture Column */}
            <div className="flex w-full flex-col items-center justify-center gap-12 lg:w-1/2">
              <figure
                ref={(el) => {
                  imageGroupRefs.current[1] = el;
                }}
                className="grid w-full grid-cols-2 gap-4"
                role="group"
                aria-label="High-tech server room and software delivery"
              >
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
                  alt="Secure datacenter infrastructure"
                  className="aspect-[4/5] w-full rounded-2xl object-cover shadow-md"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
                  alt="Data-driven dashboard analysis"
                  className="aspect-[4/5] w-full rounded-2xl object-cover shadow-md"
                  loading="lazy"
                />
              </figure>

              <article ref={workplaceContentRef} className="space-y-6 lg:px-4">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Our Vision & Core Commitments
                </h2>

                <p className="text-base font-semibold text-blue-700">
                  Client growth is our foremost priority.
                </p>

                <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                  Veritos envisions becoming one of the major socio-economic contributors while becoming the most
                  preferred technology partner of our clients by making a positive impact on their functioning.
                  We provide innovative digitized solutions enabling our partners to deliver the best experience for
                  their target audience.
                </p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 pt-2">
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 text-center">
                    <Target className="mx-auto h-5 w-5 text-blue-700" />
                    <p className="mt-2 text-xs font-bold text-slate-900">Client's Success</p>
                  </div>
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 text-center">
                    <HeartHandshake className="mx-auto h-5 w-5 text-blue-700" />
                    <p className="mt-2 text-xs font-bold text-slate-900">Community Dev</p>
                  </div>
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 text-center">
                    <Users className="mx-auto h-5 w-5 text-blue-700" />
                    <p className="mt-2 text-xs font-bold text-slate-900">People's Welfare</p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Key Enterprise Milestones & Stats */}
          <section ref={statsSectionRef} className="mt-28 space-y-12" aria-labelledby="stats-heading">
            <header className="text-center max-w-2xl mx-auto space-y-3">
              <h2 id="stats-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Measurable Impact Across Sectors
              </h2>
              <p className="text-sm text-slate-600">
                Delivering high-concurrency systems that process millions of records with speed and absolute data integrity.
              </p>
            </header>

            <div
              ref={statsGridRef}
              className="grid grid-cols-2 gap-6 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm md:grid-cols-4 md:p-10"
              role="region"
              aria-label="Verified statistics"
            >
              <div className="space-y-1 text-center" role="article">
                <p className="text-3xl font-black text-blue-700 sm:text-4xl lg:text-5xl">150+</p>
                <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Enterprise Portals
                </p>
              </div>
              <div className="space-y-1 text-center" role="article">
                <p className="text-3xl font-black text-blue-700 sm:text-4xl lg:text-5xl">10M+</p>
                <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Citizens & Students
                </p>
              </div>
              <div className="space-y-1 text-center" role="article">
                <p className="text-3xl font-black text-blue-700 sm:text-4xl lg:text-5xl">12+</p>
                <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Years of Expertise
                </p>
              </div>
              <div className="space-y-1 text-center" role="article">
                <p className="text-3xl font-black text-blue-700 sm:text-4xl lg:text-5xl">99.98%</p>
                <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Platform Uptime SLA
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default AboutPage;