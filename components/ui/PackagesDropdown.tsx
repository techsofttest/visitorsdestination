"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { DesertIcon, CityIcon } from "@/components/ui/SocialIcons";
import {
  desertAdventurePackages,
  citySightseeingPackages,
} from "@/components/data/content";

interface PackagesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function PackagesDropdown({
  isOpen,
  onClose,
  className = "",
}: PackagesDropdownProps) {
  const [activeTab, setActiveTab] = useState<"desert" | "city">("desert");

  const categories = [
    {
      id: "desert" as const,
      label: "Desert Adventure",
      icon: DesertIcon,
      packages: desertAdventurePackages,
    },
    {
      id: "city" as const,
      label: "City Sightseeing",
      icon: CityIcon,
      packages: citySightseeingPackages,
    },
  ];

  const currentPackages =
    activeTab === "desert" ? desertAdventurePackages : citySightseeingPackages;

  return (
    <div
      className={`absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200 ${isOpen
        ? "visible translate-y-0 opacity-100"
        : "invisible -translate-y-2 opacity-0 pointer-events-none"
        } ${className}`}
    >
      <div className="w-[860px] max-w-[94vw] overflow-hidden rounded-xl bg-white text-[#111111] shadow-lg border border-[#111111]/15">
        <div className="grid grid-cols-12 min-h-[360px]">
          {/* Left Column: Category Tabs */}
          <div className="col-span-4 border-r border-black/10 bg-[#F7F6F3] p-3.5 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#6E6E6E]">
                Categories
              </div>
              {categories.map((cat) => {
                const isActive = activeTab === cat.id;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveTab(cat.id)}
                    onMouseEnter={() => setActiveTab(cat.id)}
                    className={`group flex w-full items-center justify-between rounded-lg px-3.5 py-3 text-left text-[13px] font-bold transition-all ${isActive
                      ? "bg-[#8B181B] text-white"
                      : "text-[#111111] hover:bg-white/70 hover:text-[#8B181B]"
                      }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon
                        size={17}
                        className={`shrink-0 transition-colors ${isActive ? "text-white" : "text-[#8B181B]"
                          }`}
                      />
                      <span>{cat.label}</span>
                    </span>
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold transition-colors ${isActive
                        ? "bg-white/90 text-[#8B181B]"
                        : "bg-black/10 text-[#444444] group-hover:bg-[#8B181B]/15 group-hover:text-[#8B181B]"
                        }`}
                    >
                      {cat.packages.length}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="border-t border-black/10 pt-3 px-2 text-xs">
              <span className="font-semibold text-[#111111]/60">Need assistance?</span>
              <a
                href="tel:+971544278880"
                className="mt-1 flex items-center gap-1.5 font-semibold text-[#8B181B] hover:underline"
              >
                <span>+971 54 427 8880</span>
              </a>
            </div>
          </div>

          {/* Right Column: Packages List in 2-Column Grid */}
          <div className="col-span-8 p-4 bg-white flex flex-col">
            <div className="mb-2.5 flex items-center justify-between border-b border-black/10 pb-2 px-2 text-xs">
              <span className="font-bold text-[#8B181B]">
                {activeTab === "desert" ? "Desert Adventure Packages" : "City Sightseeing Packages"}
              </span>
              <span className="text-[#6E6E6E] font-medium text-[11px]">
                {currentPackages.length} packages available
              </span>
            </div>

            <div className="custom-scrollbar max-h-[320px] overflow-y-auto pr-1.5">
              <div className="grid grid-cols-2 gap-1.5">
                {currentPackages.map((pkg) => (
                  <Link
                    key={pkg.title}
                    href={pkg.href}
                    onClick={onClose}
                    className="group flex items-center justify-between rounded-lg px-2.5 py-2 text-[12.5px] font-semibold text-[#1E1E1E] transition-all hover:bg-[#F7F6F3] hover:text-[#8B181B]"
                  >
                    <span className="line-clamp-1 leading-snug">{pkg.title}</span>
                    <ChevronRight
                      size={13}
                      className="shrink-0 text-black/35 transition-transform group-hover:translate-x-0.5 group-hover:text-[#8B181B]"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
