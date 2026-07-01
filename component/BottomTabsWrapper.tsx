"use client";

import { Car, Home, User } from "lucide-react";
import { usePathname } from "next/navigation";
import BottomTab from "./BottomTab";
import { useLanguage } from "../context/LanguageContext";

interface BottomTabsWrapperProps {
  hiddenRoutes?: string[];
}

const TABS = [
  { key: "home", label: { en: "Home", ar: "الرئيسية" }, icon: Home, href: "/" },
  { key: "feed", label: { en: "Feed", ar: "السيارات" }, icon: Car, href: "/options?type=default" },
  { key: "profile", label: { en: "Profile", ar: "الملف الشخصي" }, icon: User, href: "/profile" },
];

export default function BottomTabsWrapper({
  hiddenRoutes = [],
}: BottomTabsWrapperProps) {
  const pathname = usePathname();
  const { dir, t } = useLanguage();
  const shouldHide = hiddenRoutes.includes(pathname);

  if (shouldHide) return null;

  return (
    <nav
      dir={dir}
      className="fixed inset-x-0 bottom-0 z-20 border-t border-white/10 bg-[#1B1B18] pb-6"
      style={{
        paddingBottom: "calc(env(safe-area-inset-bottom) + 1rem)",
      }}
    >
      <div className="mx-auto grid max-w-md grid-cols-3 pt-2">
        {TABS.map((tab) => (
          <BottomTab
            key={tab.key}
            icon={<tab.icon size={20} strokeWidth={2.25} />}
            label={t(tab.label)}
            active={pathname === tab.href}
            navigateTo={tab.href}
          />
        ))}
      </div>
    </nav>
  );
}