// component/SearchWrapper.tsx
"use client";

import SearchTrigger from "./SearchTrigger";
import { usePathname } from "next/navigation";

interface SearchWrapperProps {
  hiddenRoutes?: string[]; // <-- allow array of strings
}

export default function SearchWrapper({ hiddenRoutes = [] }: SearchWrapperProps) {
  const pathname = usePathname();
  const shouldHide = hiddenRoutes.includes(pathname);

  if (shouldHide) return null;

  return (
    <div className="block md:hidden p-4">
      <SearchTrigger />
    </div>
  );
}
