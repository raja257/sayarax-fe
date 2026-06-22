"use client";

import { useState } from "react";
import { MapPin, ChevronDown, Languages } from "lucide-react";
import { usePathname } from "next/navigation";

export const Header = ({ hiddenRoutes = [], onChangeLocation }) => {
  const [lang, setLang] = useState("EN");
  const pathname = usePathname();

  if (hiddenRoutes.includes(pathname)) return null;

  return (
    <header className="sticky top-0 z-50 bg-slate-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* LEFT: location + brand */}
        <div className="flex items-center gap-6 sm:gap-10">
          <div>
            <button
              onClick={onChangeLocation}
              className="mb-0.5 flex items-center gap-1 text-white/55 transition-colors hover:text-white/75"
            >
              <MapPin size={13} className="text-blue-400" />
              <span className="text-xs sm:text-[13px]">Muscat, Oman</span>
              <ChevronDown size={11} className="text-white/35" />
            </button>

            <h1 className="text-[22px] font-semibold leading-tight tracking-tight text-white sm:text-[23px]">
              Sayarax
            </h1>
          </div>

          {/* Desktop-only category pills */}
          <div className="hidden items-center gap-1.5 lg:flex">
            {["Cars", "SUVs", "Luxury", "Vans"].map((cat) => (
              <button
                key={cat}
                className="rounded-full bg-white/6 px-3 py-1 text-xs text-white/45 transition-colors hover:bg-white/10 hover:text-white/70"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: language */}
        <button
          onClick={() => setLang(lang === "EN" ? "AR" : "EN")}
          aria-label="Change language"
          className="flex h-[34px] items-center gap-1.5 rounded-[10px] border border-white/12 bg-white/8 px-3 text-[13px] font-medium text-white/80 transition-colors hover:bg-white/12"
        >
          <Languages size={15} />
          {lang}
        </button>
      </div>
    </header>
  );
};