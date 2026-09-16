"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Headphones,
  HeartHandshake,
  Layers,
  PhoneCall,
  Play,
  RotateCcw,
  ShieldCheck,
  Smile,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

interface WorkflowStep {
  id: number;
  stepNumber: string;
  title: string;
  shortGoal: string;
  icon: any;
  explanation: string;
  whatYouGet: string[];
  timeline: string;
  statusBadge: string;
}

const stepsData: WorkflowStep[] = [
  {
    id: 1,
    stepNumber: "01",
    title: "Friendly Discussion & Problem Mapping",
    shortGoal: "We Listen First",
    icon: HeartHandshake,
    explanation:
      "You don't need any technical knowledge. We sit with your team, listen to your everyday administrative bottlenecks, and create a clear action plan that fits your exact budget.",
    whatYouGet: [
      "Plain-English project roadmap",
      "No confusing technical acronyms",
      "Clear cost & delivery schedule",
    ],
    timeline: "Days 1 — 3",
    statusBadge: "Always 100% Free Initial Feasibility",
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Clean, Easy-to-Use Screen Designs",
    shortGoal: "Built for Everyday People",
    icon: Sparkles,
    explanation:
      "We design simple, beautiful screens on mobile and laptop. Everything is so intuitive that your staff, teachers, or citizens can use it instantly on day one without any training manuals.",
    whatYouGet: [
      "Simple 1-click workflows",
      "Works smoothly on phones and tablets",
      "Clean, clutter-free layouts",
    ],
    timeline: "Weeks 1 — 2",
    statusBadge: "Approved by Your Team Before Coding",
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Connecting Your Devices & Gateways",
    shortGoal: "Zero Office Interruption",
    icon: Layers,
    explanation:
      "We connect your existing office biometric attendance machines, official SMS channels, and government DigiLocker pipelines smoothly without stopping your daily business operations.",
    whatYouGet: [
      "Works with your existing hardware",
      "Direct carrier SMS and voice pipes",
      "Safe, private government-approved servers",
    ],
    timeline: "Weeks 3 — 5",
    statusBadge: "Tested Seamless Data Migration",
  },
  {
    id: 4,
    stepNumber: "04",
    title: "Stress Testing for Zero Downtime",
    shortGoal: "Rock-Solid Reliability",
    icon: ShieldCheck,
    explanation:
      "Before going live, we simulate 50,000 people using the system at the exact same second. We ensure there are zero crashes, zero data leaks, and lightning-fast speed under peak admission or exam rush.",
    whatYouGet: [
      "Tested for heavy rush hours",
      "Zero leak examination security",
      "ISO & GeM compliance verified",
    ],
    timeline: "Week 6",
    statusBadge: "100% Crash-Proof Guarantee",
  },
  {
    id: 5,
    stepNumber: "05",
    title: "Smooth Go-Live & Always-On Support",
    shortGoal: "We Stay by Your Side",
    icon: Headphones,
    explanation:
      "We launch your project with zero stress. Our local technical team in Mohali monitors your servers 24/7, and our direct support helpline is always just one phone call away.",
    whatYouGet: [
      "99.98% live server uptime guarantee",
      "Dedicated account manager",
      "Immediate phone and on-site assistance",
    ],
    timeline: "Ongoing 24/7",
    statusBadge: "Direct Mohali Support Team",
  },
];

export function AIWorkflowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const activeStep = stepsData.find((s) => s.id === activeStepId) || stepsData[0];

  useGSAP(() => {
    if (headingRef.current) {
      gsap.effects.fadeUpOnScroll(headingRef.current, {
        start: "top 80%",
        duration: 0.8,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Gentle auto-rotation between steps so user sees progression
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setActiveStepId((prev) => (prev % stepsData.length) + 1);
    }, 4500);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section
      id="process-workflow"
      ref={sectionRef}
      className="mx-auto max-w-6xl px-4 py-20 md:py-28"
      aria-labelledby="workflow-heading"
    >
      {/* Section Header */}
      <SectionHeading
        ref={headingRef}
        badge="Simple 5-Step Process"
        heading="How We Bring Your Solution to Life"
        description="We take care of all the technical heavy lifting, so you get a finished, easy-to-use software solution delivered on time without any stress."
        icon={Zap}
        size="md"
        align="center"
        as="h2"
        id="workflow-heading"
        className="mb-12"
      />

      {/* 5 Step Progress Strip */}
      <div className="mb-10 grid grid-cols-2 gap-2 sm:grid-cols-5">
        {stepsData.map((step) => {
          const isSelected = step.id === activeStepId;
          const Icon = step.icon;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => {
                setActiveStepId(step.id);
                setIsAutoPlaying(false);
              }}
              className={`flex flex-col items-center rounded-2xl border p-4 text-center transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "border-blue-600 bg-blue-50/80 shadow-md shadow-blue-500/10 ring-2 ring-blue-600/30 scale-[1.03]"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
                  isSelected
                    ? "bg-blue-700 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <span className="mt-2 text-[10px] font-black uppercase tracking-wider text-blue-700">
                Step {step.stepNumber}
              </span>
              <span className="mt-0.5 text-xs font-bold text-slate-800 leading-tight">
                {step.shortGoal}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Friendly Showcase Card */}
      <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
          {/* Left Column: What We Do in this Step */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                  Step {activeStep.stepNumber} of 05
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  Timeline: {activeStep.timeline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                {activeStep.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {activeStep.explanation}
              </p>
            </div>

            {/* What you receive in this stage */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">
                What You Receive in this Phase:
              </h4>
              <ul className="space-y-2">
                {activeStep.whatYouGet.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Action Button */}
            <div className="flex items-center gap-3 pt-1">
              <Link href="#contact">
                <Button className="cursor-pointer rounded-xl bg-blue-700 hover:bg-blue-800 text-xs sm:text-sm font-bold text-white px-5 py-5 shadow-sm">
                  <span>Start Step 01 With Us</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <span className="text-xs font-semibold text-slate-500">
                {activeStep.statusBadge}
              </span>
            </div>
          </div>

          {/* Right Column: Pinterest-Style Visual Milestone Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-6 sm:p-7 shadow-lg space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-extrabold text-slate-800">
                    Stage Deliverable Snapshot
                  </span>
                </div>
                <span className="text-[11px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">
                  {activeStep.timeline}
                </span>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <span className="text-[11px] font-semibold text-slate-500 block">Project Status</span>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    {activeStep.shortGoal}
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 shadow-xs">
                  <span className="text-[11px] font-bold text-emerald-800 block">Client Peace of Mind</span>
                  <p className="text-xs font-semibold text-emerald-950 mt-0.5">
                    {activeStep.statusBadge}
                  </p>
                </div>

                <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4 shadow-xs flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 block">Veritos Headquarters</span>
                    <p className="text-xs font-bold text-slate-900">Industrial Area Phase 8B, Mohali</p>
                  </div>
                  <Smile className="h-6 w-6 text-blue-600" />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                <span>Auto-Progressing through stages</span>
                <button
                  type="button"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="font-bold text-blue-700 hover:underline cursor-pointer"
                >
                  {isAutoPlaying ? "Pause Auto-Tour" : "Resume Tour"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
