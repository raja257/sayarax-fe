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
      className={`flex flex-col items-center text-xs ${
        active ? "text-blue-500" : "text-slate-400"
      }`}
    >
      <div className="w-5 h-5 mb-1">{icon}</div>
      {label}
    </div>
  );
}
