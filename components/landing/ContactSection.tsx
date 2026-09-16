"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  HelpCircle,
  Mail,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Are you registered on GeM (Government e-Marketplace)?",
    a: "Yes, Veritos Infosolutions Pvt Ltd is fully registered on the GeM portal, enabling central and state government departments, autonomous bodies, and PSUs to directly procure our software licenses, custom development, and cloud services under government procurement guidelines.",
  },
  {
    q: "Do you provide on-site deployment, server setup, and staff training?",
    a: "Yes. Our technical team regularly deploys on-site for state boards, universities, and corporate head offices. We conduct full server setup, security hardening, and provide hands-on operator training with comprehensive user manuals.",
  },
  {
    q: "Do you provide technical support and annual maintenance (AMC)?",
    a: "Absolutely. We offer dedicated 24/7 SLA-backed AMC contracts that include proactive uptime monitoring, disaster recovery backups, security vulnerability patching, and immediate defect resolution.",
  },
  {
    q: "Do you provide specialized IT manpower and consulting?",
    a: "Yes. In addition to turnkey software deliverables, we provide vetted IT technical personnel, systems analysts, database administrators, and project coordinators for long-term or mission-critical projects.",
  },
  {
    q: "What pricing models and contracting structures do you support?",
    a: "We accommodate Fixed Bid (Milestone-based), SaaS subscription per-student / per-transaction, Annual Maintenance Contracts (AMC), and Time & Materials depending on departmental requirements.",
  },
];

function ContactUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useGSAP(() => {
    if (headingRef.current) {
      gsap.effects.fadeUpOnScroll(headingRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    if (formRef.current) {
      gsap.effects.fadeUpOnScroll(formRef.current, {
        start: "top 85%",
        duration: 0.7,
        yOffset: 30,
        markers: false,
      });
    }

    if (faqRef.current) {
      gsap.effects.fadeUpOnScroll(faqRef.current, {
        start: "top 85%",
        duration: 0.7,
        yOffset: 30,
        markers: false,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 6000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="mx-auto max-w-6xl px-4 py-20 sm:py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      {/* Header */}
      <SectionHeading
        ref={headingRef}
        badge="Direct Consultation"
        heading="Get in Touch with Veritos"
        description="Whether you require an e-Governance compliance module, encrypted university examination portal, or custom ERP deployment, our architects are ready to assist."
        size="md"
        align="center"
        as="h2"
        id="contact-heading"
        className="mb-12 md:mb-16"
      />

      <div ref={formRef} className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Left Side: Contact Form */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:col-span-7">
          <div className="mb-6 space-y-1">
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Request a Technical Consultation or Callback
            </h3>
            <p className="text-xs text-slate-500 sm:text-sm">
              Fill out the form below. A senior technical consultant will review and respond within 24 hours.
            </p>
          </div>

          {formSubmitted ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-8 text-center space-y-3">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
              <h4 className="text-lg font-bold text-emerald-900">Inquiry Received!</h4>
              <p className="text-xs text-emerald-700 sm:text-sm">
                Thank you for contacting Veritos Infosolutions. Our solution architect will call you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="full-name" className="text-xs font-semibold text-slate-700">
                    Your Name *
                  </label>
                  <Input
                    id="full-name"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    className="h-11 rounded-xl border-slate-200 bg-slate-50/50 text-sm focus:border-blue-600"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-slate-700">
                    Phone / WhatsApp *
                  </label>
                  <Input
                    id="phone"
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="h-11 rounded-xl border-slate-200 bg-slate-50/50 text-sm focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-700">
                    Official Email *
                  </label>
                  <Input
                    id="email"
                    required
                    type="email"
                    placeholder="name@organization.com"
                    className="h-11 rounded-xl border-slate-200 bg-slate-50/50 text-sm focus:border-blue-600"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="service" className="text-xs font-semibold text-slate-700">
                    Solution of Interest
                  </label>
                  <select
                    id="service"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-sm text-slate-700 focus:border-blue-600 focus:outline-none"
                    defaultValue="e-governance"
                  >
                    <option value="e-governance">e-Governance & DigiLocker Module</option>
                    <option value="ums">University Management System (UMS)</option>
                    <option value="exam">Encrypted Question Paper & Result Engine</option>
                    <option value="erp">Cloud Enterprise ERP / HRMS</option>
                    <option value="mobile">Mobile Application & IVR / SMS Gateway</option>
                    <option value="amc">Server Management & Annual Maintenance (AMC)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-700">
                  Project Details / Requirements *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Describe your organization's requirements, estimated user volume, or timeline..."
                  className="rounded-xl border-slate-200 bg-slate-50/50 text-sm focus:border-blue-600 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 py-6 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:from-blue-800 hover:to-indigo-700"
              >
                <Send className="mr-2 h-4 w-4" />
                Submit Inquiry & Request Callback
              </Button>
            </form>
          )}
        </div>

        {/* Right Side: Mohali Headquarters & Quick Info */}
        <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
          {/* Office Details Card */}
          <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-900 to-blue-950 p-6 text-white shadow-xl sm:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              <Building2 className="h-3.5 w-3.5" />
              <span>Corporate Headquarters</span>
            </div>

            <h4 className="text-xl font-bold tracking-tight text-white">
              Veritos Infosolutions Pvt Ltd
            </h4>

            <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
              D-190, 3rd Floor, Industrial Area Phase 8B, Mohali, Punjab - 160071, India.
            </p>

            <div className="mt-6 space-y-3.5 border-t border-white/10 pt-6 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-slate-200">
                <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                <div>
                  <a href="tel:8968321512" className="font-semibold hover:text-cyan-300">
                    +91-8968321512
                  </a>
                  <span className="mx-2 text-slate-500">|</span>
                  <a href="tel:01724511555" className="hover:text-cyan-300">
                    0172-4511555
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                <a href="mailto:info@veritos.in" className="hover:text-cyan-300">
                  info@veritos.in
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <Clock className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Mon - Sat: 9:30 AM - 6:30 PM IST</span>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4">
              <a
                href="https://wa.me/918968321512"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-700"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Connect via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Trust Badge Card */}
          <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-sm font-bold text-slate-900">
                  GeM Registered Vendor
                </h5>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Government departments can directly initiate procurement and project sanctioning
                  under GeM terms for standard software and customized development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise FAQ Accordion */}
      <div ref={faqRef} className="mt-24 pt-12 border-t border-slate-200">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-blue-600 uppercase">
            <HelpCircle className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </span>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Everything You Need to Know About Partnering With Us
          </h3>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;

            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-slate-900 transition hover:bg-slate-50 cursor-pointer sm:text-base"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-blue-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
