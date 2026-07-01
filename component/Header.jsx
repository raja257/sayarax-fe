"use client";

import { useState } from "react";
import {
  Car,
  Languages,
  ChevronDown,
  Minus,
  Plus,
} from "lucide-react";
import { usePathname } from "next/navigation";

export const Header = ({
  hiddenRoutes = [],
  onChangeLocation,
}) => {
  const pathname = usePathname();

  const [lang, setLang] = useState("EN");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [days, setDays] = useState(1);

  if (hiddenRoutes.includes(pathname)) return null;

  const changeLanguage = (language) => {
    setLang(language);
    setShowLangMenu(false);

    // Optional callback
    if (onChangeLocation) {
      onChangeLocation(language);
    }

    // i18n.changeLanguage(language)
  };

  return (
    <header className="sticky top-0 z-30 border-b border-[#2A2A24] bg-[#1B1B18] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C1502E]">
            <Car size={20} strokeWidth={2.5} />
          </span>

          <div className="leading-tight">
            <h1 className="text-lg font-extrabold tracking-tight">
              Sayara X
            </h1>

            <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
              Self-drive rentals · Oman
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:bg-white/10"
            >
              <Languages size={16} />
              <span>{lang}</span>
              <ChevronDown
                size={15}
                className={`transition ${
                  showLangMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-36 overflow-hidden rounded-xl border border-white/10 bg-[#232320] shadow-xl">
                <button
                  onClick={() => changeLanguage("EN")}
                  className={`w-full px-4 py-3 text-left text-sm hover:bg-white/10 ${
                    lang === "EN" ? "bg-white/10" : ""
                  }`}
                >
                  🇬🇧 English
                </button>

                <button
                  onClick={() => changeLanguage("AR")}
                  className={`w-full px-4 py-3 text-left text-sm hover:bg-white/10 ${
                    lang === "AR" ? "bg-white/10" : ""
                  }`}
                >
                  🇴🇲 العربية
                </button>
              </div>
            )}
          </div>

          {/* Sign In */}
          <button className="hidden rounded-full bg-[#D9A441] px-5 py-2 text-sm font-semibold text-[#1B1B18] transition hover:bg-[#e3b25c] sm:block">
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Trip Length */}
      <div className="flex items-center justify-center gap-3 border-t border-white/10 px-4 py-2 sm:hidden">
        <span className="text-sm text-white/60">
          Trip length
        </span>

        <button
          onClick={() => setDays((d) => Math.max(1, d - 1))}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
        >
          <Minus size={14} />
        </button>

        <span className="w-14 text-center font-semibold">
          {days} day{days > 1 ? "s" : ""}
        </span>

        <button
          onClick={() => setDays((d) => Math.min(30, d + 1))}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
        >
          <Plus size={14} />
        </button>
      </div>
    </header>
  );
};