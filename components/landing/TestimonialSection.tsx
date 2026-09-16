"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import type { CaseStudyType } from "@/data/caseStudies";
import { caseStudies } from "@/data/caseStudies";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ExternalLink, MessageSquareQuote, Star } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface TestimonialCardProps {
  item: CaseStudyType;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item, index }) => {
  const hasTestimonial = Boolean(item.testimonial && item.testimonial.trim().length > 0);
  if (!hasTestimonial) return null;

  return (
    <article
      key={`${item.name}-testimonial-${index}`}
      className="group flex h-full w-full flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-md shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 sm:p-8"
      aria-labelledby={`testimonial-${index}-title`}
    >
      <div className="space-y-4">
        {/* Rating Stars & Quote Icon */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400" />
            ))}
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <MessageSquareQuote className="h-4 w-4" />
          </div>
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-slate-700 text-sm leading-relaxed font-medium sm:text-base">
          <p id={`testimonial-${index}-title`}>{item.testimonial}</p>
        </blockquote>
      </div>

      {/* Author & Profile */}
      <div className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-4">
        {item.test_img && (
          <img
            src={item.test_img}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-600/20"
            alt={item.founder_name || "Client"}
            loading="lazy"
          />
        )}
        <div className="space-y-0.5">
          <p className="text-sm font-bold text-slate-900 leading-tight">
            {item.founder_name}
          </p>
          <p className="text-xs text-blue-600 font-medium">
            {item.position}
          </p>
        </div>
      </div>
    </article>
  );
};

function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const testimonials = caseStudies.filter((cs) => cs.testimonial);

  useGSAP(() => {
    if (headingRef.current) {
      gsap.effects.fadeUpOnScroll(headingRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    if (gridRef.current) {
      gsap.effects.staggerFadeUpOnScroll(gridRef.current, {
        start: "top 85%",
        duration: 0.7,
        yOffset: 25,
        stagger: 0.12,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="mx-auto max-w-6xl px-4 py-20 sm:py-24 md:py-32"
      aria-labelledby="testimonials-heading"
      role="region"
    >
      {/* Header */}
      <SectionHeading
        ref={headingRef}
        badge="Client's Speak"
        heading="Trusted by Visionary Organizations"
        description="Listening to our customers and partners is what determines our business strategies and drives our culture. Discover what leaders say about partnering with Veritos Infosolutions."
        size="md"
        align="center"
        as="h2"
        id="testimonials-heading"
        className="mb-10 sm:mb-14"
      />

      <div
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
        ref={gridRef}
        role="list"
        aria-label="Client testimonials"
      >
        {testimonials.map((item, index) => (
          <div role="listitem" key={`${item.name}-${index}`}>
            <TestimonialCard item={item} index={index} />
          </div>
        ))}
      </div>

      {/* Trust Quote Bar */}
      <div
        ref={statsRef}
        className="mt-14 rounded-3xl border border-blue-200/80 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-8 text-white shadow-xl md:p-10"
      >
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="space-y-1">
            <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
              "Client growth is our foremost priority."
            </h3>
            <p className="max-w-xl text-xs text-slate-300 sm:text-sm">
              We fabricate relationships on trust, mutual respect, and measurable outcomes.
              Serving hundreds of big brand companies and government departments with perfection.
            </p>
          </div>
          <a
            href="tel:8968321512"
            className="shrink-0 rounded-xl bg-white px-5 py-3 text-xs font-bold text-blue-900 shadow-md transition-all hover:bg-blue-50"
          >
            Speak to a Solution Architect
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
