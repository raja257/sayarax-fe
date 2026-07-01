"use client";

import React from "react";

type Props = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

export default function BottomTab({ icon, label, active = false }: Props) {
  return (
    <div
      className={`flex pt-2 flex-col items-center text-xs ${
       active
  ? "text-[#D9A441] drop-shadow-[0_0_6px_rgba(217,164,65,0.6)] scale-105"
  : "text-slate-400"
      }`}
    >
      <div className="w-5 h-5 mb-1">{icon}</div>
      {label}
    </div>
  );
}
