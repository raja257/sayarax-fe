"use client";

import QuickBookingCard from "./component/QuickBooking";
import PopularCategories from "./component/PopularCategories";
import FeaturedCars from "./component/FeaturedCars";
// import MonthlyRentalBanner from "./component/MonthlyRentalBanner";
// import NearbyDealerships from "./component/NearbyDealerships";
// import HotDeals from "./component/HotDeals";
import { useRouter } from "next/navigation";
import { BadgeCheck, Star } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

export default function HomePage() {
  const { lang, t } = useLanguage();

  return (
    <main className="px-4 pb-20">
      <QuickBookingCard  />

      <div className="mt-8">
        <PopularCategories />
      </div>
      <PremiumDealers />
      <FeaturedCars  />
      {/* <MonthlyRentalBanner /> */}
      {/* <NearbyDealerships /> */}
      {/* <HotDeals /> */}
    </main>
  );
}


type Lang = "en" | "ar";

export function PremiumDealers() {
  const router = useRouter();
  const { lang, t } = useLanguage();

  const isRTL = lang === "ar";

  const premiumDealers = [
    {
      id: "autoking",
      name: { en: "Auto King Motors", ar: "أوتو كينج موتورز" },
      location: { en: "Muscat, Oman", ar: "مسقط، عمان" },
      rating: 4.9,
      reviews: 312,
      badge: "Top Rated",
      cars: 24,
      initials: "AK",
      gradient: "from-blue-600 to-blue-400",
      cover:
        "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&q=80",
      href: "/dealers/autoking",
    },
    {
      id: "omanrent",
      name: { en: "Oman Rent A Car", ar: "عُمان لتأجير السيارات" },
      location: { en: "Muscat, Oman", ar: "مسقط، عمان" },
      rating: 4.8,
      reviews: 198,
      badge: "Premium",
      cars: 18,
      initials: "OR",
      gradient: "from-emerald-600 to-emerald-400",
      cover:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
      href: "/dealers/omanrent",
    },
    {
      id: "eliteauto",
      name: { en: "Elite Auto Rentals", ar: "إليت لتأجير السيارات" },
      location: { en: "Salalah, Oman", ar: "صلالة، عمان" },
      rating: 4.7,
      reviews: 145,
      badge: "Verified",
      cars: 15,
      initials: "EA",
      gradient: "from-violet-600 to-violet-400",
      cover:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80",
      href: "/dealers/eliteauto",
    },
    {
      id: "muscatcars",
      name: { en: "Muscat Cars", ar: "سيارات مسقط" },
      location: { en: "Muscat, Oman", ar: "مسقط، عمان" },
      rating: 4.7,
      reviews: 201,
      badge: "Top Rated",
      cars: 31,
      initials: "MC",
      gradient: "from-rose-600 to-rose-400",
      cover:
        "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&q=80",
      href: "/dealers/muscatcars",
    },
  ];

  const badgeColors: Record<string, string> = {
    "Top Rated": "bg-amber-100 text-amber-700",
    Premium: "bg-blue-100 text-blue-700",
    Verified: "bg-emerald-100 text-emerald-700",
  };

  return (
    <section className="mt-10 md:mt-14" dir={isRTL ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="mb-4 flex items-end justify-between">
        <div className={isRTL ? "text-right" : "text-left"}>
          <h2 className="text-xl font-bold text-slate-900 md:text-3xl">
            {isRTL ? "أفضل وكالات السيارات" : "Premium dealerships"}
          </h2>

          <p className="mt-1 text-sm text-slate-500 md:text-base">
            {isRTL
              ? "شركاء موثوقون في عمان"
              : "Trusted partners in Oman"}
          </p>
        </div>

        <button
          onClick={() => router.push("/dealers")}
          className="text-sm font-semibold text-[#c1512e] hover:underline"
        >
          {isRTL ? "عرض الكل" : "View all"}
        </button>
      </div>

      {/* Cards */}
      <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:gap-4 md:overflow-visible md:pb-0 scrollbar-hide">
        {premiumDealers.map((dealer) => (
          <button
            key={dealer.id}
            onClick={() => router.push(dealer.href)}
            className="group relative w-56 flex-shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md active:scale-[0.98] md:w-auto"
          >
            {/* Cover */}
            <div className="relative h-28 overflow-hidden bg-slate-100 md:h-32">
              <img
                src={dealer.cover}
                alt={t(dealer.name)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Badge */}
              <span
                className={`absolute top-2 left-2 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  badgeColors[dealer.badge]
                }`}
              >
                {dealer.badge}
              </span>
            </div>

            {/* Avatar */}
            <div
              className={`absolute left-3 top-[72px] md:top-[84px] flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${dealer.gradient} border-2 border-white shadow-lg`}
            >
              <span className="text-xs font-bold text-white">
                {dealer.initials}
              </span>
            </div>

            {/* Info */}
            <div
              className={`px-3 pb-3 pt-7 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              <div className="flex items-start justify-between gap-1">
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">
                    {t(dealer.name)}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-400">
                    {t(dealer.location)}
                  </p>
                </div>

                <BadgeCheck className="h-4 w-4 flex-shrink-0 text-blue-500" />
              </div>

              <div className="mt-2.5 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-semibold text-slate-700">
                    {dealer.rating}
                  </span>
                  <span className="text-xs text-slate-400">
                    ({dealer.reviews})
                  </span>
                </div>

                <span className="text-xs text-slate-200">|</span>

                <span className="text-xs text-slate-500">
                  {dealer.cars} {isRTL ? "سيارة" : "cars"}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
