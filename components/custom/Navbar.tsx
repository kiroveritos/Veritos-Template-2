"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { PhoneCall, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      href: "/",
      description: "Return to homepage",
    },
    {
      name: "Solutions",
      href: "/#solutions",
      description: "e-Governance, Academics, and Enterprise ERP",
    },
    {
      name: "Execution Process",
      href: "/#process",
      description: "Our mission-critical delivery lifecycle",
    },
    {
      name: "Clients",
      href: "/#testimonials",
      description: "Client reviews and proven deployments",
    },
    {
      name: "About Us",
      href: "/about",
      description: "Who we are and our vision",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveIndex(-1);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveIndex(-1);
    buttonRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((prev) => (prev + 1) % navLinks.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((prev) => (prev - 1 + navLinks.length) % navLinks.length);
        break;
      case "Home":
        event.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveIndex(navLinks.length - 1);
        break;
      case "Escape":
        closeMenu();
        break;
    }
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector("a") as HTMLAnchorElement;
      if (firstLink) {
        firstLink.focus();
      }
    }
  }, [isMenuOpen]);

  useGSAP(() => {
    const headerEl = navRef.current;
    if (!headerEl) return;

    let isHidden = false;
    let headerHeight = headerEl.offsetHeight;
    gsap.set(headerEl, { y: 0, willChange: "transform" });

    const onResize = () => {
      headerHeight = headerEl.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    const st = ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const scrolled = self.scroll();
        if (isMenuOpen) {
          if (isHidden) isHidden = false;
          gsap.to(headerEl, { y: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" });
          return;
        }

        if (scrolled <= 0) {
          if (isHidden) isHidden = false;
          gsap.to(headerEl, { y: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" });
          return;
        }

        if (self.direction === 1 && scrolled > 80) {
          if (!isHidden) {
            isHidden = true;
            gsap.to(headerEl, {
              y: -headerHeight - 20,
              duration: 0.4,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        } else if (self.direction === -1) {
          if (isHidden) {
            isHidden = false;
            gsap.to(headerEl, { y: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" });
          }
        }
      },
    });

    return () => {
      st.kill();
      window.removeEventListener("resize", onResize);
      gsap.set(headerEl, { y: 0 });
    };
  }, [isMenuOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="focus:bg-primary focus:text-primary-foreground focus:ring-ring !sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:ring-2 focus:ring-offset-2 focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        ref={navRef}
        className="fixed inset-x-0 top-3 z-50 mx-auto w-[94%] max-w-6xl rounded-2xl border border-slate-200/80 bg-white/85 px-4 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 md:px-6"
        role="banner"
        aria-label="Main navigation"
      >
        <div className="mx-auto">
          <nav
            className="flex items-center justify-between py-3"
            role="navigation"
            aria-label="Primary navigation"
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="group flex items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                aria-label="Veritos Infosolutions - Homepage"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-cyan-500 shadow-md shadow-blue-500/25 transition-transform duration-300 group-hover:scale-105">
                  <span className="text-xl font-black tracking-tighter text-white">V</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-lg font-extrabold tracking-tight text-slate-900 leading-none">
                    VERITOS
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider text-blue-600 uppercase">
                    Infosolutions
                  </span>
                </div>
              </Link>

              <div className="hidden items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/60 px-2.5 py-1 text-[11px] font-semibold text-blue-700 md:flex">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
                <span>GeM Registered</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <ul
              className="hidden items-center space-x-1 lg:flex"
              role="menubar"
              aria-label="Main navigation menu"
            >
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.name} role="none">
                    <Link
                      href={link.href}
                      className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-slate-100/80 hover:text-blue-600 ${
                        isActive ? "font-semibold text-blue-600" : "text-slate-600"
                      }`}
                      role="menuitem"
                      aria-describedby={`nav-description-${index}`}
                      onFocus={() => setActiveIndex(index)}
                      onBlur={() => setActiveIndex(-1)}
                    >
                      {link.name}
                      <span id={`nav-description-${index}`} className="sr-only">
                        {link.description}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA & Phone */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:8968321512"
                className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 sm:flex"
                title="Call Veritos Team"
              >
                <PhoneCall className="h-3.5 w-3.5 text-blue-600" />
                <span>+91-8968321512</span>
              </a>

              <Link href="/#contact">
                <Button
                  size={"sm"}
                  className="rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-200 hover:from-blue-800 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-600/30"
                  aria-label="Contact Veritos for solution inquiry"
                >
                  Get in Touch
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  ref={buttonRef}
                  onClick={toggleMenu}
                  className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-5 bg-slate-800 transition-all duration-200 ${
                      isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-5 bg-slate-800 transition-opacity duration-200 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-5 bg-slate-800 transition-all duration-200 ${
                      isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                    }`}
                  />
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Navigation Drawer */}
          {isMenuOpen && (
            <div
              className="border-t border-slate-100 py-4 lg:hidden"
              ref={menuRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <ul className="space-y-1" role="menu">
                {navLinks.map((link, index) => (
                  <li key={link.name} role="none">
                    <Link
                      href={link.href}
                      className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                      role="menuitem"
                      onClick={closeMenu}
                      onKeyDown={(e) => handleKeyDown(e)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-slate-100 pt-4 space-y-2">
                <a
                  href="tel:8968321512"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-sm font-semibold text-slate-700"
                >
                  <PhoneCall className="h-4 w-4 text-blue-600" />
                  +91-8968321512
                </a>
                <Link href="/#contact" onClick={closeMenu} className="block">
                  <Button className="w-full rounded-xl bg-blue-700 py-2.5 text-white hover:bg-blue-800">
                    Request Consultation
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
