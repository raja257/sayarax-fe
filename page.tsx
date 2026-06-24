"use client";

import QuickBookingCard from "./component/QuickBooking";
import PopularCategories from "./component/PopularCategories";
import FeaturedCars from "./component/FeaturedCars";
// import MonthlyRentalBanner from "./component/MonthlyRentalBanner";
// import NearbyDealerships from "./component/NearbyDealerships";
// import HotDeals from "./component/HotDeals";
import { useRouter } from "next/navigation";
import { BadgeCheck, Star } from "lucide-react";

export default function HomePage() {
  return (
    <main className="px-4 pb-20">
      <QuickBookingCard />

      <div className="mt-8">
        <PopularCategories />
      </div>
      <PremiumDealers />
      <FeaturedCars />
      {/* <MonthlyRentalBanner /> */}
      {/* <NearbyDealerships /> */}
      {/* <HotDeals /> */}
    </main>
  );
}
const premiumDealers = [
  {
    id: "autoking",
    name: "Auto King Motors",
    location: "Muscat, Oman",
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
    name: "Oman Rent A Car",
    location: "Muscat, Oman",
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
    name: "Elite Auto Rentals",
    location: "Salalah, Oman",
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
    name: "Muscat Cars",
    location: "Muscat, Oman",
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

export function PremiumDealers() {
  const router = useRouter();

  return (
    <section className="mt-10 md:mt-14">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 md:text-3xl">
            Premium dealerships
          </h2>
          <p className="mt-1 text-sm text-slate-500 md:text-base">
            Trusted partners in Oman
          </p>
        </div>
        <button
          onClick={() => router.push("/dealers")}
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          View all
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:gap-4 md:overflow-visible md:pb-0 scrollbar-hide">
        {premiumDealers.map((dealer) => (
          <button
            key={dealer.id}
            onClick={() => router.push(dealer.href)}
            className="group flex-shrink-0 w-56 md:w-auto relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm text-left transition hover:-translate-y-1 hover:shadow-md active:scale-[0.98]"
          >
            {/* Cover image */}
            <div className="relative h-28 md:h-32 overflow-hidden bg-slate-100">
              <img
                src={dealer.cover}
                alt={dealer.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Badge */}
              <span
                className={`absolute top-2 left-2 text-[10px] font-semibold px-2 py-0.5 rounded-full ${badgeColors[dealer.badge]}`}
              >
                {dealer.badge}
              </span>
            </div>

            {/* Logo avatar — gradient + initials */}
            <div
              className={`absolute top-[72px] md:top-[84px] left-3 w-11 h-11 rounded-xl bg-gradient-to-br ${dealer.gradient} shadow-lg flex items-center justify-center border-2 border-white`}
            >
              <span className="text-xs font-bold text-white tracking-wide">
                {dealer.initials}
              </span>
            </div>

            {/* Info */}
            <div className="pt-7 px-3 pb-3">
              <div className="flex items-start justify-between gap-1">
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">
                    {dealer.name}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {dealer.location}
                  </p>
                </div>
                <BadgeCheck className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
              </div>

              <div className="mt-2.5 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-semibold text-slate-700">
                    {dealer.rating}
                  </span>
                  <span className="text-xs text-slate-400">
                    ({dealer.reviews})
                  </span>
                </div>
                <span className="text-slate-200 text-xs">|</span>
                <span className="text-xs text-slate-500">
                  {dealer.cars} cars
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
