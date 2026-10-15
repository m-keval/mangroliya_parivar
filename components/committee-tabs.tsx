"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CommitteeCategory, CommitteePost, Member } from "@/lib/data";
import { Icon } from "@/components/icon";
import { getMember, portraitUrl } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

type TabConfig = {
  key: CommitteeCategory;
  label: string;
  labelGu: string;
};

const tabs: TabConfig[] = [
  {
    key: "Karobari Samiti",
    label: "Karobari Samiti",
    labelGu: "કારોબારી સમિતિ",
  },
  {
    key: "Yuva Samiti",
    label: "Yuva Committee",
    labelGu: "યુવા સમિતિ",
  },
  {
    key: "Mahila Samiti",
    label: "Mahila Samiti",
    labelGu: "મહિલા સમિતિ",
  },
  {
    key: "Vividh Samiti",
    label: "Vividh Samiti",
    labelGu: "વિવિધ સમિતિ",
  },
  {
    key: "Salahkar Samiti",
    label: "Salahkar Samiti",
    labelGu: "સલાહકાર સમિતિ",
  },
];

function CommitteeCard({
  post,
  member,
}: {
  post: CommitteePost;
  member: Member;
}) {
  return (
    <article className="group relative flex flex-col bg-white border border-ink/5 rounded-3xl p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-100/50">
      
      {/* Inner Padded Image Area (Compact Photo) */}
      <div className="relative w-full aspect-square rounded-[1.25rem] bg-sand flex items-center justify-center overflow-hidden">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.nameGu || member.name}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-sand flex flex-col items-center justify-center">
            <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_center,rgb(123_30_30)_1px,transparent_1px)] [background-size:12px_12px]" />
            <Image
              src="/logo.png"
              alt="Placeholder Portrait"
              width={100}
              height={100}
              className="w-16 h-16 object-contain opacity-20 mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        )}
      </div>

      {/* Content Area (Compacted) */}
      <div className="flex flex-col items-center text-center px-1 pt-2.5 pb-1 w-full bg-white">
        {/* Role */}
        <p className="text-[11px] font-bold text-brand-600 tracking-wide uppercase mb-1 bg-brand-50/80 px-2 py-0.5 rounded-full transition-colors group-hover:bg-brand-50">
          {post.postGu}
        </p>
        
        {/* Name and Native Village */}
        <h3 className="font-display text-[15px] font-bold text-ink leading-tight transition-colors group-hover:text-brand-700">
          {(member.nameGu || member.name).split(" ").slice(0, 2).join(" ")}{" "}
          <span className="text-[12px] font-medium text-ink/50 whitespace-nowrap">
            ({member.nativeVillage || "સાવરકુંડલા"})
          </span>
        </h3>
        
        {/* City Location */}
        <div className="mt-1.5 flex items-center gap-1 text-[11.5px] font-semibold text-ink/60 bg-ink/5 px-2.5 py-0.5 rounded-full transition-colors group-hover:bg-brand-50">
          <Icon name="map-pin" size={11} className="text-brand-500 shrink-0" />
          <span className="truncate max-w-[140px] text-brand-900" title={member.city}>{member.city}</span>
        </div>
      </div>
    </article>
  );
}

