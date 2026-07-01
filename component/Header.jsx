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

  const [lang, setLang] = useState("ar");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [days, setDays] = useState(1);

  if (hiddenRoutes.includes(pathname)) return null;

  const isRTL = lang === "ar";

  const t = (en, ar) => (isRTL ? ar : en);

  const changeLanguage = (language) => {
    setLang(language);
    setShowLangMenu(false);

    onChangeLocation?.(language);
  };

  return (
    <header
      dir={isRTL ? "rtl" : "ltr"}
      className="sticky top-0 z-30 border-b border-[#2A2A24] bg-[#1B1B18] text-white"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C1502E]">
            <Car size={20} strokeWidth={2.5} />
          </span>

          <div className={isRTL ? "text-right" : "text-left"}>
            <h1 className="text-lg font-extrabold tracking-tight">
              Sayara X
            </h1>

            <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
              {t("Self-drive rentals · Oman", "تأجير سيارات ذاتي القيادة · عمان")}
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
  <div
    className={`absolute mt-2 w-36 overflow-hidden rounded-xl border border-white/10 bg-[#232320] shadow-xl ${
      lang === "ar" ? "left-0" : "right-0"
    }`}
  >
    <button
      onClick={() => changeLanguage("en")}
      className={`w-full px-4 py-3 text-sm hover:bg-white/10 ${
        lang === "en" ? "bg-white/10" : ""
      } ${lang === "ar" ? "text-right" : "text-left"}`}
    >
      🇬🇧 English
    </button>

    <button
      onClick={() => changeLanguage("ar")}
      className={`w-full px-4 py-3 text-sm hover:bg-white/10 ${
        lang === "ar" ? "bg-white/10" : ""
      } ${lang === "ar" ? "text-right" : "text-left"}`}
    >
      🇴🇲 العربية
    </button>
  </div>
)}
          </div>

          {/* Sign In */}
          <button className="hidden rounded-full bg-[#D9A441] px-5 py-2 text-sm font-semibold text-[#1B1B18] transition hover:bg-[#e3b25c] sm:block">
            {t("Sign In", "تسجيل الدخول")}
          </button>
        </div>
      </div>

      {/* Mobile Trip Length */}
      <div
        className="flex items-center justify-center gap-3 border-t border-white/10 px-4 py-2 sm:hidden"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <span className="text-sm text-white/60">
          {t("Trip length", "مدة الرحلة")}
        </span>

        <button
          onClick={() => setDays((d) => Math.max(1, d - 1))}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
        >
          <Minus size={14} />
        </button>

        <span className="w-14 text-center font-semibold">
          {days} {t("day", "يوم")}
          {days > 1 ? "s" : ""}
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