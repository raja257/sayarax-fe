"use client";

import { useState } from "react";
import { MapPin, User, Bell, Globe, Search } from "lucide-react";
import { usePathname } from "next/navigation";

export const Header = ({ hiddenRoutes = [] }) => {
  const [lang, setLang] = useState("EN");
  const pathname = usePathname();
  const shouldHide = hiddenRoutes.includes(pathname);

  if (shouldHide) return null;

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 rounded-b-[30px] shadow-xl">
        <div className="max-w-7xl mx-auto px-4 pt-5 pb-6">
          {/* TOP */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-400 text-sm">Welcome 👋</p>

              <h1 className="text-3xl font-bold text-white mt-1 tracking-wide">
                SAYARAX
              </h1>

              <div className="flex items-center gap-1 text-slate-300 mt-1">
                <MapPin size={14} />
                <span className="text-sm">Muscat, Oman</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang(lang === "EN" ? "AR" : "EN")}
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white"
              >
                <Globe size={18} />
              </button>

              <button className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
                <Bell size={18} />
              </button>

              <button className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <User size={18} />
              </button>
            </div>
          </div>

          {/* SEARCH */}
          <div className="mt-5">
            <button className="w-full bg-white rounded-2xl h-14 px-4 flex items-center gap-3 shadow-lg">
              <Search size={20} className="text-slate-400" />

              <span className="text-slate-400 text-sm">
                Search cars, SUV, luxury...
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
