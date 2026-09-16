"use client";

import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const services = [
    { name: "e-Governance & DigiLocker", href: "/#solutions" },
    { name: "University Management System", href: "/#solutions" },
    { name: "Enterprise Resource Planning", href: "/#solutions" },
    { name: "Online Examination Processing", href: "/#solutions" },
    { name: "Mobile App & API Development", href: "/#solutions" },
    { name: "Toll-Free IVR & Bulk SMS", href: "/#solutions" },
    { name: "Server Management & AMC", href: "/#solutions" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Technology Stack", href: "/#process" },
    { name: "Client Stories", href: "/#testimonials" },
    { name: "GeM Government Marketplace", href: "https://gem.gov.in" },
    { name: "Contact & Support", href: "/#contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/veritasinfosolutions/" },
    { name: "Twitter / X", href: "https://twitter.com/Veritos_India" },
    { name: "Facebook", href: "https://www.facebook.com/veritosindia" },
    { name: "Instagram", href: "https://www.instagram.com/veritos_infosolutions/" },
  ];

  return (
    <div className="relative mt-20 overflow-hidden bg-slate-950 text-white">
      {/* Decorative top ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent"></div>

      {/* Hero Marquee Brand Text */}
      <div className="relative border-b border-white/10 pt-16 pb-6 select-none overflow-hidden" ref={marqueeRef}>
        <Marquee className="[--duration:24s]">
          {["V", "E", "R", "I", "T", "O", "S"].map((char, idx) => (
            <span
              key={`veritos-outline-${idx}`}
              className="footer-slang mx-4 font-black tracking-tighter text-white/10 transition-colors duration-300 hover:text-blue-500/20"
            >
              {char}
            </span>
          ))}
        </Marquee>
      </div>

      <footer
        className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:py-20"
        role="contentinfo"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-14">
          {/* Company Summary */}
          <div className="space-y-6 md:col-span-5 lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-md shadow-blue-500/30">
                <span className="text-xl font-black text-white">V</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                  VERITOS
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-blue-400 uppercase">
                  Infosolutions Pvt Ltd
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-400">
              Veritos Infosolutions is a premier IT Service Provider dedicated to uniting information,
              processes, people, and technology. Delivering mission-critical e-Governance frameworks,
              university systems, and enterprise software.
            </p>

            <div className="inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-950/40 px-3.5 py-1.5 text-xs font-medium text-blue-300">
              <ShieldCheck className="h-4 w-4 text-cyan-400" />
              <span>Registered on GeM (Government e-Marketplace)</span>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <span>D-190, 3rd Floor, Industrial Area Phase 8B, Mohali - 160071, Punjab, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-blue-400" />
                <a href="tel:8968321512" className="hover:text-blue-400 transition-colors">
                  +91-8968321512 / 0172-4511555
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-blue-400" />
                <a href="mailto:info@veritos.in" className="hover:text-blue-400 transition-colors">
                  info@veritos.in
                </a>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="mb-5 text-xs font-bold tracking-widest text-blue-400 uppercase">
              Solutions & Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div className="space-y-8 md:col-span-3 lg:col-span-3">
            <div>
              <h3 className="mb-5 text-xs font-bold tracking-widest text-blue-400 uppercase">
                Quick Navigation
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-bold tracking-widest text-blue-400 uppercase">
                Connect With Us
              </h3>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 hover:border-blue-500 hover:text-white transition-colors"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  className="w-full justify-between rounded-xl border-blue-500/30 bg-blue-900/20 text-xs text-white hover:bg-blue-800/40 hover:text-white"
                >
                  <span>Request Instant Callback</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Veritos Infosolutions Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-slate-400 cursor-pointer">SLA Guarantee</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
