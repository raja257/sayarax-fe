"use client";

import {
  Plane,
  Search,
  ShieldCheck,
  Clock3,
  Building2,
  Star,
  ArrowRight,
} from "lucide-react";
import FeaturedCars from "../component/FeaturedCars";

export default function AirportPickupPage() {
  const dealerships = [
    { name: "Auto King", cars: 120 },
    { name: "Muscat Motors", cars: 85 },
    { name: "Elite Rentals", cars: 60 },
  ];

  const cars = [
    {
      name: "Mercedes C200",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    },
    {
      name: "BMW X5",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    },
    {
      name: "Toyota Corolla",
      price: 15,
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341",
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-b-[40px] bg-gradient-to-br from-slate-950 via-blue-950 to-blue-600 px-5 pt-10 pb-10 text-white">
        <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-blue-500/30 blur-3xl" />

        <div className="flex items-start justify-between">
          <div>
            <p className="text-white/70">Airport Service ✈️</p>

            <h1 className="mt-2 text-3xl font-bold text-white">
              Airport Pickup
            </h1>

            <p className="mt-3 max-w-xs text-sm text-white/70">
              Get your rental car delivered directly to Muscat International
              Airport.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-4 backdrop-blur-lg">
            <Plane size={36} />
          </div>
        </div>

        {/* SEARCH
        <div className="mt-8 flex items-center gap-3 rounded-3xl bg-white p-4 shadow-xl">
          <Search size={20} className="text-slate-400" />
          <input
            placeholder="Search airport rental cars..."
            className="w-full bg-transparent text-slate-900 outline-none"
          />
        </div> */}

        {/* BENEFITS */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-3xl bg-white/10 p-4 backdrop-blur-lg">
            <ShieldCheck size={24} />
            <h3 className="mt-2 font-semibold">Meet & Greet</h3>
            <p className="mt-1 text-xs text-white/70">
              Professional airport delivery.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-4 backdrop-blur-lg">
            <Clock3 size={24} />
            <h3 className="mt-2 font-semibold">Flight Tracking</h3>
            <p className="mt-1 text-xs text-white/70">
              We monitor flight delays.
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

          <button className="font-medium text-blue-600">
            View All
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {dealerships.map((dealer, i) => (
            <div
              key={i}
              className="min-w-[180px] rounded-3xl border border-slate-200 bg-white p-4 shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                <Building2 className="text-blue-600" />
              </div>

              <h3 className="mt-4 font-semibold text-slate-900">
                {dealer.name}
              </h3>

              <p className="text-sm text-slate-500">
                {dealer.cars} Cars Available
              </p>

              <div className="mt-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                Airport Pickup
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

        <div className="space-y-3">
          {[
            "Car waiting when you arrive",
            "No taxi required",
            "24/7 support",
            "Free airport delivery",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* AVAILABLE CARS */}
      <section className="mt-8 px-5">
        <h2 className="mb-4 text-xl font-bold text-slate-900">
          Available Cars
        </h2>

            <FeaturedCars />

      </section>
    </div>
  );
}