"use client";

import { useState } from "react";
import { MapPin, Languages, Search, SlidersHorizontal } from "lucide-react";
import { usePathname } from "next/navigation";

export const Header = ({ hiddenRoutes = [], onOpenFilters }) => {
  const [lang, setLang] = useState("EN");
  const pathname = usePathname();
  const shouldHide = hiddenRoutes.includes(pathname);

  if (shouldHide) return null;

  return (
    <header className="sticky top-0 z-50 bg-slate-900">
      <div className="mx-auto max-w-7xl">
        {/* UTILITY STRIP */}
        <div className="flex items-center justify-between border-b border-white/8 px-4 py-2.5 sm:px-6 sm:py-2.5 lg:px-8">
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
            <span className="truncate text-sm font-semibold tracking-tight text-white sm:text-[15px]">
              Sayarax
            </span>
            <span className="text-white/30">&middot;</span>
            <div className="flex shrink-0 items-center gap-1 text-white/55">
              <MapPin size={12} className="sm:size-[13px]" />
              <span className="text-xs sm:text-[13px]">
                <span className="sm:hidden">Muscat</span>
                <span className="hidden sm:inline">Muscat, Oman</span>
              </span>
            </div>
          </div>

          <button
            onClick={() => setLang(lang === "EN" ? "AR" : "EN")}
            aria-label="Change language"
            className="flex h-[26px] shrink-0 items-center gap-1 rounded-lg bg-white/8 px-2.5 text-xs font-medium text-white/80 transition-colors hover:bg-white/12 sm:h-[30px] sm:text-[13px]"
          >
            <Languages size={13} className="sm:size-[15px]" />
            {lang}
          </button>
        </div>

        {/* SEARCH + FILTER */}
        <div className="flex gap-2 px-4 py-3.5 sm:max-w-[540px] sm:px-6 lg:px-8">
          <button className="flex h-[46px] min-w-0 flex-1 items-center gap-2.5 rounded-2xl bg-white/8 px-3.5 transition-colors hover:bg-white/12">
            <Search size={17} className="shrink-0 text-white/40" />
            <span className="truncate text-left text-[13.5px] text-white/45">
              Search cars, SUV, luxury&hellip;
            </span>
          </button>

          <button
            onClick={onOpenFilters}
            aria-label="Open filters"
            className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-2xl bg-blue-600 transition-colors hover:bg-blue-500"
          >
            <SlidersHorizontal size={18} className="text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};