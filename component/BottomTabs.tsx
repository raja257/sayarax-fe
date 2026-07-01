// component/BottomTab.tsx
"use client";

import { ReactNode } from "react";

interface BottomTabProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function BottomTab({ icon, label, active = false, onClick }: BottomTabProps) {
  return (
    <button
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className="flex flex-col items-center justify-center gap-1 py-2.5"
    >
      <span
        className={[
          "flex h-8 w-12 items-center justify-center rounded-full transition-colors duration-200",
          active ? "bg-[#C1502E] text-white" : "text-white/45",
        ].join(" ")}
      >
        {icon}
      </span>
      <span
        className={[
          "text-[11px] font-medium transition-colors duration-200",
          active ? "text-white" : "text-white/45",
        ].join(" ")}
      >
        {label}
      </span>
    </button>
  );
}