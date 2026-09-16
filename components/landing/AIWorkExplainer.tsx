"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  AlertTriangle,
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock,
  Eye,
  FileCheck2,
  FileSearch,
  Fingerprint,
  GraduationCap,
  HeartHandshake,
  HelpCircle,
  KeyRound,
  Lock,
  MessageSquare,
  MessageSquareText,
  RotateCcw,
  Scale,
  ShieldCheck,
  Smile,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

interface AIDemoItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  icon: any;
  summary: string;
  humanStory: {
    problem: string;
    howAiHelps: string;
  };
  visualCard: {
    type: "certificate" | "grievance" | "exam" | "attendance";
    tag: string;
    details: { label: string; value: string; highlight?: boolean }[];
  };
  stat: string;
}

const aiDemos: AIDemoItem[] = [
  {
    id: "ocr",
    title: "Instant Certificate & Degree Verification",
    category: "Education & Govt",
    badge: "Under 1 Second",
    icon: FileSearch,
    summary:
      "Stops fake degree fraud by instantly cross-checking uploaded certificates against official government DigiLocker records.",
    humanStory: {
      problem: "College admission staff used to spend weeks manually reviewing piles of paper marksheets. Forged printouts easily slipped through.",
      howAiHelps: "Our smart vision tool reads the roll number and student details from the paper in 0.4 seconds, instantly verifying it with the government database.",
    },
    visualCard: {
      type: "certificate",
      tag: "100% Authentic Government Record",
      details: [
        { label: "Student Name", value: "Aman Sharma (Roll #8812)", highlight: false },
        { label: "Degree Awarded", value: "Bachelor of Technology (8.4 CGPA)", highlight: false },
        { label: "Tamper Check", value: "Passed — Zero Alterations Detected", highlight: true },
        { label: "Verification Time", value: "0.38s (Instant on mobile)", highlight: true },
      ],
    },
    stat: "No more 3-week verification delays",
  },
  {
    id: "grievance",
    title: "Smart Citizen Complaint Routing",
    category: "Public Services",
    badge: "Zero Manual Sorting",
    icon: MessageSquareText,
    summary:
      "Reads citizen complaints, understands the real issue, and automatically assigns it to the exact government officer responsible.",
    humanStory: {
      problem: "Citizens filed complaints that sat on wrong desks for months because clerks didn't know which department handled the issue.",
      howAiHelps: "Smart NLP reads the complaint text (e.g. 'broken water pipe on Station Road') and instantly sends an alert directly to the Water Works Junior Engineer.",
    },
    visualCard: {
      type: "grievance",
      tag: "Auto-Assigned in 1 Second",
      details: [
        { label: "Complaint Summary", value: "Damaged Road & Water Leakage (Model Town)", highlight: false },
        { label: "Detected Urgency", value: "HIGH — Public Safety Hazard", highlight: true },
        { label: "Assigned Department", value: "Municipal Water Works (JE S. Verma)", highlight: true },
        { label: "Resolution SLA", value: "Action Required Within 24 Hours", highlight: false },
      ],
    },
    stat: "85% faster problem resolution",
  },
  {
    id: "exam",
    title: "Anti-Leak Digital Question Paper Vault",
    category: "Confidential Exams",
    badge: "100% Leak Proof",
    icon: Lock,
    summary:
      "Keeps university examination question papers locked in a digital vault until 15 minutes before the exam bell.",
    humanStory: {
      problem: "Question paper leaks during van transportation forced universities to cancel exams, ruining months of student preparation.",
      howAiHelps: "Papers are scrambled into thousands of pieces and locked digitally. They only reassemble and print inside the exam hall when authorized professors swipe their fingerprints.",
    },
    visualCard: {
      type: "exam",
      tag: "Locked Until 09:45 AM",
      details: [
        { label: "Subject Paper", value: "Engineering Mathematics - Semester 6", highlight: false },
        { label: "Vault Security", value: "Military-Grade Digital Encryption", highlight: false },
        { label: "Unlock Condition", value: "Biometric Thumbprint of 2 Nodal Officers", highlight: true },
        { label: "Paper Leak Risk", value: "0.00% Zero Leak Window", highlight: true },
      ],
    },
    stat: "500,000+ Students Protected",
  },
  {
    id: "biometric",
    title: "Fair Face Attendance & Instant Salary",
    category: "Company ERP",
    badge: "Zero Ghost Workers",
    icon: Fingerprint,
    summary:
      "Smart facial recognition recognizes workers in a split second, prevents buddy punching, and calculates accurate payroll.",
    humanStory: {
      problem: "Workers used to punch cards for absent coworkers, creating payroll losses and arguments over overtime hours.",
      howAiHelps: "Workers simply walk past the camera. It checks real human presence, logs shift hours accurately, and sends exact wages directly to their bank accounts.",
    },
    visualCard: {
      type: "attendance",
      tag: "Live Shift Verified",
      details: [
        { label: "Employee Name", value: "Ramesh Singh (Worker #408 - Plant 2)", highlight: false },
        { label: "Shift Timing", value: "09:00 AM to 05:15 PM (8h 15m Present)", highlight: false },
        { label: "Overtime Bonus", value: "+₹350 Automatically Calculated", highlight: true },
        { label: "Salary Transfer", value: "Auto-Credited on 1st of Month", highlight: true },
      ],
    },
    stat: "Zero paycheck calculation errors",
  },
];

