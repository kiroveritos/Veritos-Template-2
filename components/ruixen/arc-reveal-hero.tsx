"use client";

import * as React from "react";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

/* ── types ───────────────────────────────────────────────────── */

export type ArcRevealGreeting = {
  /** Greeting text in the target script */
  text: string;
  /** Optional `lang` attribute applied to the span (helps screen readers / font rendering) */
  lang?: string;
};

export interface ArcRevealHeroProps {
  /** Greetings cycled before the arc reveal. */
  greetings?: ArcRevealGreeting[];
  /** How long each greeting is held on screen (ms). */
  greetingHold?: number;
  /** Duration of the curved curtain reveal (ms). */
  revealDuration?: number;
  /** Outer wrapper class. */
  className?: string;
  /** Class for the intro (pre-reveal) overlay surface. */
  introClassName?: string;
  /** Class for the cycled greeting `<span>`. */
  greetingClassName?: string;
  /** Class for the wrapper around `children` (the revealed content). */
  revealClassName?: string;
  /**
   * Optional `sessionStorage` key — when set, the intro plays only once per
   * session for the same key. Leave unset to replay on every mount.
   */
  storageKey?: string;
  /** Content shown after the curtain reveal (the "landing"). */
  children?: React.ReactNode;
}

/* ── defaults ────────────────────────────────────────────────── */

const DEFAULT_GREETINGS: ArcRevealGreeting[] = [
  { text: "Hello", lang: "en" },
  { text: "你好", lang: "zh" },
  { text: "Bonjour", lang: "fr" },
  { text: "やあ", lang: "ja" },
  { text: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ", lang: "pa" },
];

type Phase = "intro" | "reveal" | "done";

/* ── component ───────────────────────────────────────────────── */

export function ArcRevealHero({
  greetings = DEFAULT_GREETINGS,
  greetingHold = 500,
  revealDuration = 1200,
  className,
  introClassName,
  greetingClassName,
  revealClassName,
  storageKey,
  children,
}: ArcRevealHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const [phase, setPhase] = React.useState<Phase>("intro");
  const [index, setIndex] = React.useState(0);

  // Drive the arc shape from a single 0→1 progress.
  // In light theme splash screen:
  // The curtain starts covering the full screen (y=0 to y=105)
  // and rises upward with a curved bottom arc (t=0 -> edge at 105, t=1 -> edge at -35)
  const progress = useMotionValue(0);
  const arcPath = useTransform(progress, (p: number) => {
    const edge = 105 - p * 140;
    const curve = Math.sin(p * Math.PI) * 22;
    const control = edge - curve;
    return `M 0 0 L 100 0 L 100 ${edge} Q 50 ${control} 0 ${edge} Z`;
  });

  // Lock scroll while splash screen is active
  React.useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  // Honor reduced-motion + replay-suppression on mount.
  React.useEffect(() => {
    if (prefersReducedMotion) {
      setPhase("done");
      return;
    }
    if (storageKey && typeof window !== "undefined") {
      try {
        if (window.sessionStorage.getItem(storageKey) === "done") {
          setPhase("done");
        }
      } catch {
        /* sessionStorage can throw in private mode — fall through */
      }
    }
  }, [prefersReducedMotion, storageKey]);

  // Greeting cycle.
  React.useEffect(() => {
    if (phase !== "intro") return;
    const isLast = index >= greetings.length - 1;
    if (isLast) {
      const t = window.setTimeout(() => setPhase("reveal"), greetingHold + 180);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setIndex((i) => i + 1), greetingHold);
    return () => window.clearTimeout(t);
  }, [phase, index, greetingHold, greetings.length]);

  // Drive the curtain reveal.
  React.useEffect(() => {
    if (phase !== "reveal") return;
    const controls = animate(progress, 1, {
      duration: revealDuration / 1000,
      ease: [0.76, 0, 0.24, 1],
      onComplete: () => {
        if (storageKey && typeof window !== "undefined") {
          try {
            window.sessionStorage.setItem(storageKey, "done");
          } catch {
            /* ignore */
          }
        }
        setPhase("done");
      },
    });
    return () => controls.stop();
  }, [phase, progress, revealDuration, storageKey]);

  const showOverlay = phase !== "done";
  const current = greetings[Math.min(index, greetings.length - 1)];

  return (
    <div className={cn("relative min-h-screen w-full", className)}>
      {/* Landing page content */}
      <div className={cn("relative z-0", revealClassName)}>{children}</div>

      {/* Light theme splash screen overlay */}
      <AnimatePresence>
        {showOverlay && (
          <div
            key="arc-reveal-splash"
            className={cn(
              "fixed inset-0 z-[99999] pointer-events-auto h-screen w-screen overflow-hidden",
              introClassName
            )}
          >
            {/* SVG Arc Curtain: starts full-screen white and retracts upward with a smooth curved arc */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <motion.path
                d={arcPath}
                className="fill-white dark:fill-neutral-950"
              />
            </svg>

            {/* Cycled greeting text on clean white surface */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {phase === "intro" && current && (
                  <motion.div
                    key={`${index}-${current.text}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center gap-2 select-none px-6 text-center"
                  >
                    <span
                      lang={current.lang}
                      className={cn(
                        "text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-6xl md:text-7xl",
                        greetingClassName
                      )}
                    >
                      {current.text}
                    </span>
                    <span className="inline-flex size-2 rounded-full bg-blue-600 animate-pulse mt-1" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ArcRevealHero;
