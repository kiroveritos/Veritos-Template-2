"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { CheckCircle2, ShieldAlert, Sparkles, Workflow } from "lucide-react";
import { useRef } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface processType {
  step: string;
  title: string;
  tagline: string;
  description: string;
  bg_image: string;
  deliverables: {
    item: string;
  }[];
}

const ProcessCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const process: processType[] = [
    {
      step: "01",
      title: "Discovery & Governance Compliance",
      tagline: "Understanding Mission-Critical Requirements",
      description:
        "We begin by analyzing statutory regulations, data privacy mandates, audit standards, and enterprise user workflows. We engage key departmental stakeholders to formulate a compliant, robust technical blueprint tailored to government or corporate mandates.",
      deliverables: [
        { item: "Compliance & Security Audit Blueprint" },
        { item: "Departmental Workflow Specification" },
        { item: "Infrastructure & High-Concurrency Sizing" },
      ],
      bg_image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    },
    {
      step: "02",
      title: "Architecture & Security Modeling",
      tagline: "Zero-Trust Architecture & High-Availability Design",
      description:
        "Our architects formulate resilient database schemas, 256-bit encryption pipelines for sensitive records, and cloud load-balancing strategies that eliminate single points of failure, ensuring tamper-proof data integrity.",
      deliverables: [
        { item: "High-Availability Cloud Topology" },
        { item: "Role-Based Access Control (RBAC) Matrix" },
        { item: "Encrypted Data Transfer Protocols" },
      ],
      bg_image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    },
    {
      step: "03",
      title: "Agile Engineering & Stress Testing",
      tagline: "Engineered for High-Concurrence Demands",
      description:
        "Our software team builds scalable responsive frontends, microservices, and conducts rigorous automated load simulations to guarantee sub-second responses even during peak citizen and student registration traffic.",
      deliverables: [
        { item: "Production-Grade Modular Software Build" },
        { item: "Automated Stress & Penetration Testing" },
        { item: "End-to-End API & Payment Gateway Integration" },
      ],
      bg_image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    },
    {
      step: "04",
      title: "Deployment & 24/7 Managed AMC",
      tagline: "Continuous Reliability & SLA Maintenance",
      description:
        "From staging to live rollout, our DevOps engineers manage zero-downtime cutover, provide hands-on training to departmental staff, and deliver 24/7 proactive server monitoring, regular security patches, and AMC.",
      deliverables: [
        { item: "Zero-Downtime Production Cutover" },
        { item: "Departmental Staff Onboarding & Documentation" },
        { item: "24/7 SLA-Backed AMC & Cloud Monitoring" },
      ],
      bg_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  useGSAP(() => {
    const slides = slidesRef.current;
    if (!slides.length || !headingRef.current || !sectionRef.current) return;

    const headerPin = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 8%",
      endTrigger: slidesRef.current[slidesRef.current.length - 2],
      end: "center top",
      pin: headingRef.current,
      pinSpacing: false,
      anticipatePin: 1,
    });

    slides.slice(0, 3).forEach((slide) => {
      if (!slide) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "top 25%",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        },
      });

      tl.to(slide, {
        scale: 0.7,
        z: -80,
        rotationX: 10,
        opacity: 0,
        duration: 0.7,
        ease: "power2.inOut",
      });
    });

    const updatePinning = () => {
      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
        headerPin.disable();
      } else {
        headerPin.enable();
      }
    };

    if (headingRef.current) {
      gsap.effects.fadeUpOnScroll(headingRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    updatePinning();
    window.addEventListener("resize", updatePinning);

    return () => {
      headerPin.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", updatePinning);
    };
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative mx-auto max-w-6xl px-4 py-24 md:py-32"
      aria-labelledby="process-heading"
    >
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
        {/* Left Pinned Heading */}
        <div ref={headingRef} className="lg:w-5/12 lg:pr-8">
          <SectionHeading
            badge="Proven Methodology"
            heading="Our Mission-Critical Execution Lifecycle"
            description="Delivering enterprise software requires rigorous security, clear milestones, and SLA guarantees. Here is how Veritos transforms complex organizational needs into reliable digital infrastructure."
            icon={Workflow}
            size="md"
            align="left"
            as="h2"
            id="process-heading"
          />

          <div className="mt-8 hidden space-y-4 rounded-2xl border border-blue-100 bg-blue-50/50 p-6 backdrop-blur-sm lg:block">
            <h4 className="flex items-center gap-2 text-sm font-bold text-blue-900">
              <ShieldAlert className="h-4 w-4 text-blue-600" />
              Quality & SLA Assurance
            </h4>
            <p className="text-xs leading-relaxed text-slate-600">
              Every stage is verified against national security standards, strict role-based access,
              and disaster-recovery failovers to guarantee 99.98% system availability.
            </p>
          </div>
        </div>

        {/* Right Stacking Cards */}
        <div ref={containerRef} className="space-y-12 lg:w-7/12">
          {process.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) slidesRef.current[index] = el;
              }}
              className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/5 transition-all duration-300 md:p-8"
              style={{ transformOrigin: "center top" }}
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-3xl font-black text-blue-600 sm:text-4xl">
                  {item.step}
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  Phase {index + 1}
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  {item.tagline}
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                <p className="mb-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Deliverables & Milestones:
                </p>
                <ul className="space-y-2">
                  {item.deliverables.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <span>{d.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessCards;
