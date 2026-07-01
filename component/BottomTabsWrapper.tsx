// // component/SearchWrapper.tsx (renamed to BottomTabsWrapper)
// "use client";

// import { Car, Home, Heart, User } from "lucide-react";
// import { usePathname } from "next/navigation";
// import BottomTab from "./BottomTab";

// interface BottomTabsWrapperProps {
//   hiddenRoutes?: string[]; // <-- allow array of strings
// }

// export default function BottomTabsWrapper({
//   hiddenRoutes = [],
// }: BottomTabsWrapperProps) {
//   const pathname = usePathname();
//   const shouldHide = hiddenRoutes.includes(pathname);

//   if (shouldHide) return null;

//   return (
//     <nav className="fixed bottom-0 left-0 right-0 z-20 border-b border-[#2A2A24] bg-[#1B1B18] text-white border-t border-white/10 backdrop-blur">
//       <div className="flex justify-around py-3">
//         <BottomTab icon={<Home />} label="Home" active />
//         <BottomTab icon={<Car />} label="Feed" />
//         <BottomTab icon={<User />} label="Profile" />
//       </div>
//     </nav>
//   );
// }
// component/BottomTab.tsx
// component/BottomTab.tsx
// component/BottomTabsWrapper.tsx
"use client";

import { Car, Home, User } from "lucide-react";
import { usePathname } from "next/navigation";
import BottomTab from "./BottomTab";

interface BottomTabsWrapperProps {
  hiddenRoutes?: string[];
}

const TABS = [
  { key: "home", label: "Home", icon: Home, href: "/" },
  { key: "feed", label: "Feed", icon: Car, href: "/feed" },
  { key: "profile", label: "Profile", icon: User, href: "/profile" },
];

export default function BottomTabsWrapper({
  hiddenRoutes = [],
}: BottomTabsWrapperProps) {
  const pathname = usePathname();
  const shouldHide = hiddenRoutes.includes(pathname);

  if (shouldHide) return null;

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-20 border-t border-white/10 bg-[#1B1B18]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto grid max-w-md grid-cols-3">
        {TABS.map((tab) => (
          <BottomTab
            key={tab.key}
            icon={<tab.icon size={20} strokeWidth={2.25} />}
            label={tab.label}
            active={pathname === tab.href}
          />
        ))}
      </div>
    </nav>
  );
}