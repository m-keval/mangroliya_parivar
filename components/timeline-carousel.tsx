"use client";

import { useRef } from "react";
import Image from "next/image";
import { Icon } from "@/components/icon";

export function TimelineCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340; // Approx card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pt-8">
      <div className="flex items-center justify-between mb-8 border-b border-ink/10 pb-4">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-700">
          વર્ષવાર સિદ્ધિઓ અને નવી શરૂઆત
        </h3>
        
        {/* Navigation Buttons */}
        <div className="flex items-center gap-2 shrink-0 ml-4">
          <button 
            onClick={() => scroll("left")}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white border border-ink/10 text-ink/70 hover:text-brand-700 hover:border-brand-300 hover:shadow-md transition-all active:scale-95"
            aria-label="Previous"
          >
            <Icon name="arrow-left" size={18} />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white border border-ink/10 text-ink/70 hover:text-brand-700 hover:border-brand-300 hover:shadow-md transition-all active:scale-95"
            aria-label="Next"
          >
            <Icon name="arrow-right" size={18} />
          </button>
        </div>
      </div>
      
      {/* Horizontal Scroll Track */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {Array.from({ length: 36 }).map((_, i) => {
          const year = 2024 - i;
          const isFirst = i === 35; // 1988
          return (
            <div key={year} className="snap-start shrink-0 w-[280px] sm:w-[320px] bg-white rounded-3xl border border-ink/5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
              {/* Image Header */}
              <div className="relative w-full h-48 rounded-t-3xl overflow-hidden bg-sand border-b border-ink/5">
                <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-brand-700 font-bold text-[13px] shadow-sm flex items-center gap-1.5 border border-ink/5">
                  <Icon name={isFirst ? "star" : "calendar"} size={14} />
                  {year}
                </div>
                <Image 
                  src="/snehmilan.jpg" 
                  alt={`${year} સ્નેહ મિલન`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              
              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-display font-bold text-ink text-lg mb-2.5 leading-tight group-hover:text-brand-700 transition-colors">
                  {isFirst ? "પ્રથમ સ્નેહ મિલનની શરૂઆત" : `${year} નો સ્નેહ મિલન સમારોહ`}
                </h4>
                <p className="text-[14px] text-ink/70 leading-relaxed">
                  {isFirst 
                    ? "માંગરોળીયા પરિવારના વડીલો દ્વારા પ્રથમ વાર સ્નેહ મિલન સમારોહનું આયોજન કરવામાં આવ્યું. આ નાનકડી શરૂઆત ભવિષ્ય માટે એક મોટો પાયો બની." 
                    : `વર્ષ ${year} માં પરિવારના સૌ સભ્યોએ ભેગા મળીને સ્નેહ મિલન હર્ષોલ્લાસપૂર્વક ઉજવ્યું. તેજસ્વી તારલાઓનું સન્માન અને સાંસ્કૃતિક કાર્યક્રમો યોજાયા.`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