export function CommitteeTabs({
  posts,
}: {
  posts: CommitteePost[];
}) {
  const [activeCity, setActiveCity] = useState<string>("તમામ");
  const [activeTab, setActiveTab] = useState<CommitteeCategory>("Karobari Samiti");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 1. Extract all unique cities globally from all posts
  const allCities = Array.from(
    new Set(
      posts
        .map((p) => getMember(p.slug)?.city)
        .filter((city): city is string => Boolean(city))
    )
  ).sort();

  // 2. Filter posts by the selected city
  const postsForCity = posts.filter((p) => {
    if (activeCity === "તમામ") return true;
    const member = getMember(p.slug);
    return member?.city === activeCity;
  });

  // 3. Filter the city-filtered posts by the active committee tab
  const filteredPosts = postsForCity.filter((p) => p.category === activeTab);

  return (
    <div>
      {/* City Dropdown (Primary Filter) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="font-display text-2xl font-bold text-brand-700">
          સમિતિના સભ્યો
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-ink/70">
            શહેર:
          </span>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between gap-3 rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-bold text-brand-700 shadow-sm transition-all hover:border-brand-300 hover:shadow-md min-w-[220px]"
            >
              <span>
                {activeCity === "તમામ"
                  ? `તમામ શહેરો`
                  : activeCity}
              </span>
              <div className="flex items-center gap-2">
                <span className="flex h-5 items-center justify-center rounded-full bg-brand-50 px-2 text-[11px] font-bold text-brand-700">
                  {activeCity === "તમામ" 
                    ? posts.length 
                    : posts.filter((p) => getMember(p.slug)?.city === activeCity).length}
                </span>
                <Icon
                  name="chevron-down"
                  size={16}
                  className={`text-brand-500 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {isDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div className="absolute right-0 top-full z-50 mt-2 w-full min-w-[240px] origin-top-right rounded-2xl border border-ink/10 bg-white p-2 shadow-xl animate-in fade-in zoom-in-95 duration-200">
                  <button
                    onClick={() => {
                      setActiveCity("તમામ");
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      activeCity === "તમામ"
                        ? "bg-brand-50 text-brand-700"
                        : "text-ink/80 hover:bg-sand hover:text-ink"
                    }`}
                  >
                    તમામ શહેરો
                    <span className="text-[11px] font-bold text-ink/40 bg-ink/5 px-2 py-0.5 rounded-full">
                      {posts.length}
                    </span>
                  </button>
                  {allCities.map((city) => {
                    const count = posts.filter(
                      (p) => getMember(p.slug)?.city === city
                    ).length;
                    const isActive = activeCity === city;
                    return (
                      <button
                        key={city}
                        onClick={() => {
                          setActiveCity(city);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all mt-1 ${
                          isActive
                            ? "bg-brand-50 text-brand-700"
                            : "text-ink/80 hover:bg-sand hover:text-ink"
                        }`}
                      >
                        {city}
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                            isActive
                              ? "bg-brand-100 text-brand-700"
                              : "bg-ink/5 text-ink/40"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Top Tabs for Committee Selection (Secondary Filter) */}
      <div className="sticky top-[61px] sm:top-[73px] z-20 py-3 -mx-4 px-4 sm:mx-0 sm:px-0 bg-[#Fdfdfc]/95 backdrop-blur-sm overflow-x-auto light-scrollbar border-b border-ink/5 mb-8">
        <ul className="flex w-max gap-3">
          {tabs.map((tab) => {
            const count = postsForCity.filter((p) => p.category === tab.key).length;
            const isActive = activeTab === tab.key;
            return (
              <li key={tab.key}>
                <button
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "border-brand-700 bg-brand-700 text-white"
                      : "border-ink/10 bg-white text-ink/70 hover:bg-sand hover:text-brand-700"
                  }`}
                >
                  {tab.labelGu}
                  <span
                    className={`flex h-5 items-center justify-center rounded-full px-2 text-[11px] font-bold ${
                      isActive
                        ? "bg-white text-brand-700"
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

      {/* Main Content */}
      <div className="flex-1 min-h-[400px]">
        {/* Cards grid */}
        <motion.div
          key={`${activeTab}-${activeCity}`}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
            {filteredPosts.map((post) => {
              const member = getMember(post.slug);
              if (!member) return null;

              return (
                <CommitteeCard
                  key={post.post}
                  post={post}
                  member={member}
                />
              );
            })}
        </motion.div>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className="mt-8 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-ink/10 py-16 text-center">
            <p className="text-sm font-medium text-muted">
              આ સમિતિમાં હજુ કોઈ સભ્ય નથી
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
