"use client";

import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  ExternalLink,
  Eye,
  FileCheck,
  FileText,
  Fingerprint,
  GraduationCap,
  HeartHandshake,
  HelpCircle,
  Landmark,
  Lock,
  MessageSquare,
  PhoneCall,
  QrCode,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Smile,
  Sparkles,
  Star,
  ThumbsUp,
  UserCheck,
  Users,
  XCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Global toggle between "The Old Painful Way" vs "The Veritos Modern Way"
  const [viewMode, setViewMode] = useState<"modern" | "old">("modern");

  // Interactive mini-states for cards
  const [certVerified, setCertVerified] = useState(true);
  const [examUnlocked, setExamUnlocked] = useState(false);
  const [faceScanned, setFaceScanned] = useState(true);
  const [smsSent, setSmsSent] = useState(false);

  useGSAP(() => {
    if (headerRef.current) {
      gsap.effects.fadeUpOnScroll(headerRef.current, {
        start: "top 85%",
        duration: 0.8,
      });
    }

    if (gridRef.current) {
      gsap.effects.staggerFadeUpOnScroll(gridRef.current, {
        start: "top 80%",
        duration: 0.85,
        stagger: 0.12,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="mx-auto max-w-6xl px-4 py-20 md:py-28 relative scroll-mt-20"
      aria-labelledby="case-studies-heading"
    >
      <div id="case-studies" className="absolute -top-24" />

      {/* Ambient background soft colors */}
      <div className="pointer-events-none absolute top-10 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-400/10 via-pink-400/5 to-indigo-400/10 blur-3xl" />

      {/* Header with Layman-Friendly Tone */}
      <div ref={headerRef} className="text-center mb-12">
        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-blue-50/80 px-4 py-1.5 shadow-xs backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-blue-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
            Real-World Impact Made Simple
          </span>
        </div>

        <h2
          id="case-studies-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight"
        >
          How We Make Technology Work for Everyday People
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          From getting official government certificates on your phone to protecting university exam papers — see the difference our software makes in real life.
        </p>

        {/* The Fun Interactive "Old Way vs Modern Way" Switcher */}
        <div className="mt-8 inline-flex items-center justify-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner">
          <button
            type="button"
            onClick={() => setViewMode("old")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              viewMode === "old"
                ? "bg-rose-600 text-white shadow-md scale-102"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <XCircle className="h-4 w-4" />
            <span>The Old Way (Slow & Painful)</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("modern")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              viewMode === "modern"
                ? "bg-blue-700 text-white shadow-md scale-102"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span>The Veritos Way (Fast & Simple)</span>
          </button>
        </div>
      </div>

      {/* Pinterest-Style Bento Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* CARD 1 (Large 7-Col Hero Bento): DIGILOCKER FOR CITIZENS */}
        <div className="md:col-span-7 flex flex-col justify-between rounded-3xl border border-blue-200/80 bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/30 p-7 sm:p-9 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:border-blue-300 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                <Landmark className="h-3.5 w-3.5" />
                For Citizens & Students
              </span>
              <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                10 Million+ Citizens Saved
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
              Instant 1-Second Marksheet & Certificate Verification
            </h3>

            {/* Dynamic Comparison Based on Switcher */}
            {viewMode === "old" ? (
              <div className="mt-4 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 space-y-2 animate-fadeIn">
                <p className="text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
                  <XCircle className="h-4 w-4" /> The Old Way:
                </p>
                <p className="text-sm font-medium leading-relaxed">
                  Students and parents had to travel to state offices, stand in long queues for hours, pay notary fees, and wait 3 to 4 weeks just to get a certificate verified. Fake printed marksheet scams were common.
                </p>
              </div>
            ) : (
              <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-2 animate-fadeIn">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-amber-500" /> The Veritos Solution:
                </p>
                <p className="text-sm font-medium leading-relaxed">
                  Citizens simply enter their roll number on their phone. Connected directly to the National DigiLocker repository, official authenticated marksheet proofs download instantly in 1 second with an unforgeable government seal.
                </p>
              </div>
            )}
          </div>

          {/* Interactive Visual Certificate Preview */}
          <div className="mt-6 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 text-sm">
                  AS
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    Aman Sharma — B.Tech Computer Science
                  </h4>
                  <p className="text-xs text-slate-500">Punjab University • Roll: 2024-UMS-8812</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-extrabold text-emerald-700">Govt Verified</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-2">
                <QrCode className="h-8 w-8 text-slate-800" />
                <div className="text-[11px] text-slate-500">
                  <p className="font-semibold text-slate-800">DigiLocker QR Hash</p>
                  <p className="font-mono text-[10px] text-blue-600">DL-PB-2024-AUTHENTIC</p>
                </div>
              </div>

              <Button
                type="button"
                onClick={() => setCertVerified(!certVerified)}
                className="cursor-pointer rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white px-4 py-2"
              >
                {certVerified ? "Tap to Test Re-Verification" : "Verifying..."}
              </Button>
            </div>
          </div>
        </div>

        {/* CARD 2 (5-Col Bento): ZERO-LEAK EXAM PAPERS */}
        <div className="md:col-span-5 flex flex-col justify-between rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 p-7 sm:p-8 shadow-xl shadow-indigo-500/5 hover:shadow-2xl hover:border-indigo-300 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-800">
                <GraduationCap className="h-3.5 w-3.5" />
                For Universities & Colleges
              </span>
              <span className="text-xs font-extrabold text-indigo-700 bg-indigo-100/80 px-2.5 py-1 rounded-full">
                Zero Leaks Ever
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
              100% Leak-Proof Examination Vault
            </h3>

            {viewMode === "old" ? (
              <div className="mt-4 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 space-y-1.5 animate-fadeIn">
                <p className="text-xs font-bold uppercase text-rose-600 flex items-center gap-1">
                  <XCircle className="h-3.5 w-3.5" /> The Old Way:
                </p>
                <p className="text-xs sm:text-sm font-medium leading-relaxed">
                  Physical question paper boxes sent in vans days in advance. High risk of stolen papers, broken seals, leaked WhatsApp photos, and devastating exam cancellations.
                </p>
              </div>
            ) : (
              <div className="mt-4 p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950 space-y-1.5 animate-fadeIn">
                <p className="text-xs font-bold uppercase text-indigo-700 flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-amber-500" /> The Veritos Solution:
                </p>
                <p className="text-xs sm:text-sm font-medium leading-relaxed">
                  Exam papers are digitally locked inside a high-security vault. They can ONLY be unlocked 15 minutes before the exam starts when the center principal scans their fingerprint.
                </p>
              </div>
            )}
          </div>

          {/* Interactive Digital Vault Mockup */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className={`h-5 w-5 ${examUnlocked ? "text-emerald-600" : "text-indigo-600"}`} />
                <span className="text-xs font-bold text-slate-800">
                  {examUnlocked ? "Vault Unlocked (09:45 AM)" : "Digital Vault: TIME-LOCKED"}
                </span>
              </div>
              <span className="text-[11px] font-bold text-slate-500">
                Exam starts: 10:00 AM
              </span>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-100 p-3 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-800">Center Superintendent Auth</p>
                <p className="text-[11px] text-slate-500">Requires Biometric Fingerprint</p>
              </div>
              <Button
                type="button"
                onClick={() => setExamUnlocked(!examUnlocked)}
                className={`cursor-pointer rounded-xl text-xs font-bold px-3 py-1.5 ${
                  examUnlocked
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                }`}
              >
                <Fingerprint className="mr-1.5 h-3.5 w-3.5" />
                {examUnlocked ? "Locked Again" : "Simulate Unlock"}
              </Button>
            </div>
          </div>
        </div>

        {/* CARD 3 (5-Col Bento): SMART ATTENDANCE & 1-CLICK SALARY */}
        <div className="md:col-span-5 flex flex-col justify-between rounded-3xl border border-amber-200/80 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30 p-7 sm:p-8 shadow-xl shadow-amber-500/5 hover:shadow-2xl hover:border-amber-300 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                <Users className="h-3.5 w-3.5" />
                For Businesses & Factories
              </span>
              <span className="text-xs font-extrabold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full">
                1-Click Payroll
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
              Smart Face Attendance & 1-Click Monthly Salary
            </h3>

            {viewMode === "old" ? (
              <div className="mt-4 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 space-y-1.5 animate-fadeIn">
                <p className="text-xs font-bold uppercase text-rose-600 flex items-center gap-1">
                  <XCircle className="h-3.5 w-3.5" /> The Old Way:
                </p>
                <p className="text-xs sm:text-sm font-medium leading-relaxed">
                  Messy paper registers or plastic punch cards. Coworkers punch for each other, attendance gets lost, and accountants spend an entire week doing manual salary calculations.
                </p>
              </div>
            ) : (
              <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-1.5 animate-fadeIn">
                <p className="text-xs font-bold uppercase text-amber-800 flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-amber-600" /> The Veritos Solution:
                </p>
                <p className="text-xs sm:text-sm font-medium leading-relaxed">
                  Employees simply look at the screen at the factory gate. Shift hours, overtime, and government taxes are calculated automatically. Salaries are credited to bank accounts in 1 single click.
                </p>
              </div>
            )}
          </div>

          {/* Interactive Attendance Card */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Smile className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Ramesh Singh (Worker #408)</p>
                  <p className="text-[11px] text-emerald-600 font-semibold">Face Recognized • On-Time</p>
                </div>
              </div>
              <span className="text-xs font-black text-slate-800">8h 15m</span>
            </div>

            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-2.5 flex items-center justify-between text-xs text-emerald-800">
              <span className="font-semibold">Auto PF / ESI & Overtime Computed</span>
              <span className="font-bold text-emerald-700">Ready for Transfer</span>
            </div>
          </div>
        </div>

        {/* CARD 4 (7-Col Bento): INSTANT SMS & 24/7 HELPLINE */}
        <div className="md:col-span-7 flex flex-col justify-between rounded-3xl border border-cyan-200/80 bg-gradient-to-br from-white via-cyan-50/40 to-blue-50/30 p-7 sm:p-9 shadow-xl shadow-cyan-500/5 hover:shadow-2xl hover:border-cyan-300 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-800">
                <Smartphone className="h-3.5 w-3.5" />
                For Public Communication
              </span>
              <span className="text-xs font-extrabold text-cyan-800 bg-cyan-100/80 px-2.5 py-1 rounded-full">
                Sub-2s SMS Delivery
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
              Instant Citizen SMS Alerts & 24/7 Voice Helpline
            </h3>

            {viewMode === "old" ? (
              <div className="mt-4 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 space-y-2 animate-fadeIn">
                <p className="text-xs font-bold uppercase text-rose-600 flex items-center gap-1.5">
                  <XCircle className="h-4 w-4" /> The Old Way:
                </p>
                <p className="text-sm font-medium leading-relaxed">
                  Call centers with constantly busy telephone lines. Citizens waiting on hold for 40 minutes to ask simple questions. Emergency SMS alerts arriving hours late or never reaching the user.
                </p>
              </div>
            ) : (
              <div className="mt-4 p-4 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-950 space-y-2 animate-fadeIn">
                <p className="text-xs font-bold uppercase text-cyan-800 flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-amber-500" /> The Veritos Solution:
                </p>
                <p className="text-sm font-medium leading-relaxed">
                  Direct connection with telecom operators ensures SMS alerts and OTPs land on phones in under 2 seconds. Our smart automated voice helpline answers calls immediately in English, Hindi, and Punjabi without busy signals.
                </p>
              </div>
            )}
          </div>

          {/* Interactive Phone Message Mockup */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Smartphone className="h-3.5 w-3.5 text-blue-600" />
                Live Notification Preview
              </span>
              <span className="text-[11px] font-semibold text-slate-400">Just Now</span>
            </div>

            <div className="rounded-2xl bg-blue-50 border border-blue-100 p-3.5 text-xs text-slate-800 space-y-1">
              <p className="font-bold text-blue-900 flex items-center gap-1">
                <span>Verified Alert: Grievance #PB-9014 Resolved</span>
                <span className="text-[10px] text-blue-700 bg-blue-200/80 px-1.5 py-0.2 rounded">Delivered</span>
              </p>
              <p className="text-slate-600 leading-relaxed">
                Dear Citizen, your electricity billing complaint has been resolved by the Junior Engineer. Current balance updated to ₹0. Thank you!
              </p>
            </div>

            <div className="flex items-center justify-between pt-1">
              <p className="text-[11px] text-slate-500 font-medium">10,000 SMS delivered every second</p>
              <Button
                type="button"
                onClick={() => setSmsSent(!smsSent)}
                className="cursor-pointer rounded-xl bg-cyan-700 hover:bg-cyan-800 text-xs font-bold text-white px-4 py-1.5"
              >
                {smsSent ? "Alert Dispatched ✅" : "Test Alert Delivery"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Layman Summary & Call to Action */}
      <div className="mt-12 rounded-3xl border border-slate-200 bg-gradient-to-r from-blue-50 via-indigo-50/50 to-cyan-50 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1 max-w-xl">
          <h4 className="text-lg sm:text-xl font-black text-slate-900">
            Have a project or problem you want to automate?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600">
            You don't need to understand complex coding. Tell us what your team or department needs, and we'll build the complete easy-to-use solution.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link href="#contact">
            <Button className="cursor-pointer rounded-xl bg-blue-700 hover:bg-blue-800 text-xs sm:text-sm font-bold text-white px-6 py-5 shadow-md shadow-blue-600/20">
              <span>Tell Us What You Need</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <a
            href="tel:8968321512"
            className="flex items-center justify-center rounded-xl border border-slate-300 bg-white p-3 text-slate-700 hover:text-blue-700 hover:border-blue-500 transition-colors shadow-xs"
            title="Call Veritos Solution Team"
          >
            <PhoneCall className="h-4 w-4 text-blue-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
