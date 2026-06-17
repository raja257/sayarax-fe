// component/SearchWrapper.tsx (renamed to BottomTabsWrapper)
"use client";

import { Car, Home, Heart, User } from "lucide-react";
import { usePathname } from "next/navigation";
import BottomTab from "./BottomTab";

interface BottomTabsWrapperProps {
  hiddenRoutes?: string[]; // <-- allow array of strings
}

export default function BottomTabsWrapper({
  hiddenRoutes = [],
}: BottomTabsWrapperProps) {
  const pathname = usePathname();
  const shouldHide = hiddenRoutes.includes(pathname);

  if (shouldHide) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-950 border-t border-white/10 backdrop-blur">
      <div className="flex justify-around py-3">
        <BottomTab icon={<Home />} label="Home" active />
        <BottomTab icon={<Car />} label="Feed" />
        {/* <BottomTab icon={<Heart />} label="Saved" /> */}
        <BottomTab icon={<User />} label="Profile" />
      </div>
    </nav>
  );
}
