"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  TripadvisorIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-white/10 bg-[#8B181B] px-5 pb-6 pt-14 text-white md:px-10 md:pt-16">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1.4fr_1.4fr] lg:gap-12">
          {/* Column 1: Brand Info */}
          <div>
            <Link href="/" aria-label="Visitors Destination home" className="inline-block">
              <Image
                src="/logo/logo-wh.png"
                alt="Visitors Destination"
                width={160}
                height={96}
                className="h-auto w-[130px] object-contain"
              />
            </Link>

            <div className="mt-6 space-y-3.5 text-xs font-normal leading-5 text-white/90">
              <p className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white" />
                <span className="text-white/90">Al Fahim Tower, Abu Dhabi, UAE.</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0 text-white" />
                <a href="tel:+971544278880" className="footer-link text-white/90">
                  +971 544278880
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0 text-white" />
                <a href="mailto:contact@visitorsdestination.com" className="footer-link break-all text-white/90">
                  contact@visitorsdestination.com
                </a>
              </p>
            </div>

            <div className="mt-7">
              <p className="text-xs font-bold uppercase tracking-wider text-white">Follow us on</p>
              <div className="mt-3 flex items-center gap-4 text-white">
                <a aria-label="Instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110 hover:text-white/80">
                  <InstagramIcon size={18} />
                </a>
                <a aria-label="Facebook" href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110 hover:text-white/80">
                  <FacebookIcon size={18} />
                </a>
                <a aria-label="X" href="https://x.com/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110 hover:text-white/80">
                  <XIcon size={16} />
                </a>
                <a aria-label="YouTube" href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110 hover:text-white/80">
                  <YoutubeIcon size={19} />
                </a>
                <a aria-label="Tripadvisor" href="https://www.tripadvisor.com/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110 hover:text-white/80">
                  <TripadvisorIcon size={19} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[15px] font-bold tracking-tight text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-xs font-normal text-white/85">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="#about" className="footer-link">About us</Link></li>
              <li><Link href="#experiences" className="footer-link">Tours</Link></li>
              <li><Link href="#services" className="footer-link">Services</Link></li>
              <li><Link href="#reviews" className="footer-link">Blog</Link></li>
              <li><a href="tel:+971544278880" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Desert Adventures */}
          <div>
            <h3 className="text-[15px] font-bold tracking-tight text-white">Desert Adventures</h3>
            <ul className="mt-4 space-y-2 text-xs font-normal text-white/85">
              <li><Link href="#services" className="footer-link">Evening Desert Safari Abu Dhabi</Link></li>
              <li><Link href="#services" className="footer-link">Abu Dhabi Morning Desert Safari</Link></li>
              <li><Link href="#services" className="footer-link">Sunrise Desert Safari Abu Dhabi</Link></li>
              <li><Link href="#services" className="footer-link">Overnight Desert Camping Abu Dhabi</Link></li>
              <li><Link href="#services" className="footer-link">Romantic Dune Dinner in Abu Dhabi</Link></li>
              <li><Link href="#services" className="footer-link">Private Dune Dinner in Abu Dhabi</Link></li>
              <li><Link href="#services" className="footer-link">Quad Biking Abu Dhabi</Link></li>
              <li><Link href="#services" className="footer-link">Camel Ride Abu Dhabi Tour</Link></li>
              <li><Link href="#services" className="footer-link">Liwa Oasis Camping Overnight</Link></li>
              <li><Link href="#services" className="footer-link">Self Drive in Liwa Desert</Link></li>
              <li><Link href="#services" className="footer-link">Liwa Sunset Desert Safari</Link></li>
              <li><Link href="#services" className="footer-link">Self Drive in Al Khatim Desert</Link></li>
              <li><Link href="#services" className="footer-link">Liwa Oasis Desert Safari</Link></li>
              <li><Link href="#services" className="footer-link">Half Day Desert Safari Abu Dhabi</Link></li>
            </ul>
          </div>

          {/* Column 4: Sightseeing Tours & Payment Methods */}
          <div>
            <h3 className="text-[15px] font-bold tracking-tight text-white">Sightseeing Tours</h3>
            <ul className="mt-4 space-y-2 text-xs font-normal text-white/85">
              <li><Link href="#services" className="footer-link">Abu Dhabi Half-Day City Tour</Link></li>
              <li><Link href="#services" className="footer-link">Best Abu Dhabi City Tours</Link></li>
              <li><Link href="#services" className="footer-link">Dubai Full-Day City Tour From Abu Dhabi</Link></li>
              <li><Link href="#services" className="footer-link">Al Ain Full Day City Tour From Abu Dhabi</Link></li>
              <li><Link href="#services" className="footer-link">Al Wathba Fossil Dunes Abu Dhabi Tour</Link></li>
              <li><Link href="#services" className="footer-link">East Coast Tour</Link></li>
              <li><Link href="#services" className="footer-link">Falcon Tour Abu Dhabi</Link></li>
              <li><Link href="#services" className="footer-link">Salt Lake Abu Dhabi</Link></li>
              <li><Link href="#services" className="footer-link">Abu Dhabi Dune Buggy Tour</Link></li>
              <li><Link href="#services" className="footer-link">Grand Mosque and Louver Museum</Link></li>
              <li><Link href="#services" className="footer-link">Abu Dhabi Full Day Sightseeing Tour</Link></li>
            </ul>

            <div className="mt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Payment Methods</h4>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <div className="flex h-7 items-center justify-center rounded bg-white px-2.5 py-1 shadow-xs">
                  <Image
                    src="/footer/payment-option/netbanking.png"
                    alt="Net Banking"
                    width={70}
                    height={20}
                    className="h-4 w-auto object-contain"
                  />
                </div>
                <div className="flex h-7 items-center justify-center rounded bg-white px-2.5 py-1 shadow-xs">
                  <Image
                    src="/footer/payment-option/paypal.png"
                    alt="PayPal"
                    width={60}
                    height={20}
                    className="h-4 w-auto object-contain"
                  />
                </div>
                <div className="flex h-7 items-center justify-center rounded bg-white px-2.5 py-1 shadow-xs">
                  <Image
                    src="/footer/payment-option/visa.png"
                    alt="Visa"
                    width={45}
                    height={20}
                    className="h-4 w-auto object-contain"
                  />
                </div>
                <div className="flex h-7 items-center justify-center rounded bg-white px-2.5 py-1 shadow-xs">
                  <Image
                    src="/footer/payment-option/coa.png"
                    alt="Cash on Arrival"
                    width={45}
                    height={20}
                    className="h-4 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-white/15 py-5 text-xs font-normal text-white/75 sm:flex-row sm:items-center">
          <p>© {currentYear} Visitors Destination. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="https://www.techsoftweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 transition-colors hover:text-white hover:underline underline-offset-4"
            >
              Web Design Company in Kochi Techsoft
            </a>
            <span className="text-white/40">|</span>
            <a href="#top" className="footer-link text-white/85">Back to top ↑</a>
            <span className="text-white/60">Travel well. Discover more.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
