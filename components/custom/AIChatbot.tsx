"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Minimize2,
  PhoneCall,
  RefreshCw,
  Send,
  ShieldCheck,
  Sparkles,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  options?: string[];
  cta?: {
    label: string;
    href: string;
  };
}

const initialMessages: Message[] = [
  {
    id: "1",
    sender: "bot",
    text: "Hello! Welcome to Veritos Infosolutions. I am your AI Enterprise Assistant. How can I assist you today with our e-Governance, University Management, or Cloud ERP solutions?",
    time: "Just now",
    options: [
      "Explain e-Governance & DigiLocker",
      "University Management System (UMS)",
      "Are you GeM Registered?",
      "Talk to a Solution Architect",
    ],
  },
];

const knowledgeBase: { [key: string]: { text: string; options?: string[]; cta?: { label: string; href: string } } } = {
  "egovernance": {
    text: "Veritos builds secure, mission-critical e-Governance platforms uniting citizens, government departments, and statutory bodies. Our modules include DigiLocker integration, automated Online Grievance Redressal with SLA escalations, Vendor Management (VMS), and State HRMS.",
    options: ["How does DigiLocker integrate?", "University Management System (UMS)", "Contact Headquarters"],
    cta: { label: "Explore e-Governance Modules", href: "#solutions" },
  },
  "digilocker": {
    text: "Our DigiLocker module links state and educational repositories directly to national DigiLocker APIs, enabling tamper-proof, paperless citizen verification, student degree attestation, and verifiable QR authentication.",
    options: ["University Management System (UMS)", "Talk to a Solution Architect"],
  },
  "university": {
    text: "Veritos University Management System (UMS) handles the complete higher education student lifecycle: Online Admissions & Counselling seat allocation, automated hall tickets, 256-bit encrypted question paper e-transfer, and high-concurrency digital result processing.",
    options: ["Encrypted Exam Paper Transfer", "Explain e-Governance & DigiLocker", "Request a Demo"],
    cta: { label: "View UMS Capabilities", href: "#solutions" },
  },
  "exam": {
    text: "Our encrypted question paper module uses multi-layer 256-bit encryption. Examination centers receive encrypted packets that unlock only minutes before the scheduled exam via dual-custody digital OTPs, eliminating leakage risks.",
    options: ["Talk to a Solution Architect", "University Management System (UMS)"],
  },
  "gem": {
    text: "Yes! Veritos Infosolutions Pvt Ltd is fully registered and verified on GeM (Government e-Marketplace). Central and state government departments, universities, and PSUs can directly procure our turnkey software, SaaS modules, and custom development services via GeM.",
    options: ["Request a Proposal", "Contact Headquarters"],
    cta: { label: "Request GeM Order Guidance", href: "#contact" },
  },
  "erp": {
    text: "Our Enterprise Cloud ERP & SaaS applications integrate biometric attendance synchronization, employee payroll, inventory forecasting, multi-level purchase order approvals, and comprehensive executive dashboards.",
    options: ["Explain e-Governance & DigiLocker", "Talk to a Solution Architect"],
    cta: { label: "View ERP Specs", href: "#solutions" },
  },
  "contact": {
    text: "You can reach Veritos headquarters directly:\n📍 D-190, 3rd Floor, Industrial Area Phase 8B, Mohali, Punjab - 160071\n📞 Phone: +91-8968321512 / 0172-4511555\n✉️ Email: info@veritos.in\nOur team is available Mon-Sat, 9:30 AM to 6:30 PM IST.",
    options: ["Call Us Now", "Connect via WhatsApp"],
    cta: { label: "Open Contact Form", href: "#contact" },
  },
  "call": {
    text: "Our senior solution consultants are ready to speak with you! You can call us directly at +91-8968321512 or request an instant callback through our contact form.",
    options: ["Open Contact Form", "Explain e-Governance & DigiLocker"],
    cta: { label: "Call +91-8968321512", href: "tel:8968321512" },
  },
  "pricing": {
    text: "We offer flexible enterprise pricing models:\n1. Fixed-Bid Milestone Contracts (Government & Enterprise tenders)\n2. SaaS Subscription (Per-student / Per-transaction basis)\n3. 24/7 SLA Annual Maintenance Contracts (AMC)\n4. Dedicated IT Manpower Consulting.",
    options: ["Talk to a Solution Architect", "Are you GeM Registered?"],
    cta: { label: "Request Custom Quote", href: "#contact" },
  },
  "ai": {
    text: "Veritos integrates enterprise AI into state governance and university administration: automated OCR document parsing, sentiment analysis on citizen grievances for auto-routing, anomaly detection in biometric attendance, and intelligent exam center load balancing.",
    options: ["View AI Workflow", "Explain e-Governance & DigiLocker"],
    cta: { label: "Explore AI Workflows", href: "#ai-workflow" },
  },
};

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const findBestResponse = (query: string) => {
    const q = query.toLowerCase();
    if (q.includes("gem") || q.includes("procure") || q.includes("government marketplace") || q.includes("tender")) {
      return knowledgeBase["gem"];
    }
    if (q.includes("egov") || q.includes("governance") || q.includes("grievance") || q.includes("vendor")) {
      return knowledgeBase["egovernance"];
    }
    if (q.includes("digilocker") || q.includes("document") || q.includes("verification")) {
      return knowledgeBase["digilocker"];
    }
    if (q.includes("university") || q.includes("ums") || q.includes("admission") || q.includes("counselling") || q.includes("result") || q.includes("academic")) {
      return knowledgeBase["university"];
    }
    if (q.includes("exam") || q.includes("paper") || q.includes("question") || q.includes("transfer")) {
      return knowledgeBase["exam"];
    }
    if (q.includes("erp") || q.includes("hrms") || q.includes("payroll") || q.includes("attendance")) {
      return knowledgeBase["erp"];
    }
    if (q.includes("call") || q.includes("phone") || q.includes("whatsapp") || q.includes("speak")) {
      return knowledgeBase["call"];
    }
    if (q.includes("contact") || q.includes("address") || q.includes("office") || q.includes("location") || q.includes("mohali") || q.includes("email")) {
      return knowledgeBase["contact"];
    }
    if (q.includes("price") || q.includes("pricing") || q.includes("cost") || q.includes("model") || q.includes("amc") || q.includes("quote")) {
      return knowledgeBase["pricing"];
    }
    if (q.includes("ai") || q.includes("artificial intelligence") || q.includes("workflow") || q.includes("automation") || q.includes("machine learning")) {
      return knowledgeBase["ai"];
    }

    return {
      text: "Thank you for reaching out! Veritos specializes in e-Governance, University Management (UMS), Enterprise Cloud ERP, and Mobile/IVR telecom gateways. You can also connect directly with our Mohali technical team at +91-8968321512.",
      options: ["Explain e-Governance & DigiLocker", "University Management System (UMS)", "Are you GeM Registered?", "Talk to a Solution Architect"],
      cta: { label: "Contact Solution Architect", href: "#contact" },
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      time: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const responseData = findBestResponse(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: responseData.text,
        time: "Just now",
        options: responseData.options,
        cta: responseData.cta,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const resetChat = () => {
    setMessages(initialMessages);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {!isOpen && (
          <div className="animate-bounce rounded-full border border-blue-200 bg-white/95 px-3.5 py-1.5 text-xs font-bold text-slate-800 shadow-lg backdrop-blur-md">
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-blue-600 animate-spin" />
              Ask Veritos AI Assistant
            </span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-cyan-500 text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-600/50 focus:outline-none focus:ring-4 focus:ring-blue-400/30 cursor-pointer"
          aria-label={isOpen ? "Close AI Chatbot" : "Open AI Chatbot"}
        >
          {isOpen ? (
            <X className="h-6 w-6 transition-transform group-hover:rotate-90" />
          ) : (
            <Bot className="h-7 w-7 transition-transform group-hover:scale-110" />
          )}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 border-2 border-white"></span>
            </span>
          )}
        </button>
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 z-50 flex h-[560px] max-h-[82vh] w-[92vw] max-w-[420px] flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 shadow-2xl shadow-slate-900/20 backdrop-blur-2xl transition-all duration-300 sm:right-6"
          role="dialog"
          aria-label="Veritos AI Assistant Chat"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-md shadow-cyan-500/20">
                <Bot className="h-5 w-5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-500"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold tracking-tight">Veritos AI Assistant</h3>
                  <span className="rounded-full bg-blue-500/20 px-1.5 py-0.5 text-[9px] font-semibold text-cyan-300">
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-slate-300">Govt & Enterprise Architecture</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetChat}
                title="Restart chat"
                className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                    <Bot className="h-4 w-4" />
                  </div>
                )}

                <div className={`max-w-[82%] space-y-2`}>
                  <div
                    className={`rounded-2xl px-4 py-3 leading-relaxed whitespace-pre-line shadow-xs ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-700 to-indigo-600 text-white rounded-br-xs"
                        : "border border-slate-100 bg-slate-50/90 text-slate-800 rounded-bl-xs"
                    }`}
                  >
                    {msg.text}

                    {msg.cta && (
                      <div className="mt-2.5 pt-2 border-t border-slate-200/60">
                        <a
                          href={msg.cta.href}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1 font-bold text-blue-700 hover:text-blue-900 underline"
                        >
                          <span>{msg.cta.label}</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Suggestion Chips */}
                  {msg.options && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.options.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          type="button"
                          onClick={() => handleSendMessage(opt)}
                          className="rounded-full border border-blue-200/80 bg-blue-50/70 px-2.5 py-1 text-[11px] font-medium text-blue-700 transition hover:bg-blue-100 hover:border-blue-300 cursor-pointer"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === "user" && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-2.5 text-slate-500 rounded-bl-xs">
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse delay-100"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse delay-200"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="border-t border-slate-100 bg-white p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about e-Governance, UMS, GeM..."
                className="h-10 rounded-xl border-slate-200 bg-slate-50 text-xs focus:border-blue-600"
              />
              <Button
                type="submit"
                size="sm"
                disabled={!inputValue.trim()}
                className="h-10 w-10 shrink-0 rounded-xl bg-blue-700 text-white hover:bg-blue-800 cursor-pointer disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400 px-1">
              <span>Verified Veritos Knowledge Base</span>
              <a href="tel:8968321512" className="flex items-center gap-1 text-blue-600 font-semibold hover:underline">
                <PhoneCall className="h-2.5 w-2.5" />
                +91-8968321512
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
