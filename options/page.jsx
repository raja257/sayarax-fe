"use client";

import {
  Plane,
  ShieldCheck,
  Clock3,
  Building2,
  Filter,
  BadgeCheck,
} from "lucide-react";
import FeaturedCars from "../component/FeaturedCars";

export default function AirportPickupPage() {
  const dealerships = [
    { name: "Auto King", cars: 120 },
    { name: "Muscat Motors", cars: 85 },
    { name: "Elite Rentals", cars: 60 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-b-[28px] bg-gradient-to-br from-slate-950 via-blue-950 to-blue-600 px-5 pt-6 pb-6 text-white">
        <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-white/70">
              Airport Service ✈️
            </p>

            <h1 className="mt-1 text-xl font-bold">
              Airport Pickup
            </h1>

            <p className="mt-1 max-w-xs text-xs text-white/70">
              Car delivery directly to Muscat Airport.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-lg">
            <Plane size={24} />
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-lg">
            <ShieldCheck size={20} />

            <h3 className="mt-2 text-sm font-semibold">
              Meet & Greet
            </h3>

            <p className="mt-1 text-xs text-white/70">
              Professional airport delivery.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-lg">
            <Clock3 size={20} />

            <h3 className="mt-2 text-sm font-semibold">
              Flight Tracking
            </h3>

            <p className="mt-1 text-xs text-white/70">
              We monitor delays automatically.
            </p>
          </div>
        </div>
      </section>

{/* DEALERSHIPS */}
<section className="mt-8 px-5">
  <div className="mb-4 flex items-center justify-between">
    <h2 className="text-xl font-bold text-slate-900">
      Featured Dealerships
    </h2>

    <button className="text-sm font-medium text-blue-600">
      View All
    </button>
  </div>

  <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
    {dealerships.map((dealer, i) => (
      <div
        key={i}
        className="min-w-[260px] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
            <Building2 size={20} className="text-blue-600" />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-slate-900">
                {dealer.name}
              </h3>

              <BadgeCheck
                size={15}
                className="text-emerald-500"
              />
            </div>

            <p className="text-sm text-slate-500">
              {dealer.cars} Cars Available
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
            Verified
          </div>

          <div className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
            Featured
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* WHY CHOOSE */}
      <section className="mt-8 px-5">
        <h2 className="mb-4 text-xl font-bold text-slate-900">
          Why Choose Airport Pickup?
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {[
            "Car waiting on arrival",
            "No taxi required",
            "24/7 support",
            "Free airport delivery",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* AVAILABLE CARS */}
      <section className="mt-8 px-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">
            Available Cars
          </h2>

          <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <Filter size={16} />
            Filters
          </button>
        </div>

        <FeaturedCars />
      </section>
    </div>
  );
}