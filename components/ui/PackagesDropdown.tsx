"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Clock, Star, ArrowUpRight } from "lucide-react";
import { DesertIcon, CityIcon } from "@/components/ui/SocialIcons";
import { FEATURED_DESERT_PACKAGES } from "@/components/home/FeaturedPackagesSection";
import { citySightseeingPackages, WHATSAPP_URL } from "@/components/data/content";

interface PackagesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function PackagesDropdownContent({
  onClose,
}: {
  onClose?: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"featured" | "city">("featured");

  return (
    <div className="w-[960px] max-w-[96vw] overflow-hidden rounded-2xl bg-white text-[#111111] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.22)] border border-black/10">
      <div className="grid grid-cols-12">
        {/* Left Column: Category Navigation Sidebar */}
        <div className="col-span-3 border-r border-black/5 bg-[#FBF9F6] p-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="block px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#888]">
              Navigation
            </span>

            {/* Tab 1: Featured Desert Safaris */}
            <button
              type="button"
              onClick={() => setActiveTab("featured")}
              onMouseEnter={() => setActiveTab("featured")}
              className={`group flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left text-[13px] font-bold transition-all cursor-pointer ${activeTab === "featured"
                ? "bg-[#B85D19] text-white shadow-sm"
                : "text-[#2D241C] hover:bg-white hover:text-[#B85D19]"
                }`}
            >
              <span className="flex items-center gap-2.5">
                <DesertIcon
                  size={17}
                  className={`shrink-0 transition-colors ${activeTab === "featured" ? "text-white" : "text-[#B85D19]"
                    }`}
                />
                <span>Desert Safaris</span>
              </span>
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold transition-colors ${activeTab === "featured"
                  ? "bg-white/20 text-white"
                  : "bg-black/5 text-[#666] group-hover:bg-[#B85D19]/10 group-hover:text-[#B85D19]"
                  }`}
              >
                {FEATURED_DESERT_PACKAGES.length}
              </span>
            </button>

            {/* Tab 2: City Sightseeing */}
            <button
              type="button"
              onClick={() => setActiveTab("city")}
              onMouseEnter={() => setActiveTab("city")}
              className={`group flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left text-[13px] font-bold transition-all cursor-pointer ${activeTab === "city"
                ? "bg-[#B85D19] text-white shadow-sm"
                : "text-[#2D241C] hover:bg-white hover:text-[#B85D19]"
                }`}
            >
              <span className="flex items-center gap-2.5">
                <CityIcon
                  size={17}
                  className={`shrink-0 transition-colors ${activeTab === "city" ? "text-white" : "text-[#B85D19]"
                    }`}
                />
                <span>City Sightseeing</span>
              </span>
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold transition-colors ${activeTab === "city"
                  ? "bg-white/20 text-white"
                  : "bg-black/5 text-[#666] group-hover:bg-[#B85D19]/10 group-hover:text-[#B85D19]"
                  }`}
              >
                {citySightseeingPackages.length}
              </span>
            </button>
          </div>

          {/* Quick Help WhatsApp Touchpoint */}
          <div className="mt-6">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-black/90">
              Need Help Choosing?
            </span>
            <p className="mt-1 text-[11.5px] text-black/90 leading-snug">
              Chat with our Abu Dhabi safari guides directly on WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold !text-[#B85D19] hover:underline"
            >
              <span>Instant WhatsApp Concierge</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Right Column: Clean, Open Layout Without Card Boxes */}
        <div className="col-span-9 p-6 bg-white flex flex-col justify-start">
          {activeTab === "featured" ? (
            <div className="flex flex-col">
              {/* Header with clean title and CTA */}
              <div className="mb-4 flex items-center justify-between border-b border-black/5 pb-3">
                <h3 className="text-sm font-bold text-[#888]">
                  Top Rated Desert Safari Tours
                </h3>
                <Link
                  href="/packages"
                  onClick={onClose}
                  className="group inline-flex items-center gap-1 text-xs font-bold text-[#B85D19] hover:text-[#9B4C12] transition-colors"
                >
                  <span>Explore all tours</span>
                  <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* 6 Clean Open Row Items */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {FEATURED_DESERT_PACKAGES.map((pkg) => (
                  <Link
                    key={pkg.id}
                    href="#packages"
                    onClick={onClose}
                    className="group flex items-center gap-3.5 rounded-lg p-2 transition-colors hover:bg-[#FAF8F5]"
                  >
                    {/* Visual Thumbnail */}
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[#2D241C]">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        sizes="64px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-center overflow-hidden">
                      <h4 className="line-clamp-1 text-[13.5px] font-semibold text-[#1E1A17] transition-colors group-hover:text-[#B85D19]">
                        {pkg.title}
                      </h4>
                      <div className="mt-0.5 flex items-center gap-2 text-[11px] text-[#777]">
                        <span className="flex items-center gap-1 font-semibold text-[#1E1A17]">
                          <Star size={11} fill="#FDB414" color="#FDB414" /> {pkg.rating}
                        </span>
                        <span className="text-[#DDD]">•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} /> {pkg.duration}
                        </span>
                      </div>
                      <div className="mt-1 flex items-baseline gap-1">
                        <span className="text-[13px] font-bold text-[#B85D19]">
                          {pkg.price}
                        </span>
                        <span className="text-[10px] text-[#888]">/ person</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              {/* City Sightseeing Header */}
              <div className="mb-4 flex items-center justify-between border-b border-black/5 pb-3">
                <h3 className="text-sm font-bold text-[#888]">
                  Abu Dhabi & UAE City Sightseeing
                </h3>
                <span className="text-xs font-semibold text-[#B85D19]">
                  {citySightseeingPackages.length} Available Tours
                </span>
              </div>

              {/* Clean City Sightseeing List without Cards */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                {citySightseeingPackages.map((pkg) => (
                  <Link
                    key={pkg.title}
                    href={pkg.href}
                    onClick={onClose}
                    className="group flex items-center justify-between rounded-md px-2.5 py-2 text-[13px] font-medium text-[#2D241C] transition-colors hover:bg-[#FAF8F5] hover:text-[#B85D19]"
                  >
                    <span className="line-clamp-1">{pkg.title}</span>
                    <ChevronRight
                      size={13}
                      className="shrink-0 text-black/20 transition-transform group-hover:translate-x-0.5 group-hover:text-[#B85D19]"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function PackagesDropdown({
  isOpen,
  onClose,
  className = "",
}: PackagesDropdownProps) {
  return (
    <div
      className={`absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200 ${isOpen
        ? "visible translate-y-0 opacity-100"
        : "invisible -translate-y-2 opacity-0 pointer-events-none"
        } ${className}`}
    >
      <PackagesDropdownContent onClose={onClose} />
    </div>
  );
}
