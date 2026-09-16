"use client";

import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";
import "@/lib/GSAPAnimations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  Activity,
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Cpu,
  Database,
  FileCheck2,
  Fingerprint,
  GraduationCap,
  Landmark,
  Lock,
  PhoneCall,
  Radio,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const dynamicKeywords = [
  "e-Governance Portals",
  "National DigiLocker Systems",
  "Confidential Exam Engines",
  "Cloud ERP & Smart HRMS",
  "High-Volume Telecom IVR",
];

const sectorTags = [
  "e-Governance Modules",
  "National DigiLocker Repository",
  "University Management System (UMS)",
  "Encrypted Exam Question Papers",
  "Online Counselling & Admissions",
  "Cloud ERP & Payroll HRMS",
  "Toll-Free IVR & SMPP SMS",
  "Citizen Grievance Redressal",
  "GeM Portal Registered",
  "Server Management & AMC",
];

const metrics = [
  {
    label: "Govt & Enterprise Portals",
    value: "150+",
    subtext: "Delivered & Active",
    icon: Building2,
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    label: "Citizens & Students Served",
    value: "10M+",
    subtext: "Verified Records",
    icon: Users,
    gradient: "from-indigo-600 to-blue-600",
  },
  {
    label: "Mission-Critical SLA Uptime",
    value: "99.98%",
    subtext: "Fault-Tolerant Clusters",
    icon: Activity,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    label: "Years of Proven Delivery",
    value: "12+",
    subtext: "GeM & ISO Certified",
    icon: Award,
    gradient: "from-cyan-600 to-blue-600",
  },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  // Floating badge refs
  const floatBadge1 = useRef<HTMLDivElement>(null);
  const floatBadge2 = useRef<HTMLDivElement>(null);
  const floatBadge3 = useRef<HTMLDivElement>(null);
  const floatBadge4 = useRef<HTMLDivElement>(null);

  // Rotating keyword state
  const [keywordIdx, setKeywordIdx] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setKeywordIdx((prev) => (prev + 1) % dynamicKeywords.length);
        setIsFlipping(false);
      }, 350);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      // Main Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        y: -25,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          headingRef.current,
          {
            y: 35,
            opacity: 0,
            duration: 0.85,
          },
          "-=0.4"
        )
        .from(
          descRef.current,
          {
            y: 25,
            opacity: 0,
            duration: 0.75,
          },
          "-=0.5"
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.65,
          },
          "-=0.4"
        )
        .from(
          statusRef.current,
          {
            y: 15,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          metricsRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3"
        );

      // Gentle floating animations for ambient telemetry badges
      if (floatBadge1.current) {
        gsap.to(floatBadge1.current, {
          y: -10,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
      if (floatBadge2.current) {
        gsap.to(floatBadge2.current, {
          y: 12,
          duration: 3.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.4,
        });
      }
      if (floatBadge3.current) {
        gsap.to(floatBadge3.current, {
          y: -8,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.8,
        });
      }
      if (floatBadge4.current) {
        gsap.to(floatBadge4.current, {
          y: 10,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.2,
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20 lg:pt-40"
      aria-label="Hero"
    >
      {/* Dynamic Animated Tech Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(#3b82f6_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-25 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_60%,transparent_100%)]" />

      {/* Ambient Glowing Energy Spheres */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[480px] w-[750px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-cyan-400/20 blur-3xl animate-pulse [animation-duration:8s]" />
      <div className="pointer-events-none absolute top-1/4 -left-36 -z-10 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-36 -z-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />

      {/* Floating Ambient Telemetry Badges (Desktop Only) */}
      <div
        ref={floatBadge1}
        className="pointer-events-none hidden xl:flex absolute top-36 left-2 items-center gap-2.5 rounded-2xl border border-blue-200/80 bg-white/80 px-3.5 py-2 shadow-lg shadow-blue-500/10 backdrop-blur-md"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Landmark className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-900 leading-tight">DigiLocker API</p>
          <p className="text-[10px] font-semibold text-emerald-600 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
            Verified in 0.34s
          </p>
        </div>
      </div>

      <div
        ref={floatBadge2}
        className="pointer-events-none hidden xl:flex absolute top-40 right-2 items-center gap-2.5 rounded-2xl border border-cyan-200/80 bg-white/80 px-3.5 py-2 shadow-lg shadow-cyan-500/10 backdrop-blur-md"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
          <Radio className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-900 leading-tight">SMPP SMS Pipe</p>
          <p className="text-[10px] font-semibold text-blue-600 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            10,000 / sec Throughput
          </p>
        </div>
      </div>

      <div
        ref={floatBadge3}
        className="pointer-events-none hidden xl:flex absolute bottom-56 left-4 items-center gap-2.5 rounded-2xl border border-indigo-200/80 bg-white/80 px-3.5 py-2 shadow-lg shadow-indigo-500/10 backdrop-blur-md"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <Lock className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-900 leading-tight">Exam Crypto Vault</p>
          <p className="text-[10px] font-semibold text-indigo-600">RSA-4096 HSM Enclave</p>
        </div>
      </div>

      <div
        ref={floatBadge4}
        className="pointer-events-none hidden xl:flex absolute bottom-52 right-4 items-center gap-2.5 rounded-2xl border border-emerald-200/80 bg-white/80 px-3.5 py-2 shadow-lg shadow-emerald-500/10 backdrop-blur-md"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          <Activity className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-900 leading-tight">High-Availability ERP</p>
          <p className="text-[10px] font-semibold text-emerald-600">99.98% Live SLA Uptime</p>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        {/* Unified Luminous Trust Capsule */}
        <div ref={badgeRef} className="mx-auto mb-6 inline-block">
          <div className="group inline-flex items-center gap-2.5 rounded-full border border-blue-300/80 bg-gradient-to-r from-blue-50/95 via-indigo-50/80 to-cyan-50/95 px-4 py-1.5 shadow-sm transition-all hover:scale-105 hover:border-blue-400 hover:shadow-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <ShieldCheck className="h-4 w-4 text-blue-700" />
            <span className="text-xs font-bold text-slate-800 tracking-tight">
              GeM Registered • ISO Certified Govt & Enterprise IT Solutions
            </span>
            <span className="hidden sm:inline-block text-[11px] font-bold text-blue-700 bg-blue-100/90 px-2 py-0.5 rounded-full">
              Mohali, Punjab
            </span>
          </div>
        </div>

        {/* Dynamic Animated Headline */}
        <h1
          ref={headingRef}
          className="mx-auto max-w-4xl text-3xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.12]"
        >
          <span>Innovative Thoughts.</span>
          <br className="hidden sm:inline" />
          <span className="relative inline-block mt-2 sm:mt-1">
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Mission-Critical Solutions
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl font-bold text-slate-600 mt-1 h-9 sm:h-10 overflow-hidden">
              <span className="text-slate-500 font-medium">Powering </span>
              <span
                className={`inline-block text-blue-700 font-extrabold transition-all duration-300 transform ${
                  isFlipping
                    ? "-translate-y-4 opacity-0 scale-95"
                    : "translate-y-0 opacity-100 scale-100"
                }`}
              >
                {dynamicKeywords[keywordIdx]}
              </span>
            </span>
          </span>
        </h1>

        {/* Supporting Punchy Copy */}
        <p
          ref={descRef}
          className="mx-auto mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed"
        >
          Veritos Infosolutions unites data, people, and cryptographic engineering. We deliver verified e-Governance platforms, university examination engines, and enterprise cloud ERP with zero-leak security.
        </p>

        {/* Primary Interactive CTAs */}
        <div
          ref={ctaRef}
          aria-label="Call to action buttons"
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Link href="#solutions">
            <Button
              size="lg"
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 px-7 py-6 text-sm font-bold text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-[1.02] hover:from-blue-800 hover:to-indigo-700 hover:shadow-2xl hover:shadow-blue-600/40"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Explore Interactive Command Center</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer rounded-2xl border-slate-300/90 bg-white/90 px-6 py-6 text-sm font-bold text-slate-800 shadow-xs backdrop-blur-md transition-all duration-200 hover:border-blue-500 hover:bg-blue-50/60 hover:text-blue-700 hover:shadow-md"
            >
              <PhoneCall className="mr-2 h-4 w-4 text-blue-600" />
              <span>Talk to Solution Architect</span>
            </Button>
          </Link>
        </div>

        {/* Live System Operational Telemetry Bar */}
        <div ref={statusRef} className="mx-auto mt-8 inline-block">
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-xs backdrop-blur-md">
            <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              ALL NODES OPERATIONAL
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 text-slate-600">
              <Zap className="h-3.5 w-3.5 text-blue-600" />
              Avg API Response: <strong className="font-mono text-slate-900">18ms</strong>
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 text-slate-600">
              <Lock className="h-3.5 w-3.5 text-indigo-600" />
              Cryptography: <strong className="font-mono text-slate-900">SHA-256 + RSA</strong>
            </span>
          </div>
        </div>

        {/* Interactive Glowing Metric Cards */}
        <div
          ref={metricsRef}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white/80 p-5 text-center shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 cursor-default overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl group-hover:text-blue-700 transition-colors">
                  {item.value}
                </span>
                <span className="mt-1 text-xs font-bold text-slate-700 sm:text-sm">
                  {item.label}
                </span>
                <span className="mt-0.5 text-[11px] font-medium text-slate-500">
                  {item.subtext}
                </span>
              </div>
            );
          })}
        </div>

        {/* Core Solutions Marquee Ribbon */}
        <div
          className="relative mt-12 overflow-hidden py-3"
          role="region"
          aria-label="Core Solutions Marquee"
        >
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-background via-background/80 to-transparent sm:w-36" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-background via-background/80 to-transparent sm:w-36" />

          <Marquee pauseOnHover className="[--duration:30s]">
            {sectorTags.map((tag, idx) => (
              <div
                key={`${tag}-${idx}`}
                className="mx-2 flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-4 py-2 text-xs font-semibold text-slate-700 shadow-xs transition-all hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 hover:scale-105"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                <span>{tag}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