export function AIWorkExplainer() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [selectedDemoId, setSelectedDemoId] = useState("ocr");
  const [isSimulating, setIsSimulating] = useState(false);

  const activeDemo = aiDemos.find((d) => d.id === selectedDemoId) || aiDemos[0];

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

  const triggerSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 800);
  };

  return (
    <section
      id="ai-explainer"
      ref={sectionRef}
      className="mx-auto max-w-6xl px-4 py-20 md:py-28"
      aria-labelledby="ai-explainer-heading"
    >
      {/* Section Header */}
      <SectionHeading
        ref={headingRef}
        badge="Smart Features Made Simple"
        heading="Clever Technology That Does the Heavy Lifting"
        description="We use smart automation to take away boring manual chores, stop fraud, and keep citizen and student records 100% safe."
        icon={Sparkles}
        size="md"
        align="center"
        as="h2"
        id="ai-explainer-heading"
        className="mb-12"
      />

      {/* Demo Selector Tabs */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-10">
        {aiDemos.map((demo) => {
          const isSelected = demo.id === selectedDemoId;
          const Icon = demo.icon;

          return (
            <button
              key={demo.id}
              type="button"
              onClick={() => setSelectedDemoId(demo.id)}
              className={`flex flex-col items-start rounded-2xl border p-4 text-left transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "border-blue-600 bg-blue-50/70 shadow-md shadow-blue-500/10 ring-2 ring-blue-600/20 scale-[1.02]"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                  isSelected ? "bg-blue-700 text-white" : "bg-slate-100 text-slate-700"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <span className="mt-3 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                {demo.badge}
              </span>
              <h3 className="mt-1 text-xs font-bold text-slate-900 leading-snug sm:text-sm">
                {demo.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Main Friendly Showcase Card */}
      <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
          {/* Left Column: Human Story & Problem vs Solution */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-800">
                {activeDemo.category}
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                {activeDemo.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                {activeDemo.summary}
              </p>
            </div>

            {/* Before vs After Visual Pill Box */}
            <div className="space-y-3">
              <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-4 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                  The Old Headache:
                </span>
                <p className="text-xs text-rose-900 leading-relaxed font-medium">
                  {activeDemo.humanStory.problem}
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                  How Veritos Solves It:
                </span>
                <p className="text-xs text-emerald-950 leading-relaxed font-medium">
                  {activeDemo.humanStory.howAiHelps}
                </p>
              </div>
            </div>

            {/* Outcome Pill */}
            <div className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-2 text-xs font-bold text-blue-800 border border-blue-100">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              <span>Real Result: {activeDemo.stat}</span>
            </div>
          </div>

          {/* Right Column: Pinterest-Style Visual Mockup Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-6 sm:p-7 shadow-lg">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-extrabold text-slate-800">
                    {activeDemo.visualCard.tag}
                  </span>
                </div>
                <Button
                  type="button"
                  onClick={triggerSimulation}
                  className="cursor-pointer rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white px-3 py-1.5 h-auto"
                >
                  <RotateCcw className={`mr-1.5 h-3 w-3 ${isSimulating ? "animate-spin" : ""}`} />
                  {isSimulating ? "Testing..." : "Test Interactive Check"}
                </Button>
              </div>

              {/* Visual Card Rows */}
              <div className="space-y-2.5">
                {activeDemo.visualCard.details.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between rounded-xl p-3 text-xs ${
                      item.highlight
                        ? "bg-emerald-50/90 border border-emerald-200/90 text-emerald-950 font-bold"
                        : "bg-white border border-slate-200/80 text-slate-700 font-medium"
                    }`}
                  >
                    <span className="text-slate-500 text-[11px]">{item.label}</span>
                    <span className="text-right">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Designed for non-technical staff</span>
                <span className="font-bold text-blue-700">Works 24/7 Autonomously</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
