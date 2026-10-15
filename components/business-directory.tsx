"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { Avatar } from "@/components/member-card";

type Business = {
  name: string;
  owner: string;
  industry: string;
  city: string;
  since: number;
  staff: number;
  email: string;
  about: string;
  ownerData?: any;
};

type Props = {
  businesses: Business[];
  businessIndustries: readonly string[];
};

export function BusinessDirectory({ businesses, businessIndustries }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredBusinesses =
    activeCategory === "All"
      ? businesses
      : businesses.filter((b) => b.industry === activeCategory);

  return (
    <div>
      {/* Category Filters */}
      <div className="sticky top-[81px] sm:top-[89px] z-20 py-3 -mx-4 px-4 sm:mx-0 sm:px-0 bg-[#Fdfdfc]/95 backdrop-blur-sm overflow-x-auto light-scrollbar border-b border-ink/5 mb-6">
        <ul className="flex w-max gap-3">
          <li>
            <button
              onClick={() => setActiveCategory("All")}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                activeCategory === "All"
                  ? "border-[#1d2777] bg-[#1d2777] text-white"
                  : "border-ink/10 bg-white text-ink/70 hover:bg-sand"
              }`}
            >
              તમામ
              <span
                className={`flex h-5 items-center justify-center rounded-full px-2 text-[11px] font-bold ${
                  activeCategory === "All"
                    ? "bg-white text-[#1d2777]"
                    : "bg-ink/10 text-ink/70"
                }`}
              >
                {businesses.length}
              </span>
            </button>
          </li>
          {businessIndustries.map((industry) => {
            const count = businesses.filter((b) => b.industry === industry).length;
            const isActive = activeCategory === industry;
            return (
              <li key={industry}>
                <button
                  onClick={() => setActiveCategory(industry)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "border-[#1d2777] bg-[#1d2777] text-white"
                      : "border-ink/10 bg-white text-ink/70 hover:bg-sand"
                  }`}
                >
                  {industry}
                  <span
                    className={`flex h-5 items-center justify-center rounded-full px-2 text-[11px] font-bold ${
                      isActive
                        ? "bg-white text-[#1d2777]"
                        : "bg-ink/10 text-ink/70"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cards Grid */}
      <ul key={activeCategory} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-up">
        {filteredBusinesses.map((business) => {
          const owner = business.ownerData;
          const shortName = business.name.substring(0, 2);

          return (
            <li key={business.name}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-ink/10 bg-white shadow-sm transition-all hover:shadow-md">
                {/* Cover Image Placeholder */}
                <div className="h-28 w-full bg-gradient-to-r from-brand-100 to-sand/80"></div>
                
                {/* Header Section */}
                <div className="px-4 pb-5">
                  <div className="relative -mt-10 flex items-end justify-between">
                    {/* Logo & Checkmark */}
                    <div className="relative">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#1d2777] text-xl font-bold text-white shadow-sm">
                        {shortName}
                      </div>
                      <div className="absolute bottom-0 right-0 rounded-full border-2 border-white bg-green-500 p-0.5 text-white">
                        <Icon name="check" size={10} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    {/* Category Pill */}
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold text-brand-800 tracking-wide">
                      {business.industry}
                    </span>
                    {/* Rating (Dummy) */}
                    <span className="flex items-center gap-1 text-[13px] font-bold text-ink/80">
                      <span className="text-orange-500">★</span> 4.5 <span className="font-normal text-ink/50">(120)</span>
                    </span>
                  </div>

                  {/* Title & Address */}
                  <h2 className="mt-3 font-display text-[17px] font-bold leading-snug text-ink">
                    {business.name}
                  </h2>
                  <p className="mt-1 flex items-start gap-1 text-[13px] text-ink/60 font-medium">
                    <Icon name="map-pin" size={14} className="mt-0.5 shrink-0" />
                    <span className="line-clamp-1">{business.city}</span>
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-5 flex items-center gap-2">
                    <a
                      href={`tel:+919999999999`}
                      className="flex h-10 flex-1 items-center justify-center rounded-xl border border-ink/10 bg-white text-[#1d2777] transition-colors hover:bg-sand"
                      aria-label="Call business"
                    >
                      <Icon name="custom-call" size={18} />
                    </a>
                    <a
                      href={`https://wa.me/919999999999`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 flex-1 items-center justify-center rounded-xl border border-ink/10 bg-white transition-colors hover:bg-sand"
                      aria-label="WhatsApp business"
                    >
                      <Image src="/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
                    </a>
                    <a
                      href="#"
                      className="flex h-10 flex-1 items-center justify-center rounded-xl border border-ink/10 bg-white text-blue-500 transition-colors hover:bg-sand"
                      aria-label="Get directions"
                    >
                      <Icon name="custom-direction" size={18} />
                    </a>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
