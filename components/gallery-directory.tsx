"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { Photo } from "@/lib/data";
import { Icon } from "@/components/icon";

type Props = {
  photos: Photo[];
  categories: readonly string[];
};



export function GalleryDirectory({ photos, categories }: Props) {
  // null means we are in "Folders View"
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const filteredPhotos = activeFolder
    ? photos.filter((p) => p.category === activeFolder)
    : [];

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    if (previewIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewIndex(null);
      if (e.key === "ArrowLeft") {
        setPreviewIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
      }
      if (e.key === "ArrowRight") {
        setPreviewIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [previewIndex, filteredPhotos.length]);

  return (
    <div>
      {/* Folder Tabs Navigation (Optional, acts as quick jump) */}
      <div className="sticky top-[81px] sm:top-[89px] z-20 py-3 -mx-4 px-4 sm:mx-0 sm:px-0 bg-[#Fdfdfc]/95 backdrop-blur-sm overflow-x-auto light-scrollbar border-b border-ink/5 mb-6">
        <ul className="flex w-max gap-3">
          <li>
            <button
              onClick={() => setActiveFolder(null)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                activeFolder === null
                  ? "border-[#1d2777] bg-[#1d2777] text-white"
                  : "border-ink/10 bg-white text-ink/70 hover:bg-sand"
              }`}
            >
              <Icon name="arrow-left" size={16} />
              બધા આલ્બમ
              <span
                className={`flex h-5 items-center justify-center rounded-full px-2 text-[11px] font-bold ${
                  activeFolder === null
                    ? "bg-white text-[#1d2777]"
                    : "bg-ink/10 text-ink/70"
                }`}
              >
                {categories.length}
              </span>
            </button>
          </li>
          {categories.map((category) => {
            const count = photos.filter((p) => p.category === category).length;
            const isActive = activeFolder === category;
            return (
              <li key={category}>
                <button
                  onClick={() => setActiveFolder(category)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "border-[#1d2777] bg-[#1d2777] text-white"
                      : "border-ink/10 bg-white text-ink/70 hover:bg-sand"
                  }`}
                >
                  {category}
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

      {activeFolder === null ? (
        /* Folders View (Albums Grid) */
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 animate-fade-up pt-4 pb-8">
          {categories.map((category) => {
            const folderPhotos = photos.filter((p) => p.category === category);
            const coverPhoto = folderPhotos[0];
            if (!coverPhoto) return null;

            return (
              <div
                key={category}
                onClick={() => setActiveFolder(category)}
                className="group relative cursor-pointer"
              >
                {/* Stacked background effect */}
                <div className="absolute inset-x-4 -bottom-3 h-full rounded-[24px] bg-ink/5 border border-ink/10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-2" />
                <div className="absolute inset-x-2 -bottom-1.5 h-full rounded-[24px] bg-ink/5 border border-ink/10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-1" />
                
                {/* Main Card */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-ink/10 bg-sand shadow-sm transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-[#1d2777]/20">
                  <Image
                    src={`https://picsum.photos/seed/${coverPhoto.seed}/800/600`}
                    alt={category}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101754]/95 via-[#152686]/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="translate-y-3 transition-transform duration-500 group-hover:translate-y-0">
                      <h3 className="font-display text-2xl font-bold leading-tight shadow-black/10 drop-shadow-md">
                        {category}
                      </h3>
                      <div className="mt-3 flex items-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
                          <Icon name="camera" size={14} />
                          {folderPhotos.length} ફોટા
                        </span>
                        <span className="flex items-center gap-1.5 rounded-full bg-white text-[#101754] px-3 py-1.5 text-xs font-bold shadow-md">
                          જુઓ <Icon name="arrow-right" size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Images Grid inside a Folder */
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-fade-up">
          {filteredPhotos.map((photo, index) => (
            <figure
              key={photo.slug}
              onClick={() => setPreviewIndex(index)}
              className={`group relative overflow-hidden rounded-[20px] border border-ink/10 bg-ink/5 shadow-sm transition-all hover:shadow-md cursor-pointer ${
                photo.tall ? "lg:row-span-2" : ""
              }`}
            >
              <Image
                src={`https://picsum.photos/seed/${photo.seed}/800/${photo.tall ? 1100 : 640}`}
                alt={photo.title}
                width={800}
                height={photo.tall ? 1100 : 640}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  photo.tall ? "h-72 lg:h-full" : "h-56 sm:h-64"
                }`}
              />
            </figure>
          ))}
        </div>
      )}

      {/* Lightbox Preview (No Labels) */}
      {previewIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
          <button
            onClick={() => setPreviewIndex(null)}
            className="absolute top-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/25"
            aria-label="Close"
          >
            <Icon name="close" size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setPreviewIndex(previewIndex > 0 ? previewIndex - 1 : filteredPhotos.length - 1);
            }}
            className="absolute left-4 sm:left-10 z-50 grid h-14 w-14 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/25"
            aria-label="Previous image"
          >
            <Icon name="arrow-left" size={24} />
          </button>

          <div 
            className="relative h-[85vh] w-[90vw] max-w-6xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`https://picsum.photos/seed/${filteredPhotos[previewIndex].seed}/1920/1080`}
              alt="Preview"
              fill
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setPreviewIndex(previewIndex < filteredPhotos.length - 1 ? previewIndex + 1 : 0);
            }}
            className="absolute right-4 sm:right-10 z-50 grid h-14 w-14 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/25"
            aria-label="Next image"
          >
            <Icon name="arrow-right" size={24} />
          </button>
        </div>
      )}
    </div>
  );
}
