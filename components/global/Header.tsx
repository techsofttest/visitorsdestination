"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Menu, Phone, Plus, X } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  TripadvisorIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import {
  WHATSAPP_URL,
  navLinks,
  desertAdventurePackages,
  citySightseeingPackages,
} from "@/components/data/content";
import { PackagesDropdown } from "@/components/ui/PackagesDropdown";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const [mobilePackagesOpen, setMobilePackagesOpen] = useState(false);
  const [mobileDesertOpen, setMobileDesertOpen] = useState(false);
  const [mobileCityOpen, setMobileCityOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  // Track scroll position and direction to only show header on scrolling up
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 40) {
        // At the top of the page - show original unscrolled header
        setIsScrolled(false);
        setIsVisible(true);
      } else {
        setIsScrolled(true);

        if (currentScrollY < lastScrollY.current) {
          // Scrolling UP - reveal boxed header
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY.current + 5) {
          // Scrolling DOWN - hide header and close dropdowns
          setIsVisible(false);
          setPackagesOpen(false);
          setMobileMenuOpen(false);
        }
      }

      lastScrollY.current = currentScrollY;
    }

    lastScrollY.current = window.scrollY;
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPackagesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? `fixed top-3 px-4 md:px-8 lg:px-10 ${isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-24 opacity-0 pointer-events-none"
        }`
        : "absolute top-0 px-0 translate-y-0 opacity-100"
        }`}
    >
      {/* Top utility bar - visible before scroll */}
      {!isScrolled && (
        <div className="hidden bg-[#8B181B] text-white md:block border-b border-white/10">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-2.5 text-xs lg:px-10">
            <p className="tracking-wide text-white/90 pl-48 md:pl-48 lg:pl-60 xl:pl-64">
              Your gateway to unforgettable UAE experiences.
            </p>
            <div className="flex items-center gap-5">
              <a
                className="inline-flex items-center gap-2 transition-colors hover:text-[#FDB414]"
                href="tel:+971544278880"
              >
                <Phone size={13} /> +971 54 427 8880
              </a>
              <span className="h-3 w-px bg-white/30" />
              <div className="flex items-center gap-3.5 text-white/90">
                <a
                  aria-label="Instagram"
                  className="transition-transform hover:scale-110 hover:text-white"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon size={14} />
                </a>
                <a
                  aria-label="Facebook"
                  className="transition-transform hover:scale-110 hover:text-white"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon size={14} />
                </a>
                <a
                  aria-label="X"
                  className="transition-transform hover:scale-110 hover:text-white"
                  href="https://x.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <XIcon size={13} />
                </a>
                <a
                  aria-label="YouTube"
                  className="transition-transform hover:scale-110 hover:text-white"
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <YoutubeIcon size={15} />
                </a>
                <a
                  aria-label="Tripadvisor"
                  className="transition-transform hover:scale-110 hover:text-white"
                  href="https://www.tripadvisor.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TripadvisorIcon size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main navigation header */}
      <header
        className={`transition-all duration-300 ${isScrolled
          ? "mx-auto max-w-[1360px] rounded-lg bg-white shadow-md"
          : "relative"
          }`}
      >
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between transition-all duration-300 ${isScrolled
            ? "px-5 py-2.5 md:px-7 md:py-3"
            : "items-start px-5 md:px-8 lg:px-10"
            }`}
        >
          {/* Logo */}
          {isScrolled ? (
            /* Scrolled state: Clean logo without red banner */
            <Link
              href="/"
              aria-label="Visitors Destination home"
              className="relative z-20 flex items-center transition-transform hover:opacity-90"
            >
              <Image
                src="/logo/logo-tern.png"
                alt="Visitors Destination"
                width={150}
                height={55}
                priority
                className="h-9 w-auto object-contain md:h-11"
              />
            </Link>
          ) : (
            /* Unscrolled state: Identical to current vertical banner extending from top */
            <Link
              href="/"
              aria-label="Visitors Destination home"
              className="group relative z-20 flex flex-col items-center bg-[#8B181B] px-5 pb-6 pt-3 md:-mt-9 md:pt-4 shadow-2xl transition-transform hover:-translate-y-0.5 md:px-6 md:pb-8 rounded-b-sm border-x border-b border-black/15"
            >
              <Image
                src="/logo/logo-wh.png"
                alt="Visitors Destination"
                width={160}
                height={96}
                priority
                className="h-auto w-[112px] object-contain md:w-[138px]"
              />
              {/* Banner bottom ribbon notch detail */}
              <div className="absolute -bottom-2 left-0 right-0 flex justify-center">
                <div className="h-2 w-full bg-[#8B181B] [clip-path:polygon(0_0,50%_100%,100%_0)]" />
              </div>
            </Link>
          )}

          {/* Desktop Navigation */}
          <nav
            className={`hidden items-center gap-6 lg:flex ${isScrolled ? "text-[#1E1E1E]" : "pt-4 text-white"
              }`}
          >
            {navLinks.map((link) => {
              // Packages menu with full-width category & package switcher dropdown
              if (link.label === "Packages") {
                return (
                  <div
                    key={link.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setPackagesOpen(true)}
                    onMouseLeave={() => setPackagesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setPackagesOpen((prev) => !prev)}
                      aria-expanded={packagesOpen}
                      className={`group inline-flex whitespace-nowrap items-center gap-1.5 py-2 text-sm font-medium transition-colors ${isScrolled
                        ? "text-[#1E1E1E] hover:text-[#8B181B]"
                        : "!text-white hover:opacity-80"
                        }`}
                    >
                      <span>{link.label}</span>
                      <Plus
                        size={17}
                        strokeWidth={2.4}
                        className={`transition-transform duration-300 ${
                          packagesOpen ? "rotate-45" : ""
                        } ${isScrolled ? "text-[#1E1E1E]" : "text-white"}`}
                      />
                      <span
                        className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-[#8B181B]" : "bg-white"
                          }`}
                      />
                    </button>

                    {/* Full Width Packages Dropdown */}
                    <PackagesDropdown
                      isOpen={packagesOpen}
                      onClose={() => setPackagesOpen(false)}
                    />
                  </div>
                );
              }

              // Standard Navigation Link (including Our services without dropdown)
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`group relative whitespace-nowrap py-2 text-sm font-medium transition-colors ${isScrolled
                    ? "text-[#1E1E1E] hover:text-[#8B181B]"
                    : "!text-white hover:opacity-80"
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-[#8B181B]" : "bg-white"
                      }`}
                  />
                </Link>
              );
            })}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className={`group inline-flex whitespace-nowrap items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${isScrolled
                ? ""
                : "py-2 !text-white hover:opacity-80"
                }`}
            >
              Plan your trip{" "}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </nav>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className={`relative z-10 inline-flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-80 lg:hidden ${isScrolled
              ? "text-[#8B181B]"
              : "mt-3 !text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]"
              }`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div
            className={`rounded-b-2xl bg-white p-5 text-[#242424] shadow-2xl lg:hidden ${isScrolled ? "border-t border-black/5" : "mx-4 mt-2 rounded-t-sm"
              }`}
          >
            <nav className="flex flex-col">
              {navLinks.map((link) => {
                // Mobile Packages Accordion with Desert Adventure & City Sightseeing submenus
                if (link.label === "Packages") {
                  return (
                    <div key={link.label} className="border-b border-black/5 py-3">
                      <button
                        type="button"
                        onClick={() => setMobilePackagesOpen((prev) => !prev)}
                        className="flex w-full items-center justify-between text-left text-sm font-medium text-[#242424] transition-colors hover:text-[#8B181B]"
                      >
                        <span>{link.label}</span>
                        <Plus
                          size={16}
                          className={`transition-transform duration-200 ${mobilePackagesOpen ? "rotate-45 text-[#8B181B]" : "text-black/60"
                            }`}
                        />
                      </button>

                      {mobilePackagesOpen && (
                        <div className="mt-3 space-y-2.5 pl-3 pr-1 pt-1">
                          {/* Desert Adventure Subcategory */}
                          <div>
                            <button
                              type="button"
                              onClick={() => setMobileDesertOpen((prev) => !prev)}
                              className="flex w-full items-center justify-between py-1 text-xs font-bold text-[#8B181B]"
                            >
                              <span>Desert Adventure ({desertAdventurePackages.length})</span>
                              <span className="text-[11px] font-normal text-black/50">
                                {mobileDesertOpen ? "−" : "+"}
                              </span>
                            </button>
                            {mobileDesertOpen && (
                              <div className="mt-1 space-y-1.5 pl-2 max-h-48 overflow-y-auto">
                                {desertAdventurePackages.map((pkg) => (
                                  <Link
                                    key={pkg.title}
                                    href={pkg.href}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobilePackagesOpen(false);
                                    }}
                                    className="block py-1 text-[11px] text-[#555] hover:text-[#8B181B]"
                                  >
                                    {pkg.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* City Sightseeing Subcategory */}
                          <div className="border-t border-black/5 pt-2">
                            <button
                              type="button"
                              onClick={() => setMobileCityOpen((prev) => !prev)}
                              className="flex w-full items-center justify-between py-1 text-xs font-bold text-[#8B181B]"
                            >
                              <span>City Sightseeing ({citySightseeingPackages.length})</span>
                              <span className="text-[11px] font-normal text-black/50">
                                {mobileCityOpen ? "−" : "+"}
                              </span>
                            </button>
                            {mobileCityOpen && (
                              <div className="mt-1 space-y-1.5 pl-2 max-h-48 overflow-y-auto">
                                {citySightseeingPackages.map((pkg) => (
                                  <Link
                                    key={pkg.title}
                                    href={pkg.href}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobilePackagesOpen(false);
                                    }}
                                    className="block py-1 text-[11px] text-[#555] hover:text-[#8B181B]"
                                  >
                                    {pkg.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-black/5 py-3 text-sm transition-colors hover:text-[#8B181B]"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-[#8B181B] px-4 py-3 text-sm font-semibold text-white"
              >
                Contact us <ArrowUpRight size={16} />
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
